import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CredEdit(props) {

    const [ cred, setCred ] = useState(props.cred);

    const handleChange = (e) => {
        const updatedCred = {...cred};
        updatedCred[e.target.name] = e.target.value;
        setCred(updatedCred);
    }

    const handleSubmit = (cred) => {
      props.addCred(cred)
    }

    return(
        <>
          <Box>
            <Typography component="h1">
                Update Credentials
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <TextField
                    readOnly
                    fullWidth
                    id="accountName"
                    label="Account Name"
                    name="accountName"
                  //   value={}
                    // autoComplete="last-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    readOnly
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="New Password"
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
                Update Credential
              </Button>
            </Box>
          </Box>
        </>
    )
}