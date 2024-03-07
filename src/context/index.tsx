'use client';

import { createContext, useContext, useState, type ReactNode, useMemo } from 'react';

const GameContext = createContext<any>(undefined);

export const useGameContext = () => useContext(GameContext);

export const GameWrapper = ({ children }: { children: ReactNode }) => {
  const [prize, setPrize] = useState(0);

  return (
    <GameContext.Provider value={useMemo(() => ({ prize, setPrize }), [prize, setPrize])}>
      {children}
    </GameContext.Provider>
  );
};
