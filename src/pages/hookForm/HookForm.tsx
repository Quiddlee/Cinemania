import { formSubmitted } from '@pages/hookForm/model/slice';
import fileToBase64 from '@shared/lib/helpers/fileToBase64';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useYupValidationResolver from '@shared/lib/hooks/useYupValidationResolver';
import Button from '@shared/ui/Button';
import Checkbox from '@shared/ui/Checkbox';
import Input from '@shared/ui/Input';
import LinkButton from '@shared/ui/LinkButton';
import Form from '@widgets/form/Form';
import formSchema, { FormFields } from '@widgets/form/model/formSchema';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const HookForm = () => {
  const resolver = useYupValidationResolver(formSchema);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormFields>({
    resolver,
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onSubmit(data: FormFields) {
    const picture = data.picture as FileList;
    const file = picture.item(0) as File;

    const base64File = await fileToBase64(file);
    const modifiedData = {
      ...data,
      picture: base64File,
    } as const;

    dispatch(formSubmitted(modifiedData));
    navigate('/');
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

        <FormRow label="Password" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            placeholder="Enter yout password..."
            {...register('password')}
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

          <datalist id="country-list">
            <option value="United States of America">US</option>
            <option value="Ukraine">UA</option>
            <option value="Poland">PL</option>
            <option value="Germany">DE</option>
          </datalist>
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
