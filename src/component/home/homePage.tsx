"use client";
import * as React from "react";
import { Box, useTheme } from "@mui/material";
import { SidebarNavigation } from "../sideBarNavigation";
import { MainContent } from "./mainContent";

export default function HomePage() {
    // 19 % for expanded sidebar, 6 % for collapsed sidebar

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "134px",
                "@media (max-width: 991px)": {
                    maxWidth: "100%",
                },
            }}
        >
            <SidebarNavigation />
            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    bgcolor: '#FFF',
                    '@media (max-width: 991px)': {
                        marginLeft: '0',
                        width: '100%',
                        pt: 0, // Reset padding for smaller screens
                        maxWidth: '100%'
                    }
                }}
            >
                <MainContent />
            </Box>

        </Box>
    );
}