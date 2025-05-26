import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton,
    Chip,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { JobTitleTypography, CompanyTypography, SalaryTypography } from '../font/typography';

// Define the props interface for better type safety
interface JobCardProps {
    image?: string;
    company?: string;
    date?: string;
    title?: string;
    description?: string;
    tags?: string[];
    salary?: string;
    onBookmarkClick?: () => void;
}

const getRandomColor = () => {
    const colors = [
        '#9E77ED', // Red
        '#6172F3', // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const JobCard: React.FC<JobCardProps> = ({
    image = 'https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/e0f19983d1fc96223a6c8b683cd1f6149e05cb54?placeholderIfAbsent=true',
    company = 'Thai Digital Solutions',
    date = '20 Jan 2025',
    title = 'Social Media Manager (KOL Specialist)(KOL Specialist)(KOL Specialist))(KOL Specialist))(KOL Specialist))(KOL Specialist)',
    description = 'Lead digital marketing strategies for a growing e-commerce platform.e-commerce platforme-commerce platforme-commerce platforme-commerce platforme-commerce platforme-commerce platforme-commerce platforme-commerce platform',
    tags = ['Marketing', 'DigitalStrategy'],
    salary = '1,500 USD',
    onBookmarkClick,
}) => (
    <Card sx={{
        width: '100%', borderRadius: 4, border: '1px solid #D0D5DD',
    }}>
        <CardMedia
            component="img"
            image={image}
            alt="Job thumbnail"
            sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ padding: 2 }}>
            <Typography
                color="#6941C6"
                variant="subtitle2"
                fontWeight="bold"
                sx={{ mb: 1 }}
            >
                {company} • {date}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1,
                }}
            >
                <JobTitleTypography
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.3rem' },
                        maxWidth: '80%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {title}
                </JobTitleTypography>
                <IconButton size="small" onClick={onBookmarkClick} aria-label="Bookmark job">
                    <ArrowOutwardIcon color='action' />
                </IconButton>

            </Box>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    mb: 2,
                    lineHeight: '1.5rem', // 24px
                    maxHeight: '4.5rem', // 3 dòng * 1.5rem
                    display: '-webkit-box', // Hỗ trợ multiline ellipsis
                    WebkitBoxOrient: 'vertical', // Hướng dọc
                    WebkitLineClamp: 3, // Giới hạn 3 dòng
                    overflow: 'hidden', // Ẩn phần dư
                    textOverflow: 'ellipsis', // Thêm "..."
                }}
            >
                {description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {tags.map((tag, index) => {
                    // Function to generate or select a random color
                    return (
                        <Chip
                            key={index}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: getRandomColor(),
                                        }}
                                    />
                                    {tag}
                                </Box>
                            }
                            size="small"
                            sx={{ paddingLeft: 0.5, backgroundColor: '#FFFFFF', border: '1px solid #D0D5DD', borderRadius: 2 }}
                        />
                    );
                })}
                <Chip label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: '#EE46BC',
                            }}
                        />
                        {salary}
                    </Box>}
                    size="small"
                    sx={{ paddingLeft: 0.5, backgroundColor: '#FFFFFF', border: '1px solid #D0D5DD', borderRadius: 2 }} />
            </Box>
        </CardContent>
    </Card >
);


const JobListPage = () => {
    // Dữ liệu mẫu
    const jobData = [
        {
            company: "Thai Digital Solutions",
            date: "20 Jan 2025",
            title: "Social Media Manager (KOL Specialist)",
            description: "Lead digital marketing strategies for a growing e-commerce platform. Develop and execute campaigns to enhance brand visibility, collaborate with Key Opinion Leaders (KOLs) to boost engagement, and optimize content for multiple social media channels.",
            tags: ["Marketing", "DigitalStrategy", "SocialMedia", "E-commerce"],
            salary: "1,500 USD",
        },
        {
            company: "GreenWave Tech",
            date: "25 May 2025",
            title: "Product Designer (UI/UX Specialist)",
            description: "Join GreenWave Tech to design intuitive and visually appealing interfaces for our sustainability-focused mobile app. Collaborate with product managers and developers to create user-centered designs and iterate on prototypes.",
            tags: ["UIUX", "ProductDesign", "UserResearch", "Sustainability"],
            salary: "2,200 USD",
        },
        {
            company: "NovaTech Innovations",
            date: "25 May 2025",
            title: "Frontend Developer (React Expert)",
            description: "Build and maintain responsive web applications for NovaTech’s AI-driven platform. Work closely with the design team to implement modern UI components and ensure seamless user experiences.",
            tags: ["Frontend", "React", "WebDevelopment", "AI"],
            salary: "2,000 USD",
        },

    ];

    const handleBookmarkClick = (jobTitle: string) => {
        console.log(`Bookmarked: ${jobTitle}`);
        // Add logic to save bookmark (e.g., to localStorage or an API)
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {Array.from({ length: Math.ceil(jobData.length / 2) }, (_, rowIndex) => (
                    <Box
                        key={rowIndex}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on larger screens
                            gap: 3,
                        }}
                    >
                        {jobData.slice(rowIndex * 3, rowIndex * 3 + 3).map((job, index) => (
                            <JobCard
                                key={index}
                                {...job}
                                onBookmarkClick={() => handleBookmarkClick(job.title!)}
                            />
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>

    );
};

export { JobListPage, JobCard };