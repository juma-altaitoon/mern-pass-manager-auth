 import React from 'react';
import hero from '../static/sec_hero.jpeg';
import { alpha, Box, Button, Container, Typography } from "@mui/material"


export default function HeroSection() {

    return(
        <>
            <Box
                id="image"
                sx={() => ({
                  mt: { xs: 8, sm: 10 },
                  alignSelf: 'center',
                  height: { xs: 200, sm: 700 },
                  width: '100%',
                  backgroundImage: {hero},
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  outline: '1px solid',
                  outlineColor:`${alpha("#BFCCD9", 0.5)}`,
                  boxShadow:`0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                })}
            >
                <Container maxWidth="sm">
                    <Typography component="h1" variant='h2' align='center' color="#ffea00" gutterBottom>
                        Welcome to CRED-GUARD!
                    </Typography>
                    <Typography variant='h5' align='center' color="text.secondary" paragraph>
                        A sleek secure vault platform that securely stores your valuable passwords.
                    </Typography>
                    <Container display='flex' justifyContent='center'>
                        <Button variant='contained' color='primary'>Let's Store some passwords</Button>
                    </Container>
                </Container>
            </Box>      
        </>  
    )
}
