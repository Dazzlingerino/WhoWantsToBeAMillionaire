import type { FC } from 'react';
import type { Feedback } from 'src/app/game/hook';
import Option from 'src/components/common/Option';
import { getStatus, mapIndexToLetter } from 'src/utils';
import styles from './Options.module.css';

export interface OptionsProps {
  isClickable: boolean;
  options: string[];
  feedback: Feedback;
  onOptionSelect: (index: number) => void;
}

const Options: FC<OptionsProps> = ({ isClickable, options, feedback, onOptionSelect }) => {
  return (
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <Option
          key={option}
          letter={mapIndexToLetter(index)}
          text={option}
          status={getStatus(index, feedback)}
          onClick={() => onOptionSelect(index)}
          isClickable={isClickable}
        />
      ))}
    </div>
  );
};

export default Options;
