import * as React from "react";
import { Box, ThemeProvider, useTheme } from "@mui/material";
import { SidebarNavigation } from "../../sideBarNavigation";
import { MainContent } from "./mainContent";
import Image from "next/image";
import theme from "@/component/font/theme";
export default function UserDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}>
                <SidebarNavigation />
                <MainContent />

            </Box>

        </ThemeProvider>
    );
}