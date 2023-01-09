import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { Formik } from 'formik'
import Link from 'next/link'
import { useMutation, useQueryClient } from 'react-query'
import { useSnackbar } from 'notistack';
import { createHouse } from '../../../helper/house';
import { useSession } from 'next-auth/react'


export default function Add() {
    const { mutateAsync } = useMutation(createHouse);
    const queryClient = useQueryClient();
    const { data } = useSession()
    const { enqueueSnackbar } = useSnackbar();

    if(!data){return <div>no athentic user please login first <Link href='/signin'  >Login</Link></div>}
   
    const names = [
        'Wifi',
        'Swimming pool',
        'Tea service',
        'Waiters',
        'Music',
        'LED',
        'Shower',
        'Kids toys',
        'Chef',
        'Security',
        'Car parking'
    ];

    return (

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex: { md: 0.6, sm: 0.8, xs: 1 } }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> CREAT HOUSE </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>please fill right information</Typography>
                <Formik
                    initialValues={{
                        user: '63b919b55a515ce11b5d0060',
                        title: '',
                        description: '',
                        address: '',
                        country: '',
                        city: '',
                        price: '',
                        capacity: '',
                        facilities: [],
                        amenities: [],
                        imgs: [],
                    }}
                    // validationSchema={signupValidation}
                    onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
                        setSubmitting(true)
                        try {
                            await mutateAsync(values,
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
                                        setSubmitting(false);
                                    },
                                }
                            );
                        } catch (e) { }
                    }}
                >
                    {({ handleSubmit, isSubmitting, values, handleChange }) => (
                        <Box component='form' onSubmit={handleSubmit}>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField name='title' placeholder="title" label='Title' fullWidth size="small" value={values.title} onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField name='description' placeholder="description" label='Description' fullWidth size="small" value={values.description} onChange={handleChange} />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField name='address' placeholder="address" label='Address' fullWidth size="small" value={values.address} onChange={handleChange} />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: '15px' }}>
                                <TextField name='country' placeholder="country" label='Country' fullWidth size="small" value={values.country} onChange={handleChange} />
                                <TextField name='city' placeholder="city" label='City' fullWidth size="small" value={values.city} onChange={handleChange} />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: '15px' }}>
                                <TextField name='price' placeholder="price" label='Price' fullWidth size="small" value={values.price} onChange={handleChange} />
                                <TextField name='capacity' placeholder="capacity" label='Capacity' fullWidth size="small" value={values.capacity} onChange={handleChange} />
                            </Box>


                            <FormControl sx={{ marginBottom: '15px' }} fullWidth size='small'>
                                <InputLabel id="demo-multiple-chip-label">Facilities</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="select-multiple-chip"
                                    multiple
                                    fullWidth
                                    name='facilities'
                                    value={values.facilities}
                                    onChange={handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Facilities" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                // MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        // style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>




                            <FormControl sx={{ marginBottom: '15px' }} fullWidth size='small'>
                                <InputLabel id="demo-multiple-chip-label">Amenities</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="select-multiple-chip"
                                    multiple
                                    fullWidth
                                    name='amenities'
                                    value={values.amenities}
                                    onChange={handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Amenities" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                // MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        // style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>

                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField name='imgs' placeholder="images" label='imgs' fullWidth size="small" value={values.imgs} onChange={handleChange} />
                            </Box>
                            <Box sx={{ padding: '0 40px' }}>
                                <Button type='submit' variant='contained' fullWidth size="small" disabled={isSubmitting}> Create House </Button>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box>

    )
}