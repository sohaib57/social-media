import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>This is blog layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;
