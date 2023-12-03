import { FC, useEffect, useState } from 'react';

import { formLengthUpdated } from '@pages/main/model/slice';
import cn from '@shared/lib/helpers/cn';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectFormDataLen from '@shared/lib/selectors/selectFormDataLen';
import Form from '@widgets/form/Form';
import { FormData } from '@widgets/form/types/types';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';

const TIMEOUT_MS = 2000;

type FormDataBlockProps = {
  formData: FormData;
  isNew: boolean;
};

const FormDataBlock: FC<FormDataBlockProps> = ({ formData, isNew }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(isNew);

  const prevLen = useAppSelector(selectFormDataLen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isNew) return undefined as void;

    const timeoutId = setTimeout(() => {
      setIsFirstLoad(false);
      dispatch(formLengthUpdated(prevLen + 1));
    }, TIMEOUT_MS);

    return () => clearTimeout(timeoutId);
  }, [dispatch, formData, isNew, prevLen]);

  return (
    <Form
      className={cn('gap-0', {
        'ring ring-zinc-400 ring-offset-2 ring-offset-zinc-950': isFirstLoad,
      })}>
      <FormHeader title="Form data" />

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
