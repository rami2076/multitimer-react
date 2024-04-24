import styled from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({ onClick, disabled, text }: ButtonProps) => {
  const buttonStyle: string = disabled ? styled.disabledButton : styled.visibleButton;
  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
