import React, {useState, useEffect} from 'react'
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
    Home, 
    Date,
    Lens,
    Folder
} from '@mui/icons-material';
import {Link, useParams} from 'react-router-dom';
import './ShortlistForm.css'
import logo from '../../../images/image.png'
import {setUser, setShowShortlistForm} from '../../../features/shortlist/shortlistSlice';
import {useSelector, useDispatch} from 'react-redux'

function ShortlistForm() {
    const showShortlistForm = useSelector((state) =>state.shortlist.showShortlistForm)
    const dispatch = useDispatch()
    const initialValue = {
        title: "",
        description: "",
        dateReleased: "",
        dateExpired: "",
        photo: logo,
        searchField: "",
        shortlistFile: ""
    }
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState("")

    const handleFileUpload = (e) =>{
        if(e.target.files.length > 0){
            const src = URL.createObjectURL(e.target.files[0])
            setValue({...value, [e.target.name]: src})
        }
    }

    const handleInputChange = (e) =>{
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = async(e) => {
        // submit form
        e.preventDefault()
        const {title, searchField, dateReleased, description, photo} = value
        if(title === "" && searchField === "" && description === "" ){
            setError(true)
            console.log("invalid form")
            return 
        }else{
            try{
                const {data} = await axios.post('http://localhost:8000/shortlist', value, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(data)
                setStatus("Shortlist created successfully")
            }catch(error){
                console.log(error)
            }
        }
        setError(false)
    }

    return (
        <div id='shortlist-form'>
            <form method="POST" onSubmit={handleFormSubmit}>
            <span style={{color: 'green'}}>{status}</span>
            <h2 style={{textAlign:'left'}}>New shortlist</h2><hr/>
            <Grid spacing={2} container>
                <Grid item sm={12} lg={12}>
                    <p>Enter information for the shortlist you wish to create</p>
                </Grid>
            </Grid>
                <FormGroup>
                    <Grid spacing={2}  container>
                        <Grid item sm={12} lg={6}  sx={{md:0, px:0}}>
                            <TextField 
                                onChange={handleInputChange}
                                value={value.title}
                                required label="title" 
                                name="title"
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
                        <Grid item sm={12} lg={6}  sx={{md:0, px:0}}>
                            <TextField 
                                onChange={handleInputChange}
                                value={value.searchField}
                                required label="Search Field" 
                                name="searchField"
                                variant="outlined"
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <Lens />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Grid>
        
                        <Grid item sm={12} lg={12}>
                            <TextField 
                                onChange={handleInputChange}
                                value={value.description}
                                required label="Description" 
                                variant="outlined"
                                type="text"
                                name="description"
                                multiline
                                minRows={3}
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={12} lg={6} >
                            <TextField 
                                onChange={handleInputChange}
                                value={value.dateReleased}
                                required label="Publishing date" 
                                variant="outlined"
                                name="dateReleased"
                                type='date'
                                fullWidth
                                placeholder={""}
                            />
                        </Grid>
                        <Grid item sm={12} lg={6} >
                            <TextField 
                                onChange={handleInputChange}
                                value={value.dateExpired}
                                required label="Expiring date" 
                                variant="outlined"
                                name="dateExpired"
                                type='date'
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={6} lg={3}>
                            <InputLabel 
                                htmlFor="shortlist-file" 
                                id="file-label"
                            >Upload shortlist file</InputLabel>
                            <Input 
                                id="shortlist-file"
                                required label="Shortlist file" 
                                type="file"
                                name="shortlistFile"
                                onChange = {handleFileUpload}
                                accept='.json, .csv'
                                style={{display:'none'}}
                            />
                        </Grid>
                          <Grid item sm={6} lg={3}>
                            {
                                value.shortlistFile !== ""? "uploaded" :<Folder />
                            }
                        </Grid>
                        
                        <Grid item sm={6} lg={3}>
                            <InputLabel 
                                htmlFor="input-photo" 
                                id="photo-label"
                            >Upload photo</InputLabel>
                            <Input 
                                id="input-photo"
                                required label="Photo" 
                                type="file"
                                name="photo"
                                onChange = {handleFileUpload}
                                accept='image/*'
                                style={{display:'none'}}
                            />
                        </Grid>
                        <Grid item sm={6} lg={3}>
                            <img src={value.photo} id='shortlist-photo'/>
                        </Grid>
                     
                        <Grid item sm={12} lg={12}>
                            <Button variant="contained" type="submit"  edge="start">Submit</Button>
                            <Link 
                                variant="contained"
                                component={Button}
                                // onClick={()=>dispatch(setShowShortlistForm(false))}
                                to="/"
                                sx={{marginLeft:'20px'}}
                                >Close</Link>
                        </Grid>

                    </Grid>   
                </FormGroup>
            </form>
        </div>
    )
}

export default ShortlistForm