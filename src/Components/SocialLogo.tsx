import React from "react";

interface Props {
  Element: React.ReactNode;
  handleClick: () => {};
  textSize: string;
  Color: string;
}

const SocialLogo = ({ Element, handleClick, textSize, Color }: Props) => {
  return (
    <>
      <span
        className={`text-${textSize} text-${Color} cursor-pointer `}
        onClick={() => handleClick()}
      >
        {Element}
      </span>
    </>
  );
};

export default SocialLogo;
