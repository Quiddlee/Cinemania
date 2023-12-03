import AppLayout from '@app/ui/AppLayout';
import ROUTES from '@customTypes/enums';
import HookForm from '@pages/hookForm/HookForm';
import Main from '@pages/main/Main';
import UncontrolledForm from '@pages/uncontrolledForm/UncontrolledForm';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.UNCONTROLLED_FORM,
        element: <UncontrolledForm />,
      },
      {
        path: ROUTES.HOOK_FORM,
        element: <HookForm />,
      },
    ],
  },
]);

export default router;
