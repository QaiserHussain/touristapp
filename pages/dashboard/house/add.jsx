import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { Formik } from 'formik'

export default function Add() {
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex: { md: 0.6, sm: 0.8, xs: 1 } }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> CREAT HOUSE </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>please fill right information</Typography>
                <Formik
                    initialValues={{
                        user: '',
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
                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                        console.log(values);
                    }}

                >
                    {({ handleSubmit, isSubmitting, values, handleChange }) => (
                        <Box component='form' onSubmit={handleSubmit}>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField placeholder="title" label='Title' fullWidth size="small" />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField placeholder="description" label='Description' fullWidth size="small" />
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <TextField placeholder="address" label='Address' fullWidth size="small" />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: '15px' }}>
                                <TextField placeholder="country" label='Country' fullWidth size="small" />
                                <TextField placeholder="city" label='City' fullWidth size="small" />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: '15px' }}>
                                <TextField placeholder="price" label='Price' fullWidth size="small" />
                                <TextField placeholder="capacity" label='Capacity' fullWidth size="small" />
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
                                <TextField placeholder="images" label='imgs' fullWidth size="small" />
                            </Box>
                            <Box sx={{ padding: '0 40px' }}>
                                <Button type='submit' variant='contained' fullWidth size="small"> Create House </Button>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box>

    )
}