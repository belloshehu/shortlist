import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {OutlinedInput, InputAdornment, IconButton, InputLabel, FormControl} from '@mui/material'
import './SearchTool.css'

const style = {
    boxShadow : "2px 0px 2px 1px rgba(150, 150, 150, 0.5)",
    borderRadius: "50px",
}

export default function SearchTool({searchKey}) {
    return (
        <form>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="search">{`Enter ${searchKey}`}</InputLabel>
                <OutlinedInput 
                    style={style}
                    id="search"
                    variant="outlined"
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}
