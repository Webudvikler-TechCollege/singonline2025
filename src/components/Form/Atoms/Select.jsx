import React from "react";

export const Select = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <select ref={ref} {...props}>
      {children}
    </select>
  );
});
