import { formSubmitted } from '@pages/hookForm/model/slice';
import prepareFormData from '@widgets/form/lib/helpers/prepareFormData';
import { FormFields } from '@widgets/form/model/formSchema';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * Encapsulates the submit logic. Submits form data and performs necessary actions.
 *
 * @param {TFormData} data - The form data to be submitted.
 * @return {Promise<void>} Returns a promise that resolves after the form data is submitted.
 */
function useSubmit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async <TFormData extends FormFields>(data: TFormData) => {
    const modifiedData = await prepareFormData(data);
    dispatch(formSubmitted(modifiedData));
    navigate('/');
  };
}

export default useSubmit;
