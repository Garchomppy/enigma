import * as React from "react";
import {
    Box,
    Typography,
    Card,
    Divider,
    IconButton,
} from "@mui/material";
import LogoHeader from "@/component/logoHeader";
import SearchBar from "../searchBar";
import { FilterSortBar } from "../filterSortBar";
import CardComponent from "./saveJobCard";

export const MainContent = () => {

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <LogoHeader />
                <Divider sx={{ mt: 1, mb: 1, width: '100%' }} />
            </Box>

            <Typography sx={{ fontSize: '30px', lineHeight: '38px', mb: 3 }} fontWeight={600} color="#101828">
                List of Saved Jobs
            </Typography>

            {/* Popular Jobs */}

            <Typography sx={{ fontSize: '20px', lineHeight: '30px', mb: 3 }} fontWeight={600} gutterBottom color="#101828">
                You have 3 saved jobs
            </Typography>

            <Box sx={{
                display: 'flex',
                gap: 2,
                mb: 4,
                flexDirection: { xs: 'column', sm: 'row' },
            }}>
                <SearchBar placeholder="Search saved jobs by title, company, or location" />
                <FilterSortBar />
            </Box>
            <CardComponent />
            ``
        </Box >
    );
};

