"use client";
import * as React from "react";
import { Box, useTheme } from "@mui/material";
import { SidebarNavigation } from "../sideBarNavigation";
import { MainContent } from "./mainContent";

export default function HomePage() {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "134px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    flexWrap: "wrap",
                    bgcolor: "#FFF",
                    "@media (max-width: 991px)": {
                        maxWidth: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "fixed",
                        width: "20%", // Adjust width as needed
                        overflowY: "auto", // Enable vertical scrolling
                        bgcolor: "#FFF",
                        zIndex: 1000,
                        "@media (max-width: 991px)": {
                            width: "100%", // Full width on mobile
                            position: "relative", // Disable fixed positioning on mobile
                            height: "auto", // Allow natural height on mobile
                        },
                    }}
                >
                    <SidebarNavigation />
                </Box>
                <Box
                    sx={{
                        marginLeft: "300px", // Match sidebar width
                        width: "calc(100% - 250px)", // Adjust main content width
                        "@media (max-width: 991px)": {
                            marginLeft: 0, // No offset on mobile
                            width: "100%", // Full width on mobile
                        },
                    }}
                >
                    <MainContent />
                </Box>
            </Box>
        </Box>
    );
}