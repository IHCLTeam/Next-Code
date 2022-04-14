import { Typography } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',

}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

interface Props {
    name: string;

}
export default function SearchAppBar({ data }: Props) {
    
    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event: { target: { value: any; }; }) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)

        const newFilter = data.filter((value: { name: string; }) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())

        });


        if (searchWord === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter);
        }
    }


    const clearInput = () => {
        setFilterData([])
        setWordEntered("")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>

                <Search>
                    <SearchIconWrapper sx={{ color: 'white' }} >
                        {filterData.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon onClick={clearInput} />
                        )}
                    </SearchIconWrapper>

                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ backgroundColor: 'black', opacity: 0.6, color: 'white' }}
                        onChange={handleFilter} value={wordEntered} />
                </Search>
            </Toolbar>

            {filterData.length != 0 && (
                <Typography className="dataResult">
                    {filterData.slice(0, 14).map((value, key) => {
                        // eslint-disable-next-line react/jsx-key
                        return <div className="dataItem">
                            {value.name}
                        </div>
                    })}
                </Typography>
            )}

        </Box>
    )
}