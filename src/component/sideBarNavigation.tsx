"use client";
import * as React from "react";
import { useState } from "react";
import LogoHeader from "./logoHeader";
import { JustLogoHeader } from "./logoHeader";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    InputBase,
    Paper,
    Divider,
    Button,
    useTheme,
    Avatar,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { Search } from "@mui/icons-material";

export const SidebarNavigation = () => {
    const theme = useTheme();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [role, setRole] = useState("user"); // State to track user role ("user" or "admin")

    const handleSignUp = () => {
        setIsSignedUp(true);
    };

    const handleSignOut = () => {
        setIsSignedUp(false);
        setRole("user"); // Reset role to user on sign out
    };

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    // Toggle role for demonstration (replace with actual auth logic)
    const toggleRole = () => {
        setRole((prev) => (prev === "user" ? "admin" : "user"));
    };

    // Menu items for user role
    const userMenuItems = [
        { text: "Home", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24} /> },
        { text: "Saved Job", icon: <Image src="/bagicon.svg" alt="saved job" width={24} height={24} /> },
        { text: "Resume", icon: <Image src="/mail.svg" alt="resume" width={24} height={24} /> },
        {
            text: "Career Tool",
            icon: <Image src="/tool.svg" alt="career tool" width={24} height={24} />,
            icons: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
        {
            text: "Development",
            icon: <Image src="/development.svg" alt="development" width={24} height={24} />,
            icons: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
        {
            text: "Profile",
            icon: <Image src="/profile.svg" alt="profile" width={24} height={24} />,
            icons: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
    ];

    // Menu items for admin role
    const adminMenuItems = [
        { text: "Dashboard", icon: <Image src="/dashboard.svg" alt="dashboard" width={24} height={24} /> },
        { text: "User", icon: <Image src="/user.svg" alt="manage users" width={24} height={24} /> },
        { text: "Jobs", icon: <Image src="/job.svg" alt="manage jobs" width={24} height={24} /> },
        {
            text: "Media",
            icon: <Image src="/media.svg" alt="media" width={24} height={24} />,
            icons: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} style={{ display: 'none' }} />,
        },
    ];

    // Footer items
    const footerItems = [
        { text: "About us", icon: <Image src="/infor.svg" alt="about us" width={24} height={24} /> },
        { text: "Support", icon: <Image src="/support.svg" alt="support" width={24} height={24} /> },
        {
            text: "Setting",
            icon: <Image src="/setting.svg" alt="setting" width={24} height={24} />,
            icons: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
    ];

    // Filter footer items based on role
    const displayedFooterItems = role === "admin"
        ? [footerItems[2]] // Show only "Setting" for admin
        : [footerItems[0], footerItems[1]]; // Show "About us" and "Support" for user

    // Select menu items based on role
    const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

    return (
        <Box
            sx={{
                flexShrink: 0,
                borderRight: `1px solid ${theme.palette.divider}`,
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                backgroundColor: theme.palette.background.paper,
                width: isCollapsed ? "6%" : "19%",
                transition: "width 0.3s ease, top 0.3s ease, max-height 0.3s ease",
                willChange: "top, max-height, width",
                "@media (max-width: 991px)": {
                    display: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isCollapsed ? "center" : "space-between",
                    alignItems: "center",
                    p: isCollapsed ? 2 : 0,
                    transition: "padding 0.7s ease",
                }}
            >
                {isCollapsed ? <JustLogoHeader /> : <LogoHeader />}
                {!isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            position: "absolute",
                            left: "17.5%",
                            border: "1px solid #D0D5DD",
                            borderRadius: "50%",
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/showbar.svg" alt="collapse" width={24} height={24} />
                    </IconButton>
                )}
                {isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            position: "absolute",
                            left: "4.5%",
                            border: "1px solid #D0D5DD",
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/showbar1.svg" alt="expand" width={24} height={24} />
                    </IconButton>
                )}
            </Box>

            {!isCollapsed && (
                <Box sx={{ px: 2, mt: 2 }}>
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 2,
                        }}
                    >
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                        <IconButton sx={{ bgcolor: "#2494B6", color: "white", p: 0.7, m: 0.5 }}>
                            <Search />
                        </IconButton>
                    </Paper>
                </Box>
            )}
            {isCollapsed && (
                <Box sx={{ px: 2 }}>
                    <IconButton sx={{ bgcolor: "#2494B6", color: "white", p: 1.5, m: 0.5 }}>
                        <Search />
                    </IconButton>
                </Box>
            )}

            <List sx={{ mt: isCollapsed ? 1 : 2 }}>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: 2,
                            my: 1,
                            mx: isCollapsed ? 0 : 1,
                            justifyContent: isCollapsed ? "center" : "flex-start",
                        }}
                    >
                        <ListItemIcon sx={{ color: "#344054", minWidth: isCollapsed ? 0 : 40 }}>
                            {item.icon}
                        </ListItemIcon>
                        {!isCollapsed && (
                            <>
                                <ListItemText primary={item.text} sx={{ color: "#344054" }} />
                                {item.icons && (
                                    <ListItemIcon sx={{ color: "#344054", minWidth: 0 }}>
                                        {item.icons}
                                    </ListItemIcon>
                                )}
                            </>
                        )}
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{ mt: isCollapsed ? 7 : 7, flexGrow: 2 }}>
                <List>
                    {displayedFooterItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                borderRadius: 2,
                                my: 1,
                                mx: isCollapsed ? 0 : 1,
                                justifyContent: isCollapsed ? "center" : "flex-start",
                            }}
                        >
                            <ListItemIcon sx={{ color: "#344054", minWidth: isCollapsed ? 0 : 40 }}>
                                {item.icon}
                            </ListItemIcon>

                            {!isCollapsed && (
                                <>
                                    <ListItemText primary={item.text} sx={{ color: "#344054" }} />
                                    {item.icons && (
                                        <ListItemIcon sx={{ color: "#344054", minWidth: 0 }}>
                                            {item.icons}
                                        </ListItemIcon>
                                    )}
                                </>
                            )}
                        </ListItemButton>
                    ))}
                </List>

                {!isCollapsed && <Divider sx={{ m: 3 }} />}

                {!isCollapsed ? (
                    !isSignedUp ? (
                        <Box sx={{ mt: 2, m: 2 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ mb: 1, bgcolor: "#2494B6" }}
                                onClick={handleSignUp}
                            >
                                Sign up
                            </Button>
                            <Button variant="outlined" fullWidth>
                                Sign in
                            </Button>
                            {/* Button to toggle role for testing */}
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ mt: 1 }}
                                onClick={toggleRole}
                            >
                                Switch to {role === "user" ? "Admin" : "User"} Role
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                m: 2,
                                borderRadius: 1,
                            }}
                        >
                            <Avatar alt="Olivia Rhye" src="/Avatar.png" sx={{ width: 40, height: 40 }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle1" color="#101828" sx={{ fontWeight: 600 }}>
                                    Olivia Rhye
                                </Typography>
                                <Typography variant="body2" color="#475467">
                                    olivia@untitledui.com
                                </Typography>
                            </Box>
                            <IconButton size="small" sx={{ color: "#4B5E7D" }} onClick={handleSignOut}>
                                <Image src="/exit.svg" alt="exit" width={24} height={24} />
                            </IconButton>
                        </Box>
                    )
                ) : (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Avatar alt="Olivia Rhye" src="/Avatar.png" sx={{ width: 40, height: 40 }} />
                    </Box>
                )}
            </Box>
        </Box>
    );
};