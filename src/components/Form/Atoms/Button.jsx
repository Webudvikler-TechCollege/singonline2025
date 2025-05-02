export const Button = ({ children, onClick, type = "button", className = "", ...rest }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`btn ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  };
  