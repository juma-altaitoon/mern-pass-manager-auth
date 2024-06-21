import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper"
import { CardHeader, Icon, Box, Grid, TextField, Divider } from '@mui/material';

export default function Cred(props) {
    
  return (
    <Paper square={false} elevation={3}>
        <Card>
            <CardContent>
            <Box>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      id="accountName"
                      label="Account Name"
                      name="accountName"
                      readOnly
                      value={props.accountName}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      id="username"
                      label="Username"
                      name="username"
                      readOnly
                      value={"props.username"}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      readOnly
                      value={props.password}
                    />
                  </Grid>
                </Grid>
              </Box>              
            </CardContent>
            <Divider/>
            <CardActions>
                <Button onClick={()=> props.edit(props._id)} >Edit</Button>
                <Button size="small" onClick={()=> props.delete(props._id)}>Delete</Button>
            </CardActions>
        </Card>
    </Paper>
  );
}