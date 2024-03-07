'use client';

import type { FC } from 'react';
import { useGameContext } from 'src/context';

const Score: FC = () => {
  const { prize } = useGameContext();

  return (
    <div>
      <h2>Total score: </h2>
      <h1>${prize ?? 0} earned</h1>
    </div>
  );
};
export default Score;
