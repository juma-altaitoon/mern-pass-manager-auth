import React, { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'


export default function SignIn(props) {

    const [ user, setUser ] = useState({});
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleChange = (e) => {
        const input = {...user};
        input[e.target.name] = e.target.value;
        setUser(input);
    }

    const handleSubmit = (user) => {
        props.sigin(user)
    }

    return(
        <>
            <Box className="signin-page">
                <Typography component='h1' varian='h5'>Sign In</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="emailAddress"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Grid>
                </Box>
            </Box>
            
        </>
    )
}