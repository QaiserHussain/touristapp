import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from 'formik'
import { useState } from "react";
import { signupValidation } from '../../utils/validation';
import { createUser } from '../../helper/users'
import { useMutation, useQueryClient } from 'react-query'
import { useSnackbar } from 'notistack';
import nextBase64 from "next-base64";

export default function SignupForm({ file }) {
    const [image, setImage] = useState('')
    const { mutateAsync } = useMutation(createUser)
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex: { md: 0.3, sm: 0.5, xs: 1 } }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> SIGN UP </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>please sign-up to your account</Typography>
                <Formik
                    initialValues={{
                        image: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={signupValidation}
                    onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
                        console.log(values);
                        setSubmitting(true)
                        // if(await image){}
                        try {
                            await mutateAsync({
                                image: image,
                                username: values.firstName + " " + values.lastName,
                                email: values.email,
                                password: values.password,
                            },
                                {
                                    onError: () => {
                                        enqueueSnackbar('Error occured', {
                                            autoHideDuration: 3000,
                                            variant: 'error',
                                        });
                                    },
                                    onSuccess: () => {
                                        queryClient.invalidateQueries("houses");
                                        enqueueSnackbar('created', {
                                            autoHideDuration: 3000,
                                            variant: 'success',
                                        })
                                    },
                                    onSettled: () => {
                                        resetForm({ values: '' })
                                        setImage('')
                                        setSubmitting(false);
                                    },
                                }
                            );
                        } catch (e) { }
                    }}

                >
                    {({ handleSubmit, isSubmitting, handleChange, values, setFieldValue }) => (
                        <Box component='form' onSubmit={handleSubmit}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <label htmlFor="upload-photo">
                                    <Avatar src={image} sx={{ width: '80px', height: '80px' }} />
                                    <input type='file' id='upload-photo' name="image" onChange={async (e) => {
                                        const file = e.target.files[0]
                                        const converted = await imageConverter(file);
                                        setImage(converted)
                                        setFieldValue('image', file)
                                        console.log(values.image);

                                        function imageConverter(file) {
                                            return new Promise((resolve, reject) => {
                                                const reader = new FileReader();
                                                reader.readAsDataURL(file);
                                                reader.onload = () => { resolve(reader.result) }
                                                reader.onerror = (error) => { reject(error) }
                                            })
                                        }
                                    }} style={{ display: 'none' }} />
                                </label>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: '15px' }}>
                                <TextField type='text' placeholder="First Name" label='First Name' name="firstName" value={values.firstName} fullWidth onChange={handleChange} />
                                <TextField type='text' placeholder="Last Name" label='Last Name' name="lastName" value={values.lastName} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField type='email' placeholder="Email" label='Email' name="email" value={values.email} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField type='password' placeholder="Password" label='Password' name="password" value={values.password} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ padding: '0 40px' }}>
                                <Button type='submit' variant='contained' fullWidth disabled={isSubmitting}> SIGN UP </Button>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box>

    )
}