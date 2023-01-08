import * as Yup from 'yup';

export const signinValidation = Yup.object().shape({
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.'),
});
export const signupValidation = Yup.object().shape({
    firstName: Yup.string().required('First Name is required.'),
    lastName: Yup.string().required('Last Name is required.'),
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.'),
});