import ROUTES from '@customTypes/enums';
import FormDataBlock from '@pages/main/ui/FormDataBlock';
import LinkButton from '@shared/ui/LinkButton';

const Main = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold">User Data 🐳</h1>|
      <LinkButton to={`../${ROUTES.UNCONTROLLED_FORM}`}>
        Uncontrolled form
      </LinkButton>
      <LinkButton to={`../${ROUTES.HOOK_FORM}`}>Hook form</LinkButton>
    </div>

    <div className="flex gap-8">
      <FormDataBlock formType="uncontrolled" />
      <FormDataBlock formType="hook" />
    </div>
  </div>
);

export default Main;
