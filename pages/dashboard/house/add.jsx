import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { Formik } from 'formik';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import { createHouse } from '../../../helper/house';
// import { useSession } from 'next-auth/react';
import { houseValidation } from '../../../utils/validation'
import { useEffect, useState } from "react";
import Preview from "../../../components/Preview";
import {useSelector} from 'react-redux'


export default function Add() {
    const { mutateAsync } = useMutation(createHouse);
    const [image, setImage] = useState([])
    const user = useSelector((state)=> state.login.value);
    console.log(user);

    const queryClient = useQueryClient();
    console.log(image);
    // const { data } = useSession()
    const data = '545sada'
    const { enqueueSnackbar } = useSnackbar();
    if (!data) { return <div>no athentic user please login first <Link href='/signin'  >Login</Link></div> }
    // console.log(data);
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
                        // user: 'das5d1a5sd',
                        user: user ? `${user._id}` : '',
                        title: '',
                        description: '',
                        address: '',
                        country: '',
                        city: '',
                        price: '',
                        capacity: '',
                        facilities: [],
                        amenities: [],
                        images: [],
                    }}
                    // validationSchema={houseValidation}
                    onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
                        setSubmitting(true)
                        console.log(values);
                        try {
                           const created = await mutateAsync(values);
                           if(!created.success){
                             enqueueSnackbar(created.message,{variant:'error',autoHideDuration:3000})
                           }else{
                            enqueueSnackbar(created.message,{variant:'success',autoHideDuration:3000})
                           }
                        } catch (e) { }
                    }}
                >
                    {({ handleSubmit, isSubmitting, values, handleChange, setFieldValue }) => (
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
                            <Box sx={{ marginBottom: '15px', border: '2px dotted lightgrey', cursor: 'pointer', display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <label htmlFor='select-files' style={{ width: '100%' }}>
                                    Click here to select Images

                                    <input
                                        type="file"
                                        multiple
                                        id="select-files"
                                        name="images"
                                        style={{ display: 'none' }}
                                        onChange={async (e) => {
                                            const files = e.target.files;
                                            let items = [];
                                            for (let i = 0; i < files.length; i++) {
                                                const element = files[i];
                                                // console.log(element);
                                                const converted = await imageConverter(element);
                                                items.push(converted);
                                                                                             
                                                function imageConverter(file) {
                                                    return new Promise((resolve, reject) => {
                                                        const reader = new FileReader();
                                                        reader.readAsDataURL(file);
                                                        reader.onload = () => { resolve(reader.result) }
                                                        reader.onerror = (error) => { reject(error) }
                                                    })
                                                }
                                            }
                                            setImage(items)
                                            setFieldValue('images', items)
                                        }}
                                    />
                                </label>

                                {image.length > 0 ? image.map(i=>(<Preview key={i} pic={i}/>)) :'no mage selected yet'}
                                
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
