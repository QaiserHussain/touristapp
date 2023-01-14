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

export const updateValidation = Yup.object().shape({
    username: Yup.string().required('First Name is required.'),
    email: Yup.string().required('Email is required.'),
    oldPassword: Yup.string().required('Old Password is required.'),
    newPassword: Yup.string().required('New Password is required.'),
});

export const houseValidation = Yup.object().shape({
    title: Yup.string().required('Title is required.'),
    description: Yup.string().required('Description is required.'),
    address: Yup.string().required('Address is required.'),
    country: Yup.string().required('Country is required.'),
    city: Yup.string().required('City is required.'),
    price: Yup.string().required('Price is required.'),
    capacity: Yup.string().required('Capacity is required.'),
    facilities: Yup.string().required('Facilites is required.'),
    amenities: Yup.string().required('Amenities is required.'),
    imgs: Yup.string().required('Images is required.'),
});