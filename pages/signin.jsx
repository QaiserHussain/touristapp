import { Box, Button, TextField, Typography } from "@mui/material";
import { signinValidation } from '../utils/validation'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import {useMutation} from 'react-query'
import {loginUser} from '../helper/users'
import {userSlice,savedUser} from '../store/loginSlice'
import {useDispatch,useSelector} from 'react-redux'
export default function Signin() {
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.login.value)
    console.log(user);
    const { enqueueSnackbar } = useSnackbar()
    const {mutateAsync} = useMutation(loginUser);
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex: { md: 0.3, sm: 0.5, xs: 1 } }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> SIGN IN </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>please sign-in to your account</Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={signinValidation}
                    onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
                        setSubmitting(true)
                        try {
                            if (!!!values.email.trim()) {
                                setFieldError("email", "Only Spaces not allowed.");
                                throw Error("Form Error");
                            }
                            if (!!!values.password.trim()) {
                                setFieldError("password", "Only Spaces not allowed.");
                                throw Error("Form Error");
                            }
                            const result = await mutateAsync(values)
                            if(!result.success){
                              enqueueSnackbar(result.message,{variant:'error',autoHideDuration:3000})
                              setSubmitting(false)
                            }else{
                                enqueueSnackbar(result.message,{variant:'success',autoHideDuration:3000})
                                dispatch(savedUser(result.data))
                                resetForm({values:''})
                                setSubmitting(false)
                            }
                            console.log(result);
                        
                        } catch (e) { }
                    }}

                >
                    {({ handleSubmit, isSubmitting, values, errors, touched, handleChange, handleBlur }) => (
                        <Box component='form' onSubmit={handleSubmit}>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField
                                    placeholder="Email"
                                    label='Email'
                                    id="email"
                                    name='email'
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!!(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField
                                    placeholder="Password"
                                    label='Password'
                                    id='password'
                                    name='password'
                                    fullWidth
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!!(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            </Box>
                            <Box sx={{ padding: '0 40px' }}>
                                <Button type='submit' variant='contained' fullWidth disabled={isSubmitting} > SIGN IN </Button>
                            </Box>
                        </Box>
                    )}

                </Formik>
            </Box>
        </Box>

    )
}