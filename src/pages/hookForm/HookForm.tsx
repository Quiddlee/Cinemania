import useYupValidationResolver from '@shared/lib/hooks/useYupValidationResolver';
import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import LinkButton from '@shared/ui/LinkButton';
import PasswordStrengthMeter from '@shared/ui/PasswordStrengthMeter';
import Form from '@widgets/form/Form';
import useSubmit from '@widgets/form/lib/hooks/useSubmit';
import formSchema, { FormFields } from '@widgets/form/model/formSchema';
import CountryDataList from '@widgets/form/ui/CountryDataList';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';
import { useForm } from 'react-hook-form';

const HookForm = () => {
  const resolver = useYupValidationResolver(formSchema);
  const submitForm = useSubmit('hook');
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm<FormFields>({
    resolver,
    mode: 'onChange',
  });

  const passwordValue = getValues('password');

  async function onSubmit(data: FormFields) {
    void submitForm(data);
  }

  return (
    <>
      <LinkButton to="/">Back</LinkButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader title="Register" subtitle="Welcome to our platform! 😎" />

        <FormRow label="Name" error={errors.name?.message}>
          <Input
            id="name"
            type="text"
            placeholder="Enter yout name..."
            {...register('name')}
          />
        </FormRow>

        <FormRow label="Age" error={errors.age?.message}>
          <Input
            id="age"
            type="number"
            placeholder="Enter yout age..."
            {...register('age')}
          />
        </FormRow>

        <FormRow label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="text"
            placeholder="Enter yout email..."
            {...register('email')}
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            id="password"
            type="password"
            placeholder="Enter yout password..."
            {...register('password')}
          />

          <PasswordStrengthMeter
            passwordValue={passwordValue}
            errorMessage={errors.password?.message}
          />
        </FormRow>

        <FormRow
          htmlFor="confirmPassword"
          label="Confirm password"
          error={errors.confirmPassword?.message}>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Enter your confirm password..."
            {...register('confirmPassword')}
          />
        </FormRow>

        <FormRow label="Gender">
          <select id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </FormRow>

        <FormRow label="Country" error={errors.country?.message}>
          <Input
            id="country"
            list="country-list"
            placeholder="Enter your contry..."
            {...register('country')}
          />
          <CountryDataList id="country-list" />
        </FormRow>

        <FormRow label="Picture" error={errors.picture?.message}>
          <Input id="picture" type="file" {...register('picture')} />
        </FormRow>

        <FormRow
          error={errors.termsAndConditions?.message}
          htmlFor="termsAndConditions"
          label="I accept the terms and conditions"
          className="flex flex-row-reverse items-center justify-end">
          <Checkbox
            id="termsAndConditions"
            type="checkbox"
            {...register('termsAndConditions')}
          />
        </FormRow>

        <Button disabled={!isValid} className="mt-4" submit>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default HookForm;
