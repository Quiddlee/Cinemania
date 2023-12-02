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
            <FormRow label="name">
              <span>{hookFormData.name}</span>
            </FormRow>
            <FormRow label="age">
              <span>{hookFormData.age}</span>
            </FormRow>
            <FormRow label="email">
              <span>{hookFormData.email}</span>
            </FormRow>
            <FormRow label="password">
              <span>{hookFormData.password}</span>
            </FormRow>
            <FormRow label="country">
              <span>{hookFormData.country}</span>
            </FormRow>
            <FormRow label="gender">
              <span>{hookFormData.gender}</span>
            </FormRow>
            <FormRow label="terms and conditions">
              <span>{hookFormData.termsAndConditions}</span>
            </FormRow>
          </>
        )}
      </Form>
    </div>
  );
};

export default Main;
