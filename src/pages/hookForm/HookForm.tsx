import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import Form from '@widgets/form/Form';
import FormRow from '@widgets/form/ui/FormRow';
import { useForm } from 'react-hook-form';

type FormFields = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female' | 'undecided';
  country: string;
  picture: FileList;
  termsAndConditions: boolean;
};

const HookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>();

  function onSubmit(/* data: FormFields */) {
    //
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <article className="space-y mb-4">
        <h1 className="text-2xl">Register</h1>
        <p className="text-zinc-500">Welcome to our platform! 😎</p>
      </article>

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
          type="text"
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
          type="text"
          placeholder="Enter your email..."
          {...register('confirmPassword', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Gender" error={errors.gender?.message}>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="undecided">Undecided</option>
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

      <Button className="mt-4" submit>
        Submit
      </Button>
    </Form>
  );
};

export default HookForm;
