import { bool, InferType, number, object, ref, string } from 'yup';

const hookFormSchema = object({
  name: string().required('Name is required field'),
  age: number()
    .typeError('Age must be a number')
    .min(12, 'you must be at least 12 years old')
    .required('Age is required field'),
  email: string()
    .email('Email is not valid')
    .required('Email is required field'),
  password: string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/[0-9]/, 'Password should contain at least 1 digit')
    .matches(/[a-z]/, 'Password should contain at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Password should contain at least 1 uppercase letter')
    .matches(/[^\w\s]/g, 'Password should contain at least 1 special character')
    .required('Password is required field'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords does not match')
    .required('Confirm password should match'),
  gender: string()
    .oneOf(['male', 'female', 'undecided'], 'Gender must match')
    .required('Gender is required'),
  country: string().required('Country is required field'),
  picture: string().required('Picture is required field'),
  termsAndConditions: bool()
    .oneOf([true], 'Terms and conditions should be accepted')
    .required('T&C is required field'),
});

export type HookFormFields = InferType<typeof hookFormSchema>;

export default hookFormSchema;
