import React from 'react';
import HeroSection from '../../components/HeroSection';
import { Container, Card, CardActionArea, Typography, Rating, CardActions} from '@mui/material'
import { CardMedia, CardContent, CardHeader, Grid } from '@mui/material'

export default function HomePage() {

    const features =  [
        { title: "Feature 1", desc: "Description for feature 1" },
        { title: "Feature 2", desc: "Description for feature 2" },
        { title: "Feature 3", desc: "Description for feature 3" },
        { title: "Feature 4", desc: "Description for feature 4" }
    ];
    const testimonials = [
        { author: "John Doe", quote: "Quote 1", rating: 4.5 },
        { author: "John Smith", quote: "Quote 2", rating: 4.0 }, 
        { author: "John Wick", quote: "Quote 3", rating: 3.5 },
        { author: "John A", quote: "Quote 4", rating: 4.2 },

    ]


    return (
        <>
            <Container className='home-page'>
                {/* Hero Section */}
                <HeroSection/>
            </Container>
            <br/>
            {/* Content Section */}
            <Container className='content'>
                <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                    <Grid item xs={12} alignText="center"><h2>Features</h2></Grid>
                               
                    {features.map((feature, index) => (
                        <Grid item xs={6} justify="center">
                            <Card key={index}>
                                <CardActionArea>
                                    <CardMedia component="img" height="140"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {feature.title}
                                        </Typography>
                                        <Typography variant='body2' color="text.secondary">
                                            {feature.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>    
                        </Grid>    
                    ))}
                </Grid> 
            </Container>
            <br/>
            <Container className='testimonials'>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}><h2>Testimonials</h2></Grid>
                        {testimonials.map(( testimonial, index ) => (
                            <Grid item xs={3}>
                                <Card key={index}>
                                    <CardActions>
                                        <Rating value={testimonial.rating} precision={0.25} readOnly/>
                                    </CardActions>
                                    <CardContent>
                                        <Typography>
                                            {testimonial.quote}
                                        </Typography>
                                    </CardContent>
                                    <CardHeader title={testimonial.author}/>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Container> 
            <br/>      
        </>
    )
}