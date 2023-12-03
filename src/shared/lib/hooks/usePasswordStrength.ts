import { useEffect, useState } from 'react';

import { passwordStrengthArr } from '@widgets/form/lib/const/const';

function usePasswordStrength(passwordValue: string) {
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState<
    null | number
  >(null);

  useEffect(() => {
    const newPasswordStrengthLevel = passwordStrengthArr.reduce(
      (acc, curr) => (passwordValue?.match(curr)?.length ? acc + 1 : acc),
      -1,
    );

    if (newPasswordStrengthLevel !== passwordStrengthLevel) {
      setPasswordStrengthLevel(newPasswordStrengthLevel);
    }
  }, [passwordStrengthLevel, passwordValue]);

  return passwordStrengthLevel;
}

export default usePasswordStrength;
