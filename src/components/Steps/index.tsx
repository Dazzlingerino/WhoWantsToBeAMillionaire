import type { FC } from 'react';
import Step from 'src/components/common/Step';
import styles from './Steps.module.css';

export interface StepsProps {
  prizes: number[];
  currentStep: number;
}

const Steps: FC<StepsProps> = ({ prizes, currentStep }) => {
  return (
    <div className={styles.stepsContainer}>
      {prizes.map((prize, index) => {
        const stepIndex = prizes.length - 1 - index;
        const isCompleted = stepIndex < currentStep;
        const isActive = stepIndex === currentStep;

        return (
          <Step key={prize} stepNumber={prize} isCompleted={isCompleted} isActive={isActive} />
        );
      })}
    </div>
  );
};

export default Steps;
