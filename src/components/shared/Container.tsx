import React, { ReactNode } from "react";

const Container = ({ children } : {children: ReactNode}) => {
  return <div className="max-w-[1200px] mx-auto px-4">{children}</div>;
};

export default Container;
