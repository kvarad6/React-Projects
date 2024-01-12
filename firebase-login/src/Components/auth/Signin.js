import { Typography, Box, Paper, TextField, Grid, Button, Avatar, FormControlLabel, FormGroup, Checkbox, Link } from '@mui/material'
import React, { useState } from 'react'
import lock from '../../static/images/avatars/lock.png'
import traveling from '../../static/images/avatars/traveling.png'
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
            }).catch((error) => {
                console.log(error)
            })

    }

    return (
        <div id="login">
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid item xs={6}>
                    <Avatar src={traveling} variant="square" sx={{ width: 400, height: 500, mt: 10 }} />
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
                        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 10 }}>
                            <form onSubmit={signIn}>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                                    <Grid item>
                                        <Avatar alt='lockImage' src={lock}></Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ fontSize: 25 }}>Sign in</Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField sx={{ width: 405 }}
                                            required
                                            id="signinEmail"
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
                                            id="signinPassword"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        >
                                        </TextField>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-start' }}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item>
                                        <Button type="submit" variant='contained' sx={{ width: 405 }}>SIGN IN</Button>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                                        <Grid item>
                                            <Link>Forgot password?</Link>
                                        </Grid>
                                        <Grid item>
                                            <Link>Don't have an account? Sign Up</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </div>
    )
}

export default Signin