"use client";
import { FunctionComponent } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    InputAdornment,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import { CloudUpload, ArrowDropDown } from "@mui/icons-material";

const Content: FunctionComponent = () => {
    return (
        <Card sx={{ borderRadius: 4, p: 4, display: "flex", flexDirection: "column", gap: 6 }}>
            <Typography variant="h5" fontWeight={600}>
                Senior Business Analyst (Blockchain)
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Full Name */}
                <TextField
                    label="Full Name"
                    placeholder="Enter your name"
                    required
                    fullWidth
                    variant="outlined"
                    sx={{ "& .MuiInputLabel-asterisk": { color: "#236785" } }}
                />
                {/* Email and Phone Number */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <TextField
                        label="Email"
                        placeholder="Enter your email"
                        required
                        variant="outlined"
                        sx={{ flex: 1, minWidth: 200, "& .MuiInputLabel-asterisk": { color: "#236785" } }}
                    />
                    <Box sx={{ flex: 1, minWidth: 200 }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Phone number (optional)</InputLabel>
                            <Select
                                label="Phone number (optional)"
                                defaultValue="US"
                                startAdornment={<InputAdornment position="start">+1</InputAdornment>}
                            >
                                <MenuItem value="US">US</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                {/* LinkedIn Profile */}
                <TextField
                    label="LinkedIn Profile (optional)"
                    placeholder="www.linkedin.com/feed/"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                    }}
                    sx={{ bgcolor: "#f9fafb" }}
                />
                {/* Description */}
                <TextField
                    label="Description"
                    placeholder="Enter a description..."
                    required
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{ "& .MuiInputLabel-asterisk": { color: "#236785" } }}
                />
                {/* File Upload */}
                <Box>
                    <Typography variant="body1" fontWeight={500} gutterBottom>
                        Upload resume <Typography component="span" color="#236785">*</Typography>
                    </Typography>
                    <Card
                        sx={{
                            border: "1px solid #e4e7ec",
                            borderRadius: 3,
                            p: 3,
                            textAlign: "center",
                        }}
                    >
                        <CardContent>
                            <CloudUpload sx={{ fontSize: 40, mb: 1 }} />
                            <Stack spacing={0.5}>
                                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                    <Button variant="text" sx={{ textTransform: "none" }}>
                                        Click to upload Resume
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                        or drag and drop
                                    </Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    SVG, PNG, JPG or GIF (max. 800x400px)
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
                {/* Resume Dropdown */}
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Choose from your resumes</InputLabel>
                    <Select
                        label="Choose from your resumes"
                        defaultValue="Business Analyst Resume"
                        startAdornment={
                            <InputAdornment position="start">
                                <img src="Page.svg" alt="PDF" style={{ width: 20 }} />
                                <Typography variant="caption" sx={{ ml: 1 }}>
                                    PDF
                                </Typography>
                            </InputAdornment>
                        }
                    >
                        <MenuItem value="Business Analyst Resume">
                            Business Analyst Resume (200 KB)
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* Navigation Actions */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: 2, textTransform: "none", width: 148 }}
                >
                    Save draft
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        width: 148,
                        bgcolor: "#2494b6",
                        "&:hover": { bgcolor: "#1c7a99" },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Card>
    );
};

export default Content;