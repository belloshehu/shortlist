import React from 'react'
import {FormGroup, FormControl} from "@mui/material"

const [searchKey, setSearchKey] = useState("name")

function Form() {
    return (
        <div id="search-form">
            <form>
                <FormGroup>
                    <FormControl>
                        <TextInput 
                            required label={searchKey} 
                            variant="outlined"
                        />
                    </FormControl>
                </FormGroup>
            </form>
        </div>
    )
}

export default Form
