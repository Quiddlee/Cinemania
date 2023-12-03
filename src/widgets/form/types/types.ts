import { FormFields } from '@widgets/form/model/formSchema';

export type FormData = Omit<FormFields, 'picture'> & {
  picture: string;
};
