import * as React from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FilterSortBar } from './filterSortBar';

export default function SearchBar() {
    return (
        <Box sx={{
            display: 'flex', gap: 2, p: 3, mb: 3, mt: 3, maxWidth: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
            '@media (max-width: 991px)': {
                maxWidth: '100%',
                flexDirection: 'row',
                mb: -2
            },
        }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Job positions/ Company name"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#98A2B3', backgroundColor: '#F9FAFB' }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: 20,
                        height: '64px',
                        '& fieldset': { borderColor: '#98A2B3' },
                        '&:hover fieldset': { borderColor: '#98A2B3' },
                        '&.Mui-focused fieldset': { borderColor: '#98A2B3' },
                    },
                    '& input': { color: '#98A2B3', fontSize: '20px' },
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
            />

            <FilterSortBar />
        </Box>
    );
}