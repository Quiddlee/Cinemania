import fileToBase64 from '@shared/lib/helpers/fileToBase64';
import isFileList from '@shared/lib/helpers/isFileList';
import { FormFields } from '@widgets/form/model/formSchema';
import { FormData } from '@widgets/form/types/types';

/**
 * Prepares form data by converting the picture file to base64 and modifying the values object.
 *
 * @param {FormFields} values - The form field values.
 * @returns {Promise<FormData>} - The modified form data.
 */
async function prepareFormData(values: FormFields): Promise<FormData> {
  const { picture } = values;
  let file: File = picture as File;

  if (isFileList(picture)) {
    file = picture.item(0) as File;
  }

  const base64File = await fileToBase64(file);
  const modifiedData = {
    ...values,
    picture: base64File,
  };

  return modifiedData;
}

export default prepareFormData;
