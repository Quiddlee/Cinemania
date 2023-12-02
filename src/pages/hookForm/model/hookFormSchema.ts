import {
  ALLOWED_FILE_SIZE,
  ALLOWED_FILE_TYPES,
} from '@pages/hookForm/const/const';
import { bool, InferType, mixed, number, object, ref, string } from 'yup';

const hookFormSchema = object({
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
    .test('required', 'The file is required', (value) => {
      const fileList = value as FileList;
      return Boolean(fileList.length);
    })
    .test('fileSize', 'The file size must be less or equal 500kb', (value) => {
      const fileList = value as FileList;
      const file = fileList.item(0);

      if (!file) return true;
      return file.size <= ALLOWED_FILE_SIZE;
    })
    .test(
      'fileExtension',
      'The file extension must be jpeg or png',
      (value) => {
        const fileList = value as FileList;
        const file = fileList.item(0);

        if (!file) return true;
        return ALLOWED_FILE_TYPES.some((type) => file.type === type);
      },
    ),
  termsAndConditions: bool()
    .oneOf([true], 'Terms and conditions must be accepted')
    .required('T&C is required field'),
});

export type HookFormFields = InferType<typeof hookFormSchema>;

export default hookFormSchema;
