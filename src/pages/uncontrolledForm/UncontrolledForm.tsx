import { FormEvent, useCallback, useRef, useState } from 'react';

import { formSubmitted } from '@pages/uncontrolledForm/model/slice';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useYupValidationResolver, {
  ValidationErrors,
} from '@shared/lib/hooks/useYupValidationResolver';
import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import LinkButton from '@shared/ui/LinkButton';
import Form from '@widgets/form/Form';
import prepareFormData from '@widgets/form/lib/helpers/prepareFormData';
import formSchema, { FormFields } from '@widgets/form/model/formSchema';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';
import { useNavigate } from 'react-router-dom';

const UncontrolledForm = () => {
  const formRef = useRef(null);
  const resolver = useYupValidationResolver(formSchema);
  const [errors, setErrors] = useState<ValidationErrors<FormFields> | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (evt: FormEvent) => {
      evt.preventDefault();

      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      const formDataObj = Object.fromEntries(
        formData.entries(),
      ) as Partial<FormFields>;
      const formValues = {
        ...formDataObj,
        termsAndConditions: Boolean(formDataObj?.termsAndConditions),
      } as FormFields;

      const { errors: validationErrors, values } =
        await resolver<FormFields>(formValues);

      const isErrorsFound = Object.keys(validationErrors).length;

      if (isErrorsFound) {
        setErrors(validationErrors);
      } else {
        setErrors(null);

        const modifiedData = await prepareFormData(values as FormFields);
        dispatch(formSubmitted(modifiedData));
        navigate('/');
      }
    },
    [dispatch, navigate, resolver],
  );

  return (
    <>
      <LinkButton to="/">Back</LinkButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormHeader title="Register" subtitle="Welcome to our platform! 😎" />

        <FormRow label="Name" error={errors?.name?.message}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter yout name..."
          />
        </FormRow>

        <FormRow label="Age" error={errors?.age?.message}>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Enter yout age..."
          />
        </FormRow>

        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Enter yout email..."
          />
        </FormRow>

        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter yout password..."
          />
        </FormRow>

        <FormRow
          htmlFor="confirmPassword"
          label="Confirm password"
          error={errors?.confirmPassword?.message}>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your confirm password..."
          />
        </FormRow>

        <FormRow label="Gender" error={errors?.gender?.message}>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </FormRow>

        <FormRow label="Country" error={errors?.country?.message}>
          <Input
            id="country"
            name="country"
            list="country-list"
            placeholder="Enter your contry..."
          />

          <datalist id="country-list">
            <option value="United States of America">US</option>
            <option value="Ukraine">UA</option>
            <option value="Poland">PL</option>
            <option value="Germany">DE</option>
          </datalist>
        </FormRow>

        <FormRow label="Picture" error={errors?.picture?.message}>
          <Input id="picture" name="picture" type="file" />
        </FormRow>

        <FormRow
          htmlFor="termsAndConditions"
          label="I accept the terms and conditions"
          className="flex flex-row-reverse items-center justify-end"
          error={errors?.termsAndConditions?.message}>
          <Checkbox
            id="termsAndConditions"
            name="termsAndConditions"
            type="checkbox"
          />
        </FormRow>

        <Button className="mt-4" submit>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UncontrolledForm;
