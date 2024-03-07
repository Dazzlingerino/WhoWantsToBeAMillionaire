import type { Feedback } from 'src/app/game/hook';
import type { OptionStatusType } from 'src/components/common/Option';

export const mapIndexToLetter = (index: number): string => {
  return String.fromCharCode(65 + index);
};

export const getStatus = (index: number, feedback: Feedback): OptionStatusType => {
  if (index === feedback.index) {
    return feedback.correct ? 'correct' : 'wrong';
  }
  return 'inactive';
};

export const getOptionButtonColors = (
  status: OptionStatusType
): { color: string; bgColor: string } => {
  const colors = {
    inactive: {
      color: 'var(--black-40)',
      bgColor: 'var(--white-100)',
    },
    correct: {
      color: 'var(--green-100)',
      bgColor: 'var(--green-5)',
    },
    wrong: {
      color: 'var(--red-100)',
      bgColor: 'var(--red-5)',
    },
  };

  return colors[status] || colors.inactive;
};
