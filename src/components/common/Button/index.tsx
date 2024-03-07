import type { FC } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  text?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
