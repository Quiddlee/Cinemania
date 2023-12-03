import { useCallback } from 'react';

import { EmptyObject } from '@customTypes/types';
import { object, ValidationError } from 'yup';

export type ValidationErrors<TFormData> = Partial<{
  [key in keyof TFormData]: { type: string; message: string };
}>;

type ValidationResolverReturn<TFormData> = Promise<{
  values: TFormData | EmptyObject;
  errors: ValidationErrors<TFormData>;
}>;

const useYupValidationResolver = (
  validationSchema: ReturnType<typeof object>,
) =>
  useCallback(
    async <TData>(data: TData): ValidationResolverReturn<TData> => {
      try {
        const values = (await validationSchema.validate(data, {
          abortEarly: false,
        })) as TData;

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        if (errors instanceof ValidationError)
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path!]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {},
            ),
          };

        throw new Error('Error trying to validate form schema');
      }
    },
    [validationSchema],
  );

export default useYupValidationResolver;
