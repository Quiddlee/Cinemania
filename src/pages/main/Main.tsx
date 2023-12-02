import ROUTES from '@customTypes/enums';
import HookFormData from '@pages/main/ui/HookFormData';
import LinkButton from '@shared/ui/LinkButton';

const Main = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">User Data 🐳</h1>|
      <LinkButton to={`../${ROUTES.UNCONTROLLED_FORM}`}>
        Uncontrolled form
      </LinkButton>
      <LinkButton to={`../${ROUTES.HOOK_FORM}`}>Hook form</LinkButton>
    </div>

    <HookFormData />
  </div>
);

export default Main;
