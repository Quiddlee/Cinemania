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
    <Form>
      <>
        <FormHeader title="Hook form data" />

        <FormRow label="Name">
          <span className="text-sm">{formData.name}</span>
        </FormRow>
        <FormRow label="Age">
          <span className="text-sm">{formData.age}</span>
        </FormRow>
        <FormRow label="Email">
          <span className="text-sm">{formData.email}</span>
        </FormRow>
        <FormRow label="Password">
          <span className="text-sm">{formData.password}</span>
        </FormRow>
        <FormRow label="Country">
          <span className="text-sm">{formData.country}</span>
        </FormRow>
        <FormRow label="Gender">
          <span className="text-sm">{formData.gender}</span>
        </FormRow>
        <FormRow label="Terms and conditions">
          <span className="text-sm">{formData.termsAndConditions}</span>
        </FormRow>
      </>
    </Form>
  );
};

export default HookFormData;
