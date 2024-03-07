import type { FC } from 'react';
import StartGameButton from 'src/components/StartGameButton';
import styles from './page.module.css'; // Import the corresponding styles

const StartGame: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="like.svg" alt="Who wants to be a millionaire?" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <StartGameButton />
      </div>
    </div>
  );
};

export default StartGame;
