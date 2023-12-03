import { formSubmitted as hookFormSubmitted } from '@pages/hookForm/model/slice';
import { formSubmitted as uncontrolledSubmitted } from '@pages/uncontrolledForm/model/slice';
import prepareFormData from '@widgets/form/lib/helpers/prepareFormData';
import { FormFields } from '@widgets/form/model/formSchema';
import { FormTypes } from '@widgets/form/types/types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * Encapsulates the submit form logic.
 *
 * @param {string} formType - The type of the form ('hook' or 'uncontrolled').
 * @param {Object} data - The form data to submit.
 * @returns {Promise} A promise that resolves when the form is submitted.
 */
function useSubmit(formType: FormTypes) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async <TFormData extends FormFields>(data: TFormData) => {
    const modifiedData = await prepareFormData(data);
    dispatch(
      formType === 'hook'
        ? hookFormSubmitted(modifiedData)
        : uncontrolledSubmitted(modifiedData),
    );
    navigate('/');
  };
}

export default useSubmit;
