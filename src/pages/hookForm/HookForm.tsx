import hookFormSchema, {
  HookFormFields,
} from '@pages/hookForm/model/hookFormSchema';
import useYupValidationResolver from '@shared/lib/hooks/useYupValidationResolver';
import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import Form from '@widgets/form/Form';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';
import { useForm } from 'react-hook-form';

const HookForm = () => {
  const resolver = useYupValidationResolver<HookFormFields>(hookFormSchema);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<HookFormFields>({
    resolver,
  });

  function onSubmit(/* data: HookFormFields */) {
    // console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="Register" subTitle="Welcome to our platform! 😎" />

      <FormRow label="Name" error={errors.name?.message}>
        <Input
          id="name"
          type="text"
          placeholder="Enter yout name..."
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Age" error={errors.age?.message}>
        <Input
          id="age"
          type="number"
          min="0"
          placeholder="Enter yout age..."
          {...register('age', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Email" error={errors.email?.message}>
        <Input
          id="email"
          type="text"
          placeholder="Enter yout email..."
          {...register('email', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password?.message}>
        <Input
          id="password"
          type="password"
          placeholder="Enter yout password..."
          {...register('password', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        htmlFor="confirmPassword"
        label="Confirm password"
        error={errors.confirmPassword?.message}>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Enter your email..."
          {...register('confirmPassword', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Gender">
        <select id="gender" {...register('gender')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
      </FormRow>

      <FormRow label="Country" error={errors.country?.message}>
        <Input
          id="country"
          list="country-list"
          placeholder="Enter your contry..."
          {...register('country', {
            required: 'This field is required',
          })}
        />

        <datalist id="country-list">
          <option value="US">United States of America</option>
          <option value="UA">Ukraine</option>
          <option value="PL">Poland</option>
          <option value="DE">Germany</option>
        </datalist>
      </FormRow>

      <FormRow label="Picture" error={errors.picture?.message}>
        <Input
          id="picture"
          type="file"
          {...register('picture', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow
        error={errors.termsAndConditions?.message}
        htmlFor="termsAndConditions"
        label="I accept the terms and conditions"
        className="flex flex-row-reverse items-center justify-end">
        <Checkbox
          id="termsAndConditions"
          type="checkbox"
          {...register('termsAndConditions', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <Button disabled={!isValid} className="mt-4" submit>
        Submit
      </Button>
    </Form>
  );
};

export default HookForm;
