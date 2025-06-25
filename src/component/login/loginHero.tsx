"use client";
import * as React from "react";
import { Box, Typography, IconButton, Stack } from '@mui/material';

export function LoginHero() {
    const images = [
        'https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/6f20382ab67e61a198aff83ce7a85cea38a0370c?placeholderIfAbsent=true',
        'https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/6f20382ab67e61a198aff83ce7a85cea38a0370c?placeholderIfAbsent=true',
        'https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/6f20382ab67e61a198aff83ce7a85cea38a0370c?placeholderIfAbsent=true',
        // Thêm các URL hình ảnh khác
    ];
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Chuyển đổi sau 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [images.length]);

    return (
        <Box
            component="section"
            sx={{
                minWidth: { xs: '100%', md: '640px' },
                overflow: 'hidden',
                flex: 1,
                '@media (max-width: 1025px)': {
                    display: 'none', // Ẩn hoàn toàn phần quảng bá trên tablet
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '960px',
                    width: '100%',
                }}
            >
                <Box
                    component="img"
                    src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/043964e9161936deeb9f1910f5ad833f37d65e1c?placeholderIfAbsent=true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '960px',
                        width: '100%',
                        px: { xs: 2, md: 8 },
                        py: { xs: 2, md: 5.375 },
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute', // Đặt carousel ở vị trí absolute để phủ toàn bộ
                            inset: 0,
                            height: '100%',
                            width: '100%',
                            zIndex: 1, // Đảm bảo carousel hiển thị phía trước
                        }}
                    >
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={src}
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderBottomLeftRadius: '8%',
                                    opacity: index === currentImage ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                }}
                            />
                        ))}
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '20px',
                            bgcolor: 'rgba(215, 215, 215, 0.20)',
                            minHeight: '874px',
                            width: '100%',
                            pt: { xs: '100px', md: '540px' },
                            px: 2.5,
                            zIndex: 2, // Đảm bảo carousel hiển thị phía trước
                        }}
                    >
                        <Box
                            component="img"
                            src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/b28ea6e4018f9d015daab410abc04678acc5173f?placeholderIfAbsent=true"
                            sx={{
                                width: '100%',
                                maxWidth: '552px',
                                objectFit: 'contain',
                            }}
                        />
                        <Stack spacing={4} sx={{ mt: 4, color: '#FFF' }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '40px', md: '60px' },
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    letterSpacing: '-1.2px',
                                }}
                            >
                                Welcome back!
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                }}
                            >
                                Log in to access suitable positions, track your application status, and connect with top employers. 85% of active users receive interview invitations within the first month
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}