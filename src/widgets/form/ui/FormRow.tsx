import { FC, LabelHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';
import Error from '@widgets/form/ui/Error';

type FormRowProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  error?: string;
};

const FormRow: FC<FormRowProps> = ({
  label,
  htmlFor,
  className,
  error,
  children,
}) => (
  <label
    className={cn('grid gap-2 text-sm', className, {
      'text-red-900': error,
    })}
    htmlFor={htmlFor ?? label.toLowerCase()}>
    {label}
    {children}
    <Error>{error}</Error>
  </label>
);

export default FormRow;
