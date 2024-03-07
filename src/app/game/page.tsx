'use client';

import { type FC } from 'react';
import Options from 'src/components/Options';
import MenuButton from 'src/components/MenuButton';

import Steps from 'src/components/Steps';
import styles from './Game.module.css';
import useGame from './hook';

const Game: FC = () => {
  const {
    isMenuOpen,
    isOptionClickable,
    currentStep,
    prizes,
    currentQuestionObject,
    feedback,
    toggleMenu,
    onOptionSelect,
  } = useGame();

  return (
    <div className={styles.gameContainer}>
      <MenuButton isOpen={!isMenuOpen} onClick={toggleMenu} className={styles.menuButton} />

      <div className={`${styles.leftSideContainer} ${isMenuOpen ? styles.hide : styles.show}`}>
        <div className={styles.questionContainer}>
          <h1 className={styles.title}>{currentQuestionObject.question}</h1>
        </div>

        <Options
          options={currentQuestionObject.options}
          onOptionSelect={onOptionSelect}
          feedback={feedback}
          isClickable={isOptionClickable}
        />
      </div>

      <div className={`${styles.rightSideContainer} ${isMenuOpen ? styles.show : styles.hide}`}>
        <Steps prizes={prizes} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default Game;
