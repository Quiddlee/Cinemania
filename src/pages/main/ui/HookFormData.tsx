import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectHookFormData from '@shared/lib/selectors/selectHookFormData';
import Form from '@widgets/form/Form';
import FormHeader from '@widgets/form/ui/FormHeader';
import FormRow from '@widgets/form/ui/FormRow';

const HookFormData = () => {
  const { formData } = useAppSelector(selectHookFormData);

  if (!formData)
    return (
      <Form>
        <FormHeader title="No data 🍃" />
      </Form>
    );

  return (
    <Form className="gap-0">
      <FormHeader title="Hook form data" />

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

export default HookFormData;
