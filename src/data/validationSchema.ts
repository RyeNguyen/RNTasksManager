import { ValidationSchemaObject } from '../types/validation.types';

export const validationSchema: ValidationSchemaObject[] = [
  {
    type: 'required',
    message: 'This field is required.',
  },
  {
    type: 'pattern',
    message: "Please check your email's format.",
  },
  {
    type: 'minLength',
    message: 'Password must be at least 6 characters long.',
  },
  {
    type: 'validate',
    message: 'Password mismatch.',
  },
];
