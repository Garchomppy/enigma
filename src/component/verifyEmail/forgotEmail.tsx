import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Link,
    Container,
    Card,
    CardContent,
    CardActions,
    Chip,
    Divider,
    Snackbar,
    Alert,
    Stack,
} from '@mui/material';
import LogoHeader from '../logoHeader';
import { Email as EmailIcon, ContentCopy as CopyIcon, Lock } from '@mui/icons-material';

export function ForgotEmail() {
    // State for Snackbar visibility
    const [open, setOpen] = useState(false);

    // Verification URL
    const verificationUrl =
        'https://secure.gameboost.com/verify/user/abc123xyz789xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

    // Function to shorten URL
    const shortenUrl = (url: string, maxLength = 50) => {
        if (url.length <= maxLength) return url;
        return `${url.substring(0, maxLength - 3)}...`; // Truncate and add ellipsis
    };

    // Function to handle copy to clipboard
    const handleCopyLink = () => {
        navigator.clipboard.writeText(verificationUrl);
        setOpen(true); // Show Snackbar on copy
    };

    // Handle Snackbar close
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
        >
            <Card
                sx={{
                    maxWidth: 500,
                    borderRadius: 3,
                    mb: 2,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    bgcolor: '#FFFFFF', // Replaced background.paper with #FFFFFF
                }}
            >
                <LogoHeader />
                <Divider
                    sx={{
                        mt: 1,
                        mb: 1,
                        width: '100%',
                        display: {
                            lg: 'block',
                            sm: 'block',
                        },
                    }}
                />

                <CardContent sx={{ textAlign: 'center' }}>
                    {/* Icon and Title */}
                    <Box sx={{ mb: 2 }}>
                        <Lock sx={{ fontSize: 40, color: '#2494B6' }} /> {/* Replaced primary.main with #2494B6 */}
                        <Typography
                            sx={{
                                fontSize: '28px', // From theme.typography.h3
                                lineHeight: '32px',
                                fontWeight: 600,
                                fontFamily: 'Inter, sans-serif',
                                mt: 1,
                                color: '#101828', // Replaced text.primary with #101828
                            }}
                        >
                            Forgot Your Password?
                        </Typography>
                    </Box>

                    {/* Greeting Message */}
                    <Typography
                        sx={{
                            fontSize: '16px', // From theme.typography.body1
                            lineHeight: '24px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#475467', // Replaced text.secondary with #475467
                            mb: 3,
                        }}
                    >
                        It seems like you forgot your account password. If this is true, click below to reset your password.
                    </Typography>

                    {/* Chip for Time Limit */}
                    <Chip
                        label="Link expires in 1 hour"
                        color="warning"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                    />

                    {/* Verification Button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#2494B6', // Replaced color="primary" with #2494B6
                            color: '#FFFFFF', // Default text color for contained button
                            textTransform: 'none', // From theme.components.MuiButton.styleOverrides.root
                            borderRadius: '8px', // From theme.components.MuiButton.styleOverrides.root
                            padding: '10px 16px',
                            fontWeight: 600,
                            boxShadow: 'none', // From theme.components.MuiButton.styleOverrides.contained
                            py: 1.5,
                            fontSize: '1rem',
                            width: '100%',
                            '&:hover': {
                                backgroundColor: '#217799', // Replaced primary.dark with #217799
                            },
                        }}
                        href={verificationUrl}
                        target="_blank"
                    >
                        Reset a New Password
                    </Button>

                    <Typography
                        sx={{
                            fontSize: '16px', // From theme.typography.body1
                            lineHeight: '24px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#475467', // Replaced text.secondary with #475467
                            mt: 3,
                        }}
                    >
                        If you did not forget your password, you can safely ignore this email.
                    </Typography>
                </CardContent>

                {/* Alternative URL Copy Option */}
                <CardContent sx={{ bgcolor: '#EFFBFC', py: 2 }}> {/* Replaced primary.light with #EFFBFC */}
                    <Typography
                        sx={{
                            fontSize: '14px', // From theme.typography.body2
                            lineHeight: '20px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#475467', // Replaced text.secondary with #475467
                            mb: 1,
                            justifySelf: 'center',
                        }}
                    >
                        Can't click the button above? Copy it below:
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <Typography
                            sx={{
                                fontSize: '14px', // From theme.typography.body2
                                lineHeight: '20px',
                                fontFamily: 'Inter, sans-serif',
                                color: '#2494B6', // Replaced primary.main with #2494B6
                                wordBreak: 'break-word',
                                maxWidth: '80%',
                            }}
                        >
                            {shortenUrl(verificationUrl)}
                        </Typography>
                        <Button
                            size="small"
                            startIcon={<CopyIcon />}
                            onClick={handleCopyLink}
                            sx={{
                                textTransform: 'none', // From theme.components.MuiButton.styleOverrides.root
                                borderRadius: '8px',
                                padding: '10px 16px',
                                fontWeight: 600,
                                color: '#2494B6', // Replaced primary.main with #2494B6
                            }}
                        >
                            Copy
                        </Button>
                    </Stack>
                </CardContent>

                {/* Support Section */}
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Typography
                        sx={{
                            fontSize: '14px', // From theme.typography.body2
                            lineHeight: '20px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#475467', // Replaced text.secondary with #475467
                        }}
                    >
                        Need help?{' '}
                        <Link
                            href="https://support.gameboost.com"
                            target="_blank"
                            underline="hover"
                            sx={{ color: '#2494B6' }} // Replaced primary.main with #2494B6
                        >
                            Contact help@enigma.com
                        </Link>
                    </Typography>
                </CardActions>
            </Card>

            {/* Snackbar for copy confirmation */}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="success"
                    sx={{
                        width: '100%',
                        borderRadius: 4,
                    }}
                    onClose={handleClose}
                >
                    URL copied successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
}