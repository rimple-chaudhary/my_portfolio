import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "nodedotjs",
  "tailwindcss",
  "redux",
  "webpack",
  "antdesign",
  "eslint",
  "postman",
  "npm",
  "strapi",
  "amazonaws",
  "jest",
  "git",
  "github",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
