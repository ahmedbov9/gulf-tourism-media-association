import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Card,
  Paper,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Groups,
  Public,
  Report,
  Business,
  Event,
  Camera,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const theme = useTheme();

  const statistics = [
    { number: '500+', label: 'أعضاء الجمعية', icon: <Groups /> },
    { number: '15', label: 'دولة خليجية وعربية', icon: <Public /> },
    { number: '1000+', label: 'تقرير إعلامي', icon: <Report /> },
    { number: '200+', label: 'شركة سياحية شريكة', icon: <Business /> },
    { number: '50+', label: 'حدث سياحي', icon: <Event /> },
    { number: '300+', label: 'تغطية إعلامية', icon: <Camera /> },
  ];

  const goals = [
    {
      title: 'تعزيز التعاون',
      description:
        'تطوير التعاون بين وسائل الإعلام والقطاع السياحي في منطقة الخليج',
      icon: <Groups />,
    },
    {
      title: 'رفع الوعي',
      description: 'زيادة الوعي بأهمية الإعلام السياحي في التنمية الاقتصادية',
      icon: <Public />,
    },
    {
      title: 'دعم الإعلاميين',
      description: 'تقديم الدعم والتدريب للإعلاميين المتخصصين في السياحة',
      icon: <Report />,
    },
    {
      title: 'تبادل الخبرات',
      description: 'إتاحة الفرصة لتبادل الخبرات والمعرفة بين الأعضاء',
      icon: <Business />,
    },
    {
      title: 'تشجيع السياحة',
      description: 'الترويج للوجهات السياحية الخليجية والعربية عالمياً',
      icon: <Event />,
    },
    {
      title: 'تطوير المحتوى',
      description: 'إنتاج محتوى إعلامي عالي الجودة للترويج السياحي',
      icon: <Camera />,
    },
  ];

  return (
    <>
      <Navbar />
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: { xs: '80vh', md: '85vh' },
            display: 'flex',
            alignItems: 'center',
            background: theme.palette.background.default,
            position: 'relative',
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Box sx={{ flex: 1, maxWidth: { md: '66.666667%' } }}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    lineHeight: 1.2,
                  }}
                >
                  جمعية الخليج للإعلام السياحي
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.primary,
                    mb: 4,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  نربط بين وسائل الإعلام والسياحة لتعزيز التنمية السياحية
                  المستدامة في دول الخليج والمنطقة العربية
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/about"
                    size="large"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: theme.palette.background.paper,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    تعرف علينا أكثر
                  </Button>

                  <Button
                    component={Link}
                    to="/join-us"
                    size="large"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.primary,
                      borderColor: theme.palette.text.primary,
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    انضم إلينا
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Statistics Section */}
        <Container
          maxWidth="xl"
          sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              mb: 6,
              mt: 10,
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            إنجازاتنا بالأرقام
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {statistics.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: '1 1 100%',
                    sm: '1 1 calc(50% - 12px)',
                    md: '1 1 calc(33.333% - 16px)',
                    lg: '1 1 calc(auto - 18px)',
                  },
                  minWidth: '200px',
                }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: '#FFFFFF',
                      mb: 2,
                      fontSize: '2rem',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>

        {/* Goals Section */}
        <Box sx={{ backgroundColor: theme.palette.background.default, py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: theme.palette.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              أهدافنا الاستراتيجية
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {goals.map((goal, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 15px 30px ${theme.palette.primary.main}15`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '15px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: '#FFFFFF',
                        fontSize: '1.5rem',
                        flexShrink: 0,
                      }}
                    >
                      {goal.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2,
                        }}
                      >
                        {goal.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {goal.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Contact Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            تواصل معنا
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            <Box
              sx={{
                flex: {
                  xs: '1 1 100%',
                  md: '1 1 calc(33.333% - 21px)',
                },
                minWidth: '250px',
              }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#FFFFFF',
                    mb: 3,
                  }}
                >
                  <Phone fontSize="large" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  الهاتف
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  +966 11 234 5678
                </Typography>
                <Typography variant="body1">+971 4 567 8901</Typography>
              </Card>
            </Box>

            <Box
              sx={{
                flex: {
                  xs: '1 1 100%',
                  md: '1 1 calc(33.333% - 21px)',
                },
                minWidth: '250px',
              }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#FFFFFF',
                    mb: 3,
                  }}
                >
                  <Email fontSize="large" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  البريد الإلكتروني
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  info@gtma.org
                </Typography>
                <Typography variant="body1">media@gtma.org</Typography>
              </Card>
            </Box>

            <Box
              sx={{
                flex: {
                  xs: '1 1 100%',
                  md: '1 1 calc(33.333% - 21px)',
                },
                minWidth: '250px',
              }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 15px 30px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#FFFFFF',
                    mb: 3,
                  }}
                >
                  <LocationOn fontSize="large" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  المكاتب
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  الرياض، المملكة العربية السعودية
                </Typography>
                <Typography variant="body1">
                  دبي، دولة الإمارات العربية المتحدة
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
