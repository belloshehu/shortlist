import React, {useState} from 'react'
import { toggleIsLoggedIn, setUser} from '../../../features/shortlist/shortlistSlice';
import {useDispatch, } from 'react-redux';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {
    FormGroup, 
    FormControl,
    Grid, 
    TextField, 
    Input,
    InputAdornment,
    Button, 
    IconButton,
    OutlinedInput,
    InputLabel,
    Typography
} from "@mui/material"
import {
    VisibilityOff,
    Visibility,
    Person,
    Email,
    Phone,
    Home
} from '@mui/icons-material'

function LoginForm() {
    const dispatch = useDispatch()
    const initialValue = {
        password: "",
        email: ""
    }
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState("")

    const handlePasswordVisibilityClick = (e) =>{
        if(inputType === "password"){
            setInputType("text")
            setPasswordVisible(true)
        }else{
            setInputType("password")
            setPasswordVisible(false)
        }
    }

    const handleInputChange = (e) =>{
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = async(e) => {
        // submit form
        e.preventDefault()
        const {email, password} = value
        if(password === "" || email === ""){
            setError(true)
            console.log("invalid form")
            return 
        }else{
            try{
                const {data} = await axios.post('http://localhost:8000/auth/login', value)
                console.log(data.token)
                localStorage.setItem('token', data.token)
                setStatus(`Logged in ${data.organisation.name}`)
                dispatch(toggleIsLoggedIn(true));
                dispatch(setUser(data.organisation))
                
            }catch(error){
                console.log(error)
                setStatus("Login failed ")
                localStorage.removeItem('token')
                dispatch(toggleIsLoggedIn(false));
            }
        }
        setError(false)
    }
    return (
        <div>
            <form method="POST" onSubmit={handleFormSubmit}>
            <span style={{color: 'green'}}>{status}</span>
            <h2 style={{textAlign:'left'}}>Login</h2><hr/>
                <FormGroup>
                    <Grid spacing={2}  container> 
                        <Grid item sm={12} lg={6}>
                            <TextField 
                                onChange={handleInputChange}
                                value={value.email}
                                required 
                                label="Email" 
                                variant="outlined"
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                     
                        <Grid item sm={12} lg={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput 
                                    onChange={handleInputChange}
                                    value={value.password}
                                    required  
                                    type={inputType}
                                    name="password"
                                    id="password"
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                aria-label="toggle password visibility"
                                                onClick={handlePasswordVisibilityClick}
                                            >
                                                {passwordVisible? <Visibility />: <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid> 
                        <Grid item sm={12} lg={6}>
                            <Button variant="contained" type="submit"  edge="start">Submit</Button>
                        </Grid>
                        <Grid item sm={12} lg={6}>
                            <Link variant="contained"  to="/" edge="end" component={Button}>Cancel</Link>
                        </Grid>

                    </Grid>   
                </FormGroup>
            </form>
        </div>
    )
}

export default LoginForm