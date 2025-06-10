import * as React from "react";
import PageHeader from "./headerDetail";
import SectionDetail from "./sectionDetail";
import { Box, Typography } from "@mui/material";
import SearchBar from "@/component/searchBar";
import { FilterSortBar } from "@/component/filterSortBar";
import DashboardDetail from "./dashBoardDetail";

export const MainContent = () => {

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
        }}>
            <PageHeader />
            <SectionDetail />

            <Typography fontSize={'18px'} lineHeight={'28px'} fontWeight={600} color="#101828" sx={{ ml: 3 }}>
                History of applications
            </Typography>

            <Box sx={{
                display: 'flex',
                gap: 2, p: 3, mb: 3, mt: 3,
                width: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    width: '100%',
                    gap: 5,
                    flexDirection: 'column',
                    mb: -2
                },
            }}>
                <SearchBar placeholder="Search by type (media/news/blog), publish date, and author." />
                <FilterSortBar />
            </Box>
            <Box sx={{ p: 3 }}>
                <DashboardDetail />
            </Box>
        </Box >
    );
};

