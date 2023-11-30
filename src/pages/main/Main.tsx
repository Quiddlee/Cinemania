import ROUTES from '@customTypes/enums';
import LinkButton from '@shared/ui/LinkButton';

const Main = () => (
  <>
    <span>main</span>
    <LinkButton to={`../${ROUTES.UNCONTROLLED_FORM}`}>
      Uncontrolled form
    </LinkButton>
    <LinkButton to={`../${ROUTES.HOOK_FORM}`}>Hook form</LinkButton>
  </>
);

export default Main;
