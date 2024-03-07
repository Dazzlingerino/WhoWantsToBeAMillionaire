'use client';

import type { FC } from 'react';
import IconSVG from 'src/components/InlineImages';
import IconButton from 'src/components/common/IconButton';

export interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className: string;
}

const MenuButton: FC<MenuButtonProps> = ({ isOpen, onClick, className }) => {
  return (
    <div className={className}>
      <IconButton onClick={onClick}>{isOpen ? <IconSVG.Menu /> : <IconSVG.Cross />}</IconButton>
    </div>
  );
};

export default MenuButton;
