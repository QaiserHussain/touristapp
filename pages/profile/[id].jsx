import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from 'formik'
import { useState } from "react";
import { updateValidation } from '../../utils/validation';
import { updateUser } from '../../helper/users'
import { useMutation, useQueryClient } from 'react-query'
import { useSnackbar } from 'notistack';
import {useDispatch,useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import { savedUser } from "../../store/loginSlice";

export default function Profile({ user }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const update = useSelector((state)=>state.login.value)
    // console.log(update);
    const [image, setImage] = useState('')
    const { mutateAsync } = useMutation(updateUser)
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    // console.log(user);
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex: { md: 0.4, sm: 0.6, xs: 1 } }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> Profile </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>you can update your profile</Typography>
                <Formik
                    initialValues={{
                        image: user.image,
                        username:user.username,
                        email: user.email,
                        oldPassword:'',
                        newPassword: ''
                    }}
                    validationSchema={updateValidation}
                    onSubmit={async (values, { setSubmitting, setFieldError, resetForm, setFieldValue }) => {
                        console.log(values);
                        setSubmitting(true)
                        try {
                           const updated = await mutateAsync({
                                id:user._id,
                                image: image ? image : user.image,
                                username: values.username,
                                email: values.email,
                                oldPassword: values.oldPassword,
                                newPassword: values.newPassword,
                                });
                                console.log(updated.data);
                                if(!updated.status){
                                    enqueueSnackbar(updated.message,{variant:'error',autoHideDuration:3000})
                                }else{
                                    dispatch(savedUser(updated.data))
                                    enqueueSnackbar(updated.message,{variant:'success',autoHideDuration:3000})
                                    router.push('/profile')
                                }
                        } catch (e) { }
                    }}

                >
                    {({ handleSubmit, isSubmitting, handleChange, values, setFieldValue }) => (
                        <Box component='form' onSubmit={handleSubmit}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <label htmlFor="upload-photo">
                                    <Avatar src={image ? image : user.image} sx={{ width: '80px', height: '80px' }} />
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
                                <TextField type='text' placeholder="User Name" label='User Name' name="username" value={values.username} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField type='email' placeholder="Email" label='Email' name="email" value={values.email} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField type='password' placeholder="Old Password" label='Old Password' name="oldPassword" value={values.oldPassword} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField type='password' placeholder="New Password" label='New Password' name="newPassword" value={values.newPassword} fullWidth onChange={handleChange} />
                            </Box>
                            <Box sx={{ padding: '0 40px' }}>
                                <Button type='submit' variant='contained' fullWidth disabled={isSubmitting}> UPDATE PROFILE </Button>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box>

    )
}

export async function getServerSideProps(context) {
    const URL = process.env.NODE_ENV === 'production' ? 'https://touristapp.vercel.app' : 'http://localhost:3000';
    const { id } = context.params
    const response = await fetch(`${URL}/api/user/${id}`);
    const data = await response.json()
    if (!data) { return { notFound: true } }
    return {
        props: { user: data.data }
    }
}