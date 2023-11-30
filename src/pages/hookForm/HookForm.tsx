import Button from '@shared/ui/Button';
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
      <article className="space-y">
        <h1 className="text-2xl">Register</h1>
        <p className="text-zinc-500">Welcome to our platform! 😎</p>
      </article>

      <FormRow label="name" error={errors.name?.message}>
        <Input
          id="name"
          type="text"
          placeholder="Enter yout name..."
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="age" error={errors.age?.message}>
        <Input
          id="age"
          type="number"
          min="0"
          placeholder="Enter yout age..."
          {...register('age', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="email" error={errors.email?.message}>
        <Input
          id="email"
          type="text"
          placeholder="Enter yout email..."
          {...register('email', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="password" error={errors.password?.message}>
        <Input
          id="password"
          type="text"
          placeholder="Enter yout password..."
          {...register('password', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="confirmPassword" error={errors.confirmPassword?.message}>
        <Input
          id="confirmPassword"
          type="text"
          placeholder="Enter your email..."
          {...register('confirmPassword', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <Button submit>Submit</Button>
    </Form>
  );
};

export default HookForm;
