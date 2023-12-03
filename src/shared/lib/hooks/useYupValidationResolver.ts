import { useCallback } from 'react';

import { EmptyObject } from '@customTypes/types';
import { object, ValidationError } from 'yup';

export type ValidationErrors<TFormData> = Partial<{
  [key in keyof TFormData]: { type: string; message: string };
}>;

type UseYupValidationResolverReturn<TFormData> = Promise<{
  values:
    | Awaited<ReturnType<ReturnType<typeof object>['validate']>>
    | EmptyObject;
  errors: ValidationErrors<TFormData>;
}>;

const useYupValidationResolver = (
  validationSchema: ReturnType<typeof object>,
) =>
  useCallback(
    async <TData>(data: TData): UseYupValidationResolverReturn<TData> => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

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
