import * as React from "react";
import SectionTitle from "../font/sectionTitle";
import { JobListPage } from "../home/JobCard";
import LogoHeader from "../logoHeader";
import SearchBar from "../searchBar";
import CTA from "../cta";
import { FilterSortBar } from "../filterSortBar";

import {
    Box,
    Typography,
    Chip,
    Divider,
} from "@mui/material";

export const MainContent = () => {
    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];
    const jobData = [1, 2, 3, 4, 5, 6, 7, 8];

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
                display: 'flex',
                gap: 2, p: 3, mb: 3, mt: 3, width: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'column',
                    mb: -2,
                    gap: 4
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
                    flexDirection: 'row',
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
                display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4, width: '100%'
            }}>
                {/* Left Column */}
                <Box sx={{
                    width: '100%',
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2
                    },
                }}>
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions />
                    <CTA />

                    {/* Trending Jobs */}
                    <SectionTitle title="Trending Jobs This Week" showOptions1 showOptions />

                    <JobListPage />
                </Box>
            </Box >

        </Box >
    );
};

