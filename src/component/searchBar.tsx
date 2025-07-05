import * as React from 'react';
import { Box, InputBase, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
    placeholder?: string;
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
                backgroundColor: '#F9FAFB',
                borderRadius: 2,
                width: '100%',
                boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center', // Match Container1
                color: '#98A2B3',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'row',
                    mb: -2,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: 1, // Match IconParent
                    alignSelf: 'stretch', // Match Container1
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '64px',
                    padding: '0 16px',
                    '&:hover': { borderColor: '#98A2B3' },
                    '&:focus-within': { borderColor: '#98A2B3' },
                }}
            >
                <InputAdornment position="start">
                    <SearchIcon
                        sx={{
                            color: '#98A2B3',
                            backgroundColor: '#F9FAFB',
                            width: '24px', // Match Icon
                            height: '24px', // Match Icon
                        }}
                    />
                </InputAdornment>
                <InputBase
                    fullWidth
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{
                        color: '#98A2B3',
                        fontSize: '20px',
                        width: '100%', // Match JobPositionsCompany
                        '& input': {
                            height: '100%',
                            backgroundColor: '#F9FAFB',
                        },
                    }}
                />
                {inputValue && (
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
                            <ClearIcon sx={{ color: '#000', width: '24px', height: '24px' }} />
                        </IconButton>
                    </InputAdornment>
                )}
            </Box>
        </Box>
    );
};

export default SearchBar;