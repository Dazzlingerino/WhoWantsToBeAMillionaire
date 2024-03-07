'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import Button from 'src/components/common/Button';

export interface StartGameButtonProps {
  text?: string;
}

const StartGameButton: FC<StartGameButtonProps> = ({ text = 'Start' }) => {
  const router = useRouter();

  const onClick = () => {
    router.push('game');
  };

  return <Button text={text} onClick={onClick} />;
};

export default StartGameButton;
