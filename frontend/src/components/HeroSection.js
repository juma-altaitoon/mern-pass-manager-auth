import React from 'react';
import hero from '../static/sec_hero.jpeg';
import { alpha, Box, Button, Container, Typography } from "@mui/material"


export default function HeroSection() {

    return(
        <>
            <Box justifyContent='center'>
                <Container>
                    <Typography component="h1" variant='h2' align='center' color="primary" gutterBottom>
                        Welcome to CRED-GUARD!
                    </Typography>
                    <Typography variant='h5' align='center' color="secondary" paragraph>
                        A sleek secure vault platform that securely stores your valuable passwords.
                    </Typography>  
                </Container>
                <Button variant='contained' color='primary'>
                        Let's Store some passwords
                </Button> 
            </Box>      
        </>  
    )
}
