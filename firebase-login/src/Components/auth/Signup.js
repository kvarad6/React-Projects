import { Typography, Box, Paper, TextField, Grid, Button, Avatar, Link } from '@mui/material'
import React, { useState } from 'react'
import lock from '../../static/images/avatars/lock.png'
// import axios from 'axios'
import traveling from '../../static/images/avatars/traveling.png'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import {auth} from "../firebase"
// const auth = getAuth();

const Signup = () => {
    //need to handle each state seperately 
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');


    //passing event as "e" from the form
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <div id='signup'>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <form onSubmit={signUp}>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                    <Avatar alt='lockImage' src={lock}></Avatar>
                                    <Typography sx={{ fontSize: 25 }}>Sign up</Typography>

                                    <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signupFirstName"
                                                label="First Name"
                                                name="firstName"
                                                type="search"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            >
                                        </TextField>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            required
                                            id="signupLastName"
                                            label="Last Name"
                                            name="lastName"
                                            type="search"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        >
                                        </TextField>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signupEmail"
                                        label="Email"
                                        name="email"
                                        type="search"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <TextField sx={{ width: 405 }}
                                        required
                                        id="signupPassword"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <Button type="submit" variant='contained' sx={{ width: 405 }}>SIGN UP</Button>
                                </Grid>
                                <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'flex-end' }}>
                                    <Grid item>
                                        <Link href="/signin">Already have an account? Sign in</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
        </div >
    )
};


export default Signup