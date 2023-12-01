import { FC, InputHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => <input {...props} type="checkbox" className={cn(className)} />;

export default Checkbox;
