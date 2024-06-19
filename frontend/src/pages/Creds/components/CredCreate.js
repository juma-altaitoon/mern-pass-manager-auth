import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CredCreate(props) {

    const [ newCred, setNewCred ] = useState({});

    const handleChange = (e) => {
        const cred = {...newCred};
        cred[e.target.name] = e.target.value;
        setNewCred(cred);
    }

    const handleSubmit = (newCred) => {
      props.addCred(newCred)
    }

    return(
        <>
          <Box>
              <Typography component="h1">
                  Add Credentials
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <TextField
                      required
                      fullWidth
                      id="accountName"
                      label="Account Name"
                      name="accountName"
                      // autoComplete="last-name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="text"
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
                  Add Credential
                </Button>
              </Box>
          </Box>
        </>
    )
}