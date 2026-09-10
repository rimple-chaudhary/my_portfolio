const ESCAPE = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };

// Comments and strings come first so keywords inside them are not re-matched.
const PATTERN =
  /(\/\/[^\n]*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|\b(const|let|await|async|function|return|export|import|from|if|new|type|interface|enum|default|true|false|null)\b|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)(?=\s*:)|\b(\d+)\b/g;

const CLASSES = ["tok-com", "tok-str", "tok-key", "tok-fn", "tok-prop", "tok-num"];

/**
 * Minimal static highlighter. The source is authored here, never user input,
 * and it is escaped before any markup is added — so this replaces a whole
 * syntax-highlighting dependency for one decorative snippet.
 */
function highlight(source) {
  const escaped = source.replace(/[&<>]/g, (c) => ESCAPE[c]);

  return escaped.replace(PATTERN, (match, ...groups) => {
    const index = groups.findIndex((g, i) => i < CLASSES.length && g !== undefined);
    return index === -1 ? match : `<span class="${CLASSES[index]}">${match}</span>`;
  });
}

export default function CodeBlock({ filename, code }) {
  return (
    <div className="code-window">
      <div className="flex items-center gap-2 border-b border-hairline bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted">{filename}</span>
      </div>
      <pre>
        <code
          className="font-mono"
          dangerouslySetInnerHTML={{ __html: highlight(code.trim()) }}
        />
      </pre>
    </div>
  );
}
