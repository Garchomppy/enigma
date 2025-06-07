import * as React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

// Define the props interface for TypeScript
interface SearchBarProps {
    placeholder?: string; // Optional prop for custom placeholder
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Job positions/ Company name' }) => {
    const [inputValue, setInputValue] = React.useState('');
    const [isSpinning, setIsSpinning] = React.useState(false);

    const handleClear = () => {
        setIsSpinning(true);
        setInputValue('');
        // Reset spin state after animation completes
        setTimeout(() => setIsSpinning(false), 300); // Match animation duration
    };

    return (
        <Box
            sx={{
                width: '100%',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'row',
                    mb: -2,
                },
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder={placeholder} // Use the prop here
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#98A2B3', backgroundColor: '#F9FAFB' }} />
                        </InputAdornment>
                    ),
                    endAdornment: inputValue && (
                        <InputAdornment
                            position="end"
                            sx={{
                                animation: inputValue ? 'flipIn 0.3s ease-in forwards' : 'flipOut 0.3s ease-out forwards',
                                transformStyle: 'preserve-3d',
                                '@keyframes flipIn': {
                                    '0%': { transform: 'rotateY(90deg)', opacity: 0 },
                                    '100%': { transform: 'rotateY(0deg)', opacity: 1 },
                                },
                                '@keyframes flipOut': {
                                    '0%': { transform: 'rotateY(0deg)', opacity: 1 },
                                    '100%': { transform: 'rotateY(-90deg)', opacity: 0 },
                                },
                            }}
                        >
                            <IconButton
                                onClick={handleClear}
                                edge="end"
                                sx={{
                                    animation: isSpinning ? 'spin 0.3s ease-in-out' : 'none',
                                    '@keyframes spin': {
                                        '0%': { transform: 'rotateX(0deg)' },
                                        '100%': { transform: 'rotateX(360deg)' },
                                    },
                                }}
                            >
                                <ClearIcon sx={{ color: '#000' }} />
                            </IconButton>
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
                    boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
                }}
            />
        </Box>
    );
};

export default SearchBar;