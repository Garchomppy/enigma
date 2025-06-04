import * as React from "react";
import SuggestedJobCard from "../suggestJobCard";
import SectionTitle from "../font/sectionTitle";
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import LogoHeader from "../logoHeader";
import SectionContent from "./sectionContent";
import {
    Box,
    Typography,
    Button,
    Chip,
    Card,
    CardContent,
    IconButton,
    TextField, InputAdornment,
    Divider,
} from "@mui/material";
import SearchBar from "../searchBar";
import { FilterSortBar } from "../filterSortBar";

export const DetailContent = () => {

    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            width: '100vh',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <LogoHeader />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <Box sx={{
                display: 'flex', gap: 2, p: 3, mb: 3, mt: 3, maxWidth: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'column',
                    mb: -2
                },
            }}>

                <SearchBar />
                <FilterSortBar />
            </Box>

            {/* Popular Jobs */}
            <Box sx={{
                mb: 2.5, display: 'flex', gap: 2,
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'column',
                    p: 2.5,
                    mb: 2
                },

            }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                    Popular Jobs:
                </Typography>

                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {popularJobs.map((job, index) => (
                        <Chip
                            key={index}
                            label={job}
                            variant="outlined"
                            clickable
                            sx={{
                                color: '#667085',
                                borderColor: '#2494B6',
                                '&:hover': {
                                    backgroundColor: '#2494B620' // 20% opacity
                                }
                            }} />
                    ))}
                </Box>
            </Box>

            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 2, width: '100%'
            }}>
                {/* Left Column */}
                <Box sx={{
                    width: '70%',
                    display: "flex",
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2,
                    },
                }}>

                    <SectionContent />

                </Box>

                {/* Right Column */}
                <Box sx={{ mr: 2 }}>
                    <SectionTitle title="Suggested" showOptions />
                    <Box sx={{
                        mt: 2
                    }}>
                        {[1, 2, 3, 4, 5].map((job) => (
                            <SuggestedJobCard />
                        ))}
                    </Box>
                </Box>
            </Box >

        </Box >
    );
};

