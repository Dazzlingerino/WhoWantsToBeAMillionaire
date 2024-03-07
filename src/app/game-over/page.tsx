import type { FC } from 'react';
import StartGameButton from 'src/components/StartGameButton';
import Score from 'src/components/Score';
import styles from './GameOver.module.css';

const GameOver: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/like.svg" alt="Who wants to be a millionaire?" />
      </div>

      <div className={styles.contentContainer}>
        <Score />
        <StartGameButton text="Try again" />
      </div>
    </div>
  );
};

export default GameOver;
