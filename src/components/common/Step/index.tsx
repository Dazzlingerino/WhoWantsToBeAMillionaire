import type { FC } from 'react';
import IconSVG from 'src/components/InlineImages';
import styles from './Step.module.css';

export interface StepProps {
  stepNumber: number;
  isCompleted?: boolean;
  isActive?: boolean;
}

const Step: FC<StepProps> = ({ stepNumber, isCompleted, isActive }) => {
  let stepStyle = styles.default;
  if (isCompleted) stepStyle = styles.completed;
  if (isActive) stepStyle = styles.active;

  return (
    <div className={`${styles.stepContainer} ${stepStyle}`}>
      <IconSVG.Step />
      <span className={styles.disableClick}>${stepNumber.toLocaleString()}</span>
    </div>
  );
};

export default Step;
