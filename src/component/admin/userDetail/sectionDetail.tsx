import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Divider,
    Button,
    IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

const SectionDetail = () => {
    return (
        <Box
            sx={{
                width: '100%',
                color: '#101828',
            }}
        >
            <Box
                sx={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    padding: '0 32px',
                    gap: '24px',
                    width: '100%',
                }}
            >
                {/* Section Header */}
                <Box
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '20px',
                    }}
                >
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '16px',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            sx={{
                                alignSelf: 'stretch',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                gap: '4px',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    color: '#101828',
                                }}
                            >
                                Experience
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#475467',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                I specialise in UX/UI design, brand strategy, and Webflow development.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <IconButton>
                                <MoreVertIcon sx={{ width: '20px', height: '20px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            alignSelf: 'stretch',
                            height: '1px',
                            backgroundColor: '#e4e7ec',
                        }}
                    />
                </Box>
                {/* Details and About */}
                <Box
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        gap: { xs: '24px', md: '0' },
                        color: '#475467',
                    }}
                >
                    {/* Details */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            width: '40%'
                        }}
                    >
                        {[
                            { label: 'Date of Birth', value: '30.01.1999' },
                            { label: 'Address', value: '123 UI Street, Design City' },
                            { label: 'User ID', value: '#1425' },
                            { label: 'Role', value: 'Admin' },
                            { label: 'Email', value: 'hello@amelie.com', isButton: true },
                            { label: 'Status', value: 'Active' },
                            { label: 'Verified user', value: 'Yes' },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '40%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: '8px',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 500,
                                        color: '#475467',
                                    }}
                                >
                                    {item.label}
                                </Typography>
                                {item.isButton ? (
                                    <Button
                                        sx={{
                                            display: 'flex',
                                            gap: '6px',
                                            color: '#2494b6',
                                            textTransform: 'none',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            p: 0
                                        }}
                                        endIcon={<Image src={'/arrowsSlant.svg'} alt='' width={15} height={15} />}
                                    >
                                        {item.value}
                                    </Button>
                                ) : (
                                    <Box
                                        sx={{
                                            alignSelf: 'stretch',
                                            height: '24px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: '24px',
                                                fontWeight: 500,
                                                color: '#344054',
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>
                    {/* About */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px',
                            color: '#101828',
                            width: '60%'
                        }}
                    >
                        <Box
                            sx={{
                                alignSelf: 'stretch',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                gap: '8px',
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 500,
                                    color: '#101828',
                                }}
                            >
                                About me
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    lineHeight: '24px',
                                    color: '#475467',
                                    marginBlockStart: 0,
                                    marginBlockEnd: '16px',
                                }}
                            >
                                I'm a Product Designer based in Melbourne, Australia. I enjoy working on product design, design systems, and Webflow projects, but I don't take myself too seriously.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    lineHeight: '24px',
                                    color: '#475467',
                                    marginBlockStart: 0,
                                    marginBlockEnd: '16px',
                                }}
                            >
                                I’ve worked with some of the world’s most exciting companies, including Coinbase, Stripe, and Linear. I'm passionate about helping startups grow, improve their UX and customer experience, and to raise venture capital through good design.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    lineHeight: '24px',
                                    color: '#475467',
                                    margin: 0,
                                }}
                            >
                                My work has been featured on Typewolf, Mindsparkle Magazine, Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best Website Gallery.
                            </Typography>
                        </Box>
                        <Button
                            sx={{
                                color: '#2494b6',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                p: 0
                            }}
                        >
                            Read more
                        </Button>
                    </Box>
                </Box>
                {/* Job Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '24px',
                        mt: 3,
                        mb: 5
                    }}
                >
                    {[
                        { title: 'Lead Product Designer', company: 'ContrastAI', duration: 'May 2020 – Present' },
                        { title: 'Product Designer', company: 'Sisyphus', duration: 'Jan 2018 – May 2020' },
                        { title: 'UX Designer', company: 'Ephemeral', duration: 'Mar 2017 – Jan 2018' },
                    ].map((job, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: 1,
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                borderRadius: '12px',
                                backgroundColor: '#fff',
                                border: '1px solid #e4e7ec',
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: '320px',
                            }}
                        >
                            <Box
                                sx={{
                                    alignSelf: 'stretch',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '20px',
                                    gap: '24px',
                                }}
                            >
                                <Box
                                    sx={{
                                        alignSelf: 'stretch',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            border: '0.8px solid rgba(0, 0, 0, 0.08)',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#101828',
                                            }}
                                        >
                                            {job.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#475467',
                                            }}
                                        >
                                            {job.company}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#475467',
                                    }}
                                >
                                    {job.duration}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    alignSelf: 'stretch',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '0 0 16px',
                                    gap: '16px',
                                    color: '#2494b6',
                                }}
                            >
                                <Divider
                                    sx={{
                                        alignSelf: 'stretch',
                                        height: '1px',
                                        backgroundColor: '#e4e7ec',
                                    }}
                                />
                                <Box
                                    sx={{
                                        alignSelf: 'stretch',
                                        padding: '0 24px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            flex: 1,
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                color: '#2494b6',
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                p: 0
                                            }}
                                        >
                                            View project
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SectionDetail;