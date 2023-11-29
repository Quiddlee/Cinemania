import ROUTES from '@customTypes/enums';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="flex gap-4">
    <span className="text">main</span>
    <Link
      className="text-blue-700 underline"
      to={`../${ROUTES.UNCONTROLLED_FORM}`}>
      Uncontrolled form
    </Link>
    <Link className="text-blue-700 underline" to={`../${ROUTES.HOOK_FORM}`}>
      Hook form
    </Link>
  </div>
);

export default Main;
