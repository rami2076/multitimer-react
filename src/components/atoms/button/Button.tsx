import styled from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({ onClick, disabled, text }: ButtonProps) => {
  return (
    <button className={styled.visibleButton} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
