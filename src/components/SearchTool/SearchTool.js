import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {TextField} from '@mui/material'

export default function SearchTool({searchKey}) {
    return (
        <div>
            <form>
                <TextField label={`Search using ${searchKey}`} variant="outlined" sx={{width: '100%'}}/>
                <SearchIcon sx={{position: 'relative', right:'-90%', top:'-40px', zIndex:2}}/>
            </form>
        </div>
    )
}
