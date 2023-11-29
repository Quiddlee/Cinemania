import ROUTES from '@customTypes/enums';
import { Link } from 'react-router-dom';

const Main = () => (
  <>
    <span className="block">main</span>
    <Link
      className="text-blue-500 hover:text-blue-600 hover:underline"
      to={`../${ROUTES.UNCONTROLLED_FORM}`}>
      Uncontrolled form
    </Link>
    <Link
      className="text-blue-500 hover:text-blue-600 hover:underline"
      to={`../${ROUTES.HOOK_FORM}`}>
      Hook form
    </Link>
  </>
);

export default Main;
