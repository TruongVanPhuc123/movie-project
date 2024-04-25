import { Stack, alpha, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    // pointerEvents: 'none',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        // [theme.breakpoints.up('sm')]: {
        //     transition: "0.5s",
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    transition: "1.5s ",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

function SearchGroup() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (event) => {
        let query = event.target.value
        if (query) {
            setSearchParams({ query })
        } else {
            setSearchParams({})
        }
    };

    return (
        <Stack spacing={0} alignItems="center" direction="row">
            <Search>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchParams.get('query') || ''}
                    onChange={handleChange}
                />
                <SearchIconWrapper onClick={() => navigate(`/search` + location.search)}>
                    <SearchIcon sx={{ cursor: "pointer" }} />
                </SearchIconWrapper>
            </Search>
        </Stack>
    )
}

export default SearchGroup