import React from "react";

const Button = (props) => {
  const {
    text,
    textColor,
    height,
    borderRadius,
    className,
    color,
    hoverColor,
    fontSize,
    fontWeight,
    disabled,
    padding,
    border,
    hoverBorder,
    ...restProps
  } = props;
  return (
    <button
      className={`typePostButton ${className} ${disabled && "disabled"} `}
      {...restProps}
    >
      {typeof text === "string" ? <p>{text}</p> : <>{text}</>}
      <style jsx>{`
        .typePostButton {
          background-color: ${color || "#fff"};
          padding: ${padding || "0px 13px 0px 13px"};
          border: none;
          color: ${textColor || "rgba(0, 0, 0, 0.6)"};
          height: ${height || "30px"};
          display: flex;
          align-items: center;
          border-radius: ${borderRadius || "29px"};
          border: ${border};
        }
        .typePostButton:hover {
          cursor: pointer;
          background-color: ${hoverColor || "rgba(0, 0, 0, 0.1)"};
          border: ${hoverBorder};
        }
        .typePostButton p {
          font-size: ${fontSize || "14.5px"};
          font-weight: ${fontWeight || 600};
        }
        .disabled {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .disabled:hover {
          background-color: rgba(0, 0, 0, 0.3);
          cursor: no-drop;
        }
      `}</style>
    </button>
  );
};

export default Button;
