import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username can not be longer than 20 characters'),

  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username can not be longer than 20 characters'),

  email: yup.string().email('Invalid email').required('Email is required'),

  phone_number: yup
    .string()
    .matches(
      /^(08|628)\d+$/,
      'Nomor telepon harus diawali dengan 08 atau 628 dan hanya berisi angka',
    )
    .min(10, 'Nomor telepon harus minimal 10 digit')
    .max(14, 'Nomor telepon tidak boleh lebih dari 14 digit')
    .required('Phone number is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),

  position: yup
    .string()
    .required('Position is required')
    .min(2, 'Position must be at least 2 characters')
    .max(50, 'Position can not be longer than 50 characters'),
});
