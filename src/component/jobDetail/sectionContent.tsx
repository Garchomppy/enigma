import { FunctionComponent, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Divider,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    ListItemIcon
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import {
    Share,
} from "@mui/icons-material";
import TagChips from "../badge";

const SectionContent: FunctionComponent = () => {
    const tagss = ['ERP/CRM Systems', 'Fintech', 'Documentation Skills'];

    const currentDate = new Date();

    const [showMore, setShowMore] = useState(false);
    const [showMoreJob, setShowMoreJob] = useState(false);

    const jobs = [
        {
            img: './moreJob.png',
            title: 'Delivery Manager',
            deadline: 'May 31, 2025',
            applicants: 11,
            salary: '$60.00 - $70.00 Per Hour',
            tags: ['Agile Delivery', 'Innovation Management', 'Team Leadership'],
        },
        {
            img: './moreJob1.png',
            title: 'Advanced IT Security Engineer',
            deadline: 'June 5, 2025',
            applicants: 15,
            salary: '$55.00 - $65.00 Per Hour',
            tags: ['Cybersecurity', 'Risk Assessment', 'Security Protocols'],
        },
        {
            img: './moreJob2.png',
            title: 'Infrastructure Project Manager',
            deadline: 'June 10, 2025',
            applicants: 11,
            salary: '$50.00 - $60.00 Per Hour',
            tags: ['Project Management', 'Infrastructure Planning', 'Stakeholder Communication'],
        },
        {
            img: "/moreJob2.png",
            title: "Infrastructure Project Manager",
            deadline: "June 10, 2025",
            applicants: 11,
            salary: "$50.00 - $60.00 Per Hour",
            tags: ["Project Management", "Infrastructure Planning", "Stakeholder Communication"],
        },
    ];
    const displayedJobs = showMoreJob ? jobs : jobs.slice(0, 2);

    return (

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2, }}>
            {/* Job Details Section */}
            <Box>
                <Card sx={{ borderRadius: 4, boxShadow: 'none', }}>
                    <CardMedia
                        component="img"
                        height="291"
                        image="bannerJobDetail.svg"
                        alt="Job Banner"
                        sx={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                    <CardContent>
                        {/* Company Info */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                py: 2,
                                borderBottom: "1px solid #f2f4f7",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                                <img src="/logoCompany.svg" alt="Company Logo" style={{ width: 43 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight={500}>
                                        KBTG SELL
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        KASIKORN Group, Inc.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <IconButton size="medium">
                                    <MoreVertIcon fontSize="medium" />
                                </IconButton>
                                <IconButton>
                                    <Image src="/bookmark.svg" alt="" height={24} width={24} />
                                </IconButton>
                                <IconButton>
                                    <Image src="/share.png" alt="" height={24} width={24} />
                                </IconButton>
                            </Box>
                        </Box>
                        {/* Job Title and Apply Button */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', gap: 2, mt: 2, }}>
                            <Typography variant="h5" fontWeight={600}>
                                Senior Business Analyst (Blockchain)
                            </Typography>
                            <Button
                                variant="contained"
                                startIcon={<Share />}
                                sx={{
                                    borderRadius: 2,
                                    background: "linear-gradient(94.87deg, #81cce3, #0675a1 76.92%)",
                                    textTransform: "none",
                                }}
                            >
                                Apply Now
                            </Button>
                        </Box>
                        <Typography variant="body2" color="#6941c6" mt={1}>
                            Submission deadline May 31, 2025 • 21 applicants
                        </Typography>

                        {/* Job Metadata */}
                        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Image src="wallet.svg" alt="wallet" width={24} height={24} />
                                <Typography variant="body2">$60.00 - $70.00 Per Hour</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Image src="location1.svg" alt="location" width={24} height={24} />
                                <Typography variant="body2">Din Daeng, Bangkok</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Image src="clock.svg" alt="time" width={24} height={24} />
                                <Typography variant="body2">Full time</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Image src="bagBlack.svg" alt="experiment" width={24} height={24} />
                                <Typography variant="body2">2 years</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                <TagChips tags={tagss} salary="" showSalary={false} />
                            </Stack>

                        </Box>
                    </CardContent>
                    <Box
                        sx={{
                            // width: isCollapsed ? "6%" : "19%",
                            justifySelf: 'flex-end',
                            position: 'absolute',
                            top: '160%',
                            left: '73%',
                            borderRadius: '12px',
                            backgroundColor: '#d9d9d9',
                            height: 80,
                        }}
                    />
                    {/* Job Summary and Responsibilities */}
                    <CardContent sx={{ bgcolor: '#fff', borderTop: '3px solid #f2f4f7' }}>

                        <Typography fontWeight={600} fontSize="20px" lineHeight="30px">
                            Job Summary
                        </Typography>

                        <Typography variant="body1" color="#475467" mt={1}>
                            We are seeking a highly skilled Senior Business Analyst (Blockchain) to join our dynamic team in Bangkok.
                            You will serve as the bridge between our blockchain product team and business stakeholders. This role is
                            ideal for a tech-savvy, business-oriented analyst who understands both decentralized technologies and
                            enterprise needs.
                        </Typography>

                        {/* Key Responsibilities */}
                        {(showMore || !showMore) && ( // Always visible in this case, but can be adjusted
                            <>
                                <Typography fontWeight={600} fontSize="20px" lineHeight="30px" mt={2}>
                                    Key Responsibilities
                                </Typography>
                                <List>
                                    {[
                                        "Analyze and document blockchain-based business requirements (smart contracts, tokenomics, DeFi features)",
                                        "Collaborate with product managers, developers, and designers to define user stories and technical specifications",
                                        "Conduct stakeholder interviews and workshops across multiple departments",
                                        "Facilitate backlog grooming and sprint planning with Agile teams",
                                        "Lead UAT (User Acceptance Testing) and support QA team in test case creation",
                                        "Monitor and evaluate performance metrics to ensure product-market fit",
                                    ].slice(0, showMore ? undefined : 6) // Show only 2 items initially
                                        .map((item, index) => (
                                            <ListItem
                                                key={index}
                                                sx={{
                                                    py: 0.5,
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: '15px',
                                                        alignSelf: 'flex-start',
                                                        mt: '6px',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            backgroundColor: '#475467',
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    sx={{
                                                        m: 0,
                                                        '& .MuiListItemText-primary': {
                                                            fontSize: '16px',
                                                            lineHeight: '24px',
                                                            color: '#475467',
                                                            fontFamily: 'Inter, sans-serif',
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                </List>
                            </>
                        )}

                        {/* Required Qualifications (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography fontWeight={600} fontSize="20px" lineHeight="30px" mt={2}>
                                    Required Qualifications
                                </Typography>
                                <List>
                                    {[
                                        "Bachelor's degree or higher in Business, IT, or related fields",
                                        "4+ years of experience as a Business Analyst (with at least 1–2 years in Blockchain or Web3)",
                                        "Understanding of Ethereum, smart contracts, tokens, wallets, Layer 2s",
                                        "Strong communication and stakeholder management skills",
                                        "Familiar with Agile/Scrum methodology and tools (Jira, Confluence)",
                                        "English proficiency required; Thai language is a plus",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '15px',
                                                    alignSelf: 'flex-start',
                                                    mt: '6px',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#475467',
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    '& .MuiListItemText-primary': {
                                                        fontSize: '16px',
                                                        lineHeight: '24px',
                                                        color: '#475467',
                                                        fontFamily: 'Inter, sans-serif',
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* Preferred Skills (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography fontWeight={600} fontSize="20px" lineHeight="30px" mt={2}>
                                    Preferred Skills
                                </Typography>
                                <List>
                                    {[
                                        "Experience in fintech, DeFi, or crypto exchanges",
                                        "Knowledge of tokenomics and regulatory requirements in Southeast Asia",
                                        "Certification in CBAP or Agile BA is a plus",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '15px',
                                                    alignSelf: 'flex-start',
                                                    mt: '6px',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#475467',
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    '& .MuiListItemText-primary': {
                                                        fontSize: '16px',
                                                        lineHeight: '24px',
                                                        color: '#475467',
                                                        fontFamily: 'Inter, sans-serif',
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* Benefits (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography fontWeight={600} fontSize="20px" lineHeight="30px" mt={2}>
                                    Benefits
                                </Typography>
                                <List>
                                    {[
                                        "Competitive salary and token-based bonuses",
                                        "Remote work flexibility (hybrid model)",
                                        "Annual leave + Thai national holidays",
                                        "Health insurance + wellness programs",
                                        "Learning & development budget",
                                        "Opportunity to work on cutting-edge Web3 products",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: '15px',
                                                    alignSelf: 'flex-start',
                                                    mt: '6px',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#475467',
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    '& .MuiListItemText-primary': {
                                                        fontSize: '16px',
                                                        lineHeight: '24px',
                                                        color: '#475467',
                                                        fontFamily: 'Inter, sans-serif',
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* How to Apply (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography fontWeight={600} fontSize="20px" lineHeight="30px" mt={2}>
                                    How to Apply
                                </Typography>
                                <List sx={{ margin: 0 }}>
                                    {/* Combined item: "Click 'Apply Now' or submit your resume..." with email */}
                                    <ListItem
                                        sx={{
                                            py: 0.5,
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '15px',
                                                alignSelf: 'flex-start',
                                                mt: '6px',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#475467',
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography variant="body1" sx={{ color: '#475467' }}>
                                                            Click “
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                textDecoration: 'underline',
                                                                fontWeight: 600,
                                                                color: '#2494b6',
                                                            }}
                                                        >
                                                            Apply Now
                                                        </Typography>
                                                        <Typography variant="body1" sx={{ color: '#475467' }}>
                                                            ” or submit your resume and portfolio to:
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <img
                                                            alt=""
                                                            src="email.svg"
                                                            style={{
                                                                width: '20px',
                                                                maxHeight: '100%',
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: '16px',
                                                                lineHeight: '24px',
                                                                color: '#475467',
                                                                fontFamily: 'Inter, sans-serif',
                                                            }}
                                                        >
                                                            careers@yourcompany.com
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            sx={{
                                                m: 0,
                                                '& .MuiListItemText-primary': {
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    color: '#475467',
                                                },
                                            }}
                                        />
                                    </ListItem>

                                    {/* Deadline */}
                                    <ListItem
                                        sx={{
                                            py: 0.5,
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '15px',
                                                alignSelf: 'flex-start',
                                                mt: '6px',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#475467',
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Submission deadline June 30, 2025"
                                            sx={{
                                                m: 0,
                                                '& .MuiListItemText-primary': {
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    color: '#475467',
                                                    fontFamily: 'Inter, sans-serif',
                                                },
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </>
                        )}
                    </CardContent>

                    <Divider />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                        <Typography variant="body1" fontWeight={600} sx={{ color: '#217799' }}>
                            {showMore ? 'Show less' : 'Show more'}
                        </Typography>
                        <IconButton sx={{ color: '#217799' }} onClick={() => setShowMore(!showMore)}>
                            {showMore ? <Image src="/showless.svg" alt="" height={20} width={20} /> : <Image src="/showMore.svg" alt="" height={24} width={24} />}
                        </IconButton>
                    </Box>
                </Card>
            </Box>

            {/* More Jobs Section */}
            <Card sx={{ borderRadius: 4, boxShadow: 'none', }}>
                <CardContent>
                    <Typography fontSize={"20px"} lineHeight={"30px"} fontWeight={600}>
                        More jobs
                    </Typography>
                </CardContent>

                <Box sx={{
                    px: 2, display: "flex", flexDirection: "column", gap: 2
                }}>
                    {displayedJobs.map((job, index) => {
                        const deadlineDate = new Date(job.deadline);
                        const isExpired = deadlineDate < currentDate;

                        return (
                            <Card
                                key={index}
                                sx={{ display: 'flex', gap: 2, p: 2, border: '1px solid #e4e7ec', borderRadius: 3 }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: '200px',
                                        height: '124px',
                                        borderRadius: 2,
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                    image={job.img}
                                    alt={`${job.title} Image`} // Fixed alt prop syntax
                                />
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' }}>
                                        <Typography fontSize={'18px'} lineHeight={'28px'} fontWeight={600}>
                                            {job.title}
                                        </Typography>
                                        <Box>
                                            <IconButton>
                                                <Image src="/bookmark.svg" alt="Bookmark Job" height={24} width={24} />
                                            </IconButton>
                                            <IconButton>
                                                <Image src="/share.png" alt="Share Job" height={24} width={24} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Typography variant="body2" color={isExpired ? '#d32f2f' : '#6941c6'}>
                                            Submission deadline: {job.deadline} {isExpired && '(Expired)'}
                                        </Typography>
                                        <Typography variant="body2" color={'#6941c6'}>
                                            • {job.applicants} applicants
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Image src="/wallet.svg" alt="Salary Icon" width={20} height={20} />
                                        <Typography variant="body2">{job.salary}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                        <TagChips tags={job.tags} salary="" showSalary={false} />
                                    </Stack>
                                </Box>
                            </Card>
                        );
                    })}

                    {jobs.length > 2 && (
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                <Typography variant="body1" fontWeight={600} sx={{ color: '#217799' }}>
                                    {showMoreJob ? 'Show less' : 'Show more'}
                                </Typography>
                                <IconButton sx={{ color: '#217799' }} onClick={() => setShowMoreJob(!showMoreJob)}>
                                    {showMoreJob ? (
                                        <Image src="/showless.svg" alt="Show Less" height={20} width={20} />
                                    ) : (
                                        <Image src="/showMore.svg" alt="Show More" height={24} width={24} />
                                    )}
                                </IconButton>
                            </Box>
                        </CardContent>
                    )}
                </Box>
            </Card>
        </Box >
    );
};

export default SectionContent;