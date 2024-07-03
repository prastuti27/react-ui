import React from "react";

type TypographyType = {
  variant?: "h1" | "h2" | "p";
  content: string;
  className?: string;
  children?: React.ReactNode;
};

const Typography = ({
  variant = "p",
  content,
  className,
  children,
}: TypographyType) => {
  const Tag = variant || "p";

  const defaultClassNames = {
    h1: "text-purple-dark text-start text-5xl font-semibold",
    h2: "text-purple-dark mt-10 text-2xl sm:text-3xl lg:text-4xl text-start font-semibold",
    p: "md:text-start text-purple-light p-3",
  };

  const combinedClassName = `${defaultClassNames[Tag]} ${
    className || ""
  }`.trim();

  return (
    <Tag className={combinedClassName}>
      {content}
      {children}
    </Tag>
  );
};

export default Typography;
