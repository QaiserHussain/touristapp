import { createTheme, colors, useTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    '@media (min-width: 600px)': {
                        minHeight: 34,
                    },
                    '@media (max-width: 600px)': {
                        minHeight: 30
                    }
                }
            }
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    '@media (min-width: 600px)': {
                        minHeight: 34,
                    },
                    '@media (max-width: 600px)': {
                        minHeight: 30,
                    }
                }
            }
        },

        MuiIconButton: {
            styleOverrides: {
                root: {
                    fontSize:24,
                    '@media (max-width: 600px)': {
                        fontSize: 20
                    }
                }
            }
        },

        MuiAvatar: {
            styleOverrides: {
                root: {
                    height: 30,
                    width: 30,
                    '@media (max-width: 600px)': {
                        height: 24,
                        width: 24
                    }
                }
            }
        }
    },

    palette: {
        brand:{
            main:colors.orange[600]
        },
        heading: {
            main: colors.grey[900]
        },
        paragraph: {
            main: colors.grey[600]
        }
    },

    typography: {
        h4: {
            fontSize:'24px',
            width:'max-content',
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom: '40px',
            textAlign: 'center',
            paddingBottom:'5px',
            color: colors.grey[700],
            borderBottom:`1px solid ${colors.orange[600]}`,
            '@media (max-width: 600px)': {
                fontSize: 18,
                marginBottom: '20px',
            }
        },
        h5: {
            color: colors.grey[900],
            '@media (max-width: 600px)': {
                color: colors.grey[800],
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        h6: {
            lineHeight: 1,
            color: colors.grey[800],
            fontSize:'14px',
            fontWeight:'bold',
            '@media (max-width: 600px)': {
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.grey[800]
            }
        }
    },


})

// export default theme;