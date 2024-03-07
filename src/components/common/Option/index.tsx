import type { FC, KeyboardEvent } from 'react';

import IconSVG from 'src/components/InlineImages';
import { getOptionButtonColors } from 'src/utils';
import styles from './Option.module.css';

export type OptionStatusType = 'inactive' | 'correct' | 'wrong';

export interface OptionProps {
  isClickable: boolean;
  letter: string;
  text: string;
  status: OptionStatusType;
  onClick: () => void;
}

const Option: FC<OptionProps> = ({ isClickable, letter, text, status, onClick }) => {
  const { color, bgColor } = getOptionButtonColors(status);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  };

  let animationClass = '';
  if (status === 'correct') {
    animationClass = styles.correctBlink;
  } else if (status === 'wrong') {
    animationClass = styles.incorrectBlink;
  }

  return (
    <div
      className={`${styles.optionContainer} ${!isClickable ? styles.disableClick : ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-hidden="true"
      role="button"
    >
      <IconSVG.Option color={color} bgColor={bgColor} />
      <div className={`${styles.optionContent} ${styles[status]} ${animationClass} `}>
        <span className={styles.optionLetter}>{letter}</span>
        <span className={styles.disableClick}>{text}</span>
      </div>
    </div>
  );
};

export default Option;
