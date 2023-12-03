/* eslint-disable react/no-array-index-key */

import ROUTES from '@customTypes/enums';
import FormDataBlock from '@pages/main/ui/FormDataBlock';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectFormDataLen from '@shared/lib/selectors/selectFormDataLen';
import selectHookFormData from '@shared/lib/selectors/selectHookFormData';
import selectUncontrolledFormData from '@shared/lib/selectors/selectUncontrolledFormData';
import LinkButton from '@shared/ui/LinkButton';

const Main = () => {
  const { formData: hookFormData } = useAppSelector(selectHookFormData);
  const { formData: uncontrolledFormData } = useAppSelector(
    selectUncontrolledFormData,
  );
  const prevLen = useAppSelector(selectFormDataLen);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">User Data 🐳</h1>|
        <LinkButton to={`../${ROUTES.UNCONTROLLED_FORM}`}>
          Uncontrolled form
        </LinkButton>
        <LinkButton to={`../${ROUTES.HOOK_FORM}`}>Hook form</LinkButton>
      </div>

      <div className="flex gap-8">
        {[...hookFormData, ...uncontrolledFormData].map((formData, i) => (
          <FormDataBlock formData={formData} key={i} isNew={prevLen < i} />
        ))}
      </div>
    </div>
  );
};

export default Main;
