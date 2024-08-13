import React from 'react';

export const Input = React.forwardRef(
  ({ type, placeholder, ...props }, ref) => {
    return (
      <input
        className="p-3 rounded lg:w-96 w-80"
        {...props}
        ref={ref}
        type={type}
        placeholder={placeholder}
      />
    );
  }
);
