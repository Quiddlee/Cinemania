import { FC, LabelHTMLAttributes } from 'react';

import cn from '@shared/lib/helpers/cn';

type FormRowProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
};

const FormRow: FC<FormRowProps> = ({ label, className, children }) => (
  <label className={cn('grid gap-2', className)} htmlFor={label}>
    {label}
    {children}
  </label>
);

export default FormRow;
