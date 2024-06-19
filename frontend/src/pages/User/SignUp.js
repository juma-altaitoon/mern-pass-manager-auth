import React, { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'


export default function SignUp(props) {
    const [ newUser, setNewUser ] = useState({});
    const [ isSubmitted, setIsSubmitted ] = useState(false);
   
    const handleChange = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        setNewUser(user);
    }

    const handleSubmit = (newUser) => {
      props.signup(newUser)
    }

    return(
        <>
          <Box className="signup-page">
              <Typography component='h1' variant='h5'Sign Up></Typography>
              
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="last-name"
                        onChange={handleChange}
                      />
                    </Grid>
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
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/Signin" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                {isSubmitted && (
                  <div className="success-message">
                      <h2>Success: Account Created!</h2>
                      <p>You can now Signin to your account.</p>
                  </div>
              )}
          </Box>
        </>
    )
}