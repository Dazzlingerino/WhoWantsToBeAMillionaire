import { useState } from 'react';
import { useRouter } from 'next/navigation';

import questionsConfig from 'src/app/game-config.json';
import { useGameContext } from 'src/context';

export interface Feedback {
  correct: boolean;
  index: number;
}

export interface QuestionObject {
  question: string;
  options: string[];
  correct: number[];
  prize: number;
}

export interface UseGameReturn {
  isMenuOpen: boolean;
  isOptionClickable: boolean;
  currentStep: number;
  prizes: number[];
  currentQuestionObject: QuestionObject;
  feedback: Feedback;
  toggleMenu: () => void;
  onOptionSelect: (index: number) => void;
}

const useGame = (): UseGameReturn => {
  const router = useRouter();
  const { setPrize } = useGameContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOptionClickable, setOptionClickable] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState({ correct: false, index: -1 });

  const prizes = questionsConfig.map(q => q.prize).reverse();
  const currentQuestionObject = questionsConfig[currentStep];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const onOptionSelect = (answerIndex: number) => {
    setOptionClickable(false);

    const isCorrect = currentQuestionObject.correct.includes(answerIndex);
    setFeedback({ correct: isCorrect, index: answerIndex });

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
      blinkCount += 1;
      if (blinkCount >= 3) {
        clearInterval(blinkInterval); // Stop blinking

        setTimeout(() => {
          if (isCorrect) {
            const nextStep = currentStep + 1;
            if (nextStep < questionsConfig.length) {
              setCurrentStep(nextStep);
              setPrize(prizes[questionsConfig.length - nextStep]);
            } else {
              setPrize(prizes[0]);
              router.push('/game-over');
            }
          } else {
            setPrize(prizes[questionsConfig.length - currentStep]);
            router.push('/game-over');
          }
          setFeedback({ correct: false, index: -1 });
          setOptionClickable(true);
        }, 1000);
      }
    }, 200);
  };

  return {
    isMenuOpen,
    isOptionClickable,
    currentStep,
    prizes,
    currentQuestionObject,
    feedback,
    toggleMenu,
    onOptionSelect,
  };
};

export default useGame;
