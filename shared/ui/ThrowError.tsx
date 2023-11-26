import { useState } from 'react';

import Button from '@shared/ui/Button';

function ThrowError() {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error('Test Error');
  }

  return (
    <Button onClick={() => setIsError(true)} styleType="empty">
      Throw error
    </Button>
  );
}

export default ThrowError;
