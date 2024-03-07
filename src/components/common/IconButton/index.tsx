import type { FC, ReactNode } from 'react';

import styles from './IconButton.module.css';

export interface IconButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className={styles.iconButton}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
      role="button"
    >
      {children}
    </div>
  );
};

export default IconButton;
