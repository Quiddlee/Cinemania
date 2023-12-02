import {
  ALLOWED_FILE_SIZE,
  ALLOWED_FILE_TYPES,
} from '@pages/hookForm/const/const';
import isFile from '@shared/lib/helpers/isFile';
import isFileList from '@shared/lib/helpers/isFileList';
import { bool, InferType, mixed, number, object, ref, string } from 'yup';

const formSchema = object({
  name: string().required('Name is required field'),
  age: number()
    .typeError('Age must be a number')
    .min(12, 'You must be at least 12 years old')
    .required('Age is required field'),
  email: string()
    .email('Email is not valid')
    .required('Email is required field'),
  password: string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/[0-9]/, 'Must contain at least 1 digit')
    .matches(/[a-z]/, 'Must contain at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    .matches(/[^\w\s]/g, 'Must contain at least 1 special character')
    .required('Password is required field'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords does not match')
    .required('Confirm password must match'),
  gender: string(),
  country: string().required('Country is required field'),
  picture: mixed()
    .test(
      'required',
      'The file is required',
      (value) => isFileList(value) || isFile(value),
    )
    .test('fileSize', 'The file size must be less or equal 500kb', (value) => {
      let file: File | null = null;

      if (isFileList(value)) {
        const fileList = value as FileList;
        file = fileList.item(0);
      }

      if (isFile(value)) {
        file = value;
      }

      if (!file) return true;
      return file.size <= ALLOWED_FILE_SIZE;
    })
    .test(
      'fileExtension',
      'The file extension must be jpeg or png',
      (value) => {
        let file: File | null = null;

        if (isFileList(value)) {
          const fileList = value as FileList;
          file = fileList.item(0);
        }

        if (isFile(value)) {
          file = value;
        }

        if (!file) return true;

        const fileType = file.type;
        return ALLOWED_FILE_TYPES.some(
          (allowedType) => fileType === allowedType,
        );
      },
    ),
  termsAndConditions: bool()
    .oneOf([true], 'Terms and conditions must be accepted')
    .required('T&C is required field'),
});

export type HookFormFields = InferType<typeof formSchema>;

export default formSchema;
