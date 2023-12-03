import { FC, useEffect, useState } from 'react';

import cn from '@shared/lib/helpers/cn';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectHookFormData from '@shared/lib/selectors/selectHookFormData';
import selectUncontrolledFormData from '@shared/lib/selectors/selectUncontrolledFormData';
import Form from '@widgets/form/Form';
import { FormTypes } from '@widgets/form/types/types';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';

type FormDataBlockProps = {
  formType: FormTypes;
};

const FormDataBlock: FC<FormDataBlockProps> = ({ formType }) => {
  const isHookForm = formType === 'hook';

  const { formData } = useAppSelector(
    isHookForm ? selectHookFormData : selectUncontrolledFormData,
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const title = `${isHookForm ? 'Hook' : 'Uncontrolled'} form data`;

  useEffect(() => {
    if (formData) {
      setTimeout(() => {
        setIsFirstLoad(false);
      }, 3000);
    }
  }, [formData]);

  if (!formData)
    return (
      <Form>
        <FormHeader title="No data 🍃" />
      </Form>
    );

  return (
    <Form
      className={cn('gap-0', {
        'border-zinc-100': isFirstLoad,
      })}>
      <FormHeader title={title} />

      <FormRow label="Name" className="mt-4">
        <span className="text-sm text-zinc-500">{formData.name}</span>
      </FormRow>
      <FormRow label="Age">
        <span className="text-sm text-zinc-500">{formData.age}</span>
      </FormRow>
      <FormRow label="Email">
        <span className="text-sm text-zinc-500">{formData.email}</span>
      </FormRow>
      <FormRow label="Password">
        <span className="text-sm text-zinc-500">{formData.password}</span>
      </FormRow>
      <FormRow label="Country">
        <span className="text-sm text-zinc-500">{formData.country}</span>
      </FormRow>
      <FormRow label="Gender">
        <span className="text-sm text-zinc-500">{formData.gender}</span>
      </FormRow>
      <FormRow label="Picture">
        <span className="truncate text-sm text-zinc-500">
          {formData.picture}
        </span>
      </FormRow>
      <FormRow label="Terms and conditions">
        <span className="text-sm text-zinc-500">accepted</span>
      </FormRow>
    </Form>
  );
};

export default FormDataBlock;
