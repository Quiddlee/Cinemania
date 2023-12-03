import { FC } from 'react';

import cn from '@shared/lib/helpers/cn';
import usePasswordStrength from '@shared/lib/hooks/usePasswordStrength';
import { passwordStrengthLevels } from '@widgets/form/lib/const/const';

type PasswordStrengthMeterProps = {
  passwordValue: string;
  errorMessage?: string;
};

const FIRST_LEVEL_TEXT = passwordStrengthLevels[0];

const PasswordStrengthMeter: FC<PasswordStrengthMeterProps> = ({
  passwordValue,
  errorMessage,
}) => {
  const passwordStrengthLevel = usePasswordStrength(passwordValue);

  const strengthLevelText = passwordStrengthLevel
    ? passwordStrengthLevels[passwordStrengthLevel] ?? FIRST_LEVEL_TEXT
    : FIRST_LEVEL_TEXT;

  const noLevel = passwordStrengthLevel === -1;
  const firstLevel = passwordStrengthLevel === 0;
  const secondLevel = passwordStrengthLevel === 1;
  const thirdLevel = passwordStrengthLevel === 2;
  const fourthLevel = passwordStrengthLevel === 3;

  return (
    passwordStrengthLevel !== null && (
      <div className="w-full space-y-2">
        <span
          className={cn('text-sm transition-all duration-200 ease-bounce', {
            'text-red-400': firstLevel,
            'text-yellow-400': secondLevel,
            'text-green-400': thirdLevel || fourthLevel,

            '-translate-y-1 opacity-0': noLevel,
          })}>
          {`${strengthLevelText} ${errorMessage ?? ''}`}
        </span>

        <span
          className={cn(
            'block h-0.5 w-full origin-left rounded-full transition-all duration-300 ease-bounce',
            {
              'scale-x-[.25] bg-red-400': firstLevel,
              'scale-x-50 bg-yellow-400': secondLevel,
              'scale-x-75 bg-green-400': thirdLevel || fourthLevel,
              'scale-x-100': fourthLevel,

              'scale-x-0 opacity-0': noLevel,
            },
          )}
        />
      </div>
    )
  );
};

export default PasswordStrengthMeter;
