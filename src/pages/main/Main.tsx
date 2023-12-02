import ROUTES from '@customTypes/enums';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectHookFormData from '@shared/lib/selectors/selectHookFormData';
import LinkButton from '@shared/ui/LinkButton';
import Form from '@widgets/form/Form';
import FormRow from '@widgets/form/ui/FormRow';

const Main = () => {
  const { formData: hookFormData } = useAppSelector(selectHookFormData);

  return (
    <div>
      <span>main</span>

      <LinkButton to={`../${ROUTES.UNCONTROLLED_FORM}`}>
        Uncontrolled form
      </LinkButton>
      <LinkButton to={`../${ROUTES.HOOK_FORM}`}>Hook form</LinkButton>

      <Form>
        {hookFormData && (
          <>
            <FormRow label="Name">
              <span className="text-sm">{hookFormData.name}</span>
            </FormRow>
            <FormRow label="Age">
              <span className="text-sm">{hookFormData.age}</span>
            </FormRow>
            <FormRow label="Email">
              <span className="text-sm">{hookFormData.email}</span>
            </FormRow>
            <FormRow label="Password">
              <span className="text-sm">{hookFormData.password}</span>
            </FormRow>
            <FormRow label="Country">
              <span className="text-sm">{hookFormData.country}</span>
            </FormRow>
            <FormRow label="Gender">
              <span className="text-sm">{hookFormData.gender}</span>
            </FormRow>
            <FormRow label="Terms and conditions">
              <span className="text-sm">{hookFormData.termsAndConditions}</span>
            </FormRow>
          </>
        )}
      </Form>
    </div>
  );
};

export default Main;
