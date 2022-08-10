import React from "react";
import styles from "../../styles/Index.module.css";
const ButtonIcon = (props) => {
  const { value, text, circleType, ...restProps } = props;
  return (
    <button
      className={`${
        !circleType ? styles.typePostButton : styles.typePostButtonCircle
      }`}
      style={{ borderRadius: "29px" }}
      {...restProps}
    >
      {value}
      <p>{text}</p>
    </button>
  );
};

export default ButtonIcon;
