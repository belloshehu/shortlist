import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {toggleIsLoggedIn, setUser} from '../../../features/shortlist/shortlistSlice';
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
} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import './Form.css'
import logo from '../../../images/image.png'

function UpdateProfileForm() {
    const initialValue = {
        name: "",
        phoneNumber: "",
        password1: "",
        password2: "",
        logo: "",
        address: "",
        email: ""
    }
    const [searchKey, setSearchKey] = useState("name")
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [logoSource, setLogoSource] = useState(logo)
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState("")
    const dispatch = useDispatch()
    const handlePasswordVisibilityClick = (e) =>{
        if(inputType === "password"){
            setInputType("text")
            setPasswordVisible(true)
        }else{
            setInputType("password")
            setPasswordVisible(false)
        }
    }

    const handleImageUpload = (e) =>{
        if(e.target.files.length > 0){
            const src = URL.createObjectURL(e.target.files[0])
            setLogoSource(src)
            setValue({...value, logo: src})
        }
    }

    const handleInputChange = (e) =>{
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = async(e) => {
        // submit form
        e.preventDefault()
        const {name, email, address, password1, password2, logo, phoneNumber} = value
        if(password1 !== password2){
            setError(true)
            console.log("invalid form")
            return 
        }else{
            try{
                const {data} = await axios.post('http://localhost:8000/organisation', value)
                console.log(data)
                setStatus("Profile created successfully")
                localStorage.setItem('token', data.token)
                dispatch(toggleIsLoggedIn(true));
                dispatch(setUser(data.organisation))
            }catch(error){
                console.log(error)
                setStatus("Profile not created ")
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
            <h2 style={{textAlign:'left'}}>New organisation profile</h2><hr/>
            <Grid spacing={2} container>
                <Grid item sm={12} lg={12}>
                    <Typography>Enter organisation's information accordingly</Typography>
                </Grid>
            </Grid>
                <FormGroup>
                    <Grid spacing={2}  container>
                        <Grid item sm={12} lg={6}  sx={{md:0, px:0}}>
                            <TextField 
                                onChange={handleInputChange}
                                value={value.name}
                                required label="Organisation name" 
                                name="name"
                                variant="outlined"
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <Person />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Grid>
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
                            <TextField 
                                onChange={handleInputChange}
                                value={value.phoneNumber}
                                required label="Phone number" 
                                variant="outlined"
                                type="tel"
                                pattern="[0-9]"
                                maxlength="11"
                                name="phoneNumber"
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={6} lg={3}>
                            <InputLabel 
                                htmlFor="input-logo" 
                                id="logo-label"
                            >Upload logo</InputLabel>
                            <Input 
                                id="input-logo"
                                required label="Logo" 
                                type="file"
                                name="logo"
                                onChange = {handleImageUpload}
                                accept='image/*'
                                style={{display:'none'}}
                            />
                        </Grid>
                        <Grid item sm={6} lg={3}>
                            <img src={logoSource} id='organisation-logo'/>
                        </Grid>
                        <Grid item sm={12} lg={12} >
                            <TextField 
                                onChange={handleInputChange}
                                value={value.address}
                                required label="Address" 
                                variant="outlined"
                                name="address"
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        aria-label="toggle confirm password visibility"
                                    >
                                        <Home />
                                    </IconButton>
                                </InputAdornment>
                            }
                            />
                        </Grid>
                        <Grid item sm={12} lg={6}>
                            <Button variant="contained" type="submit"  edge="start">Submit</Button>
                            <Link variant="contained"  to="/" edge="end" component={Button}>Cancel</Link>
                        </Grid>
                    </Grid>   
                </FormGroup>
            </form>
        </div>
    )
}

export default UpdateProfileForm