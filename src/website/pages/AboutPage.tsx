import {
  Box,
  Container,
  Typography,
  Card,
  useTheme,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import {
  Groups,
  Public,
  Star,
  Timeline,
  ConnectWithoutContact,
  EmojiEvents,
  Verified,
  TrendingUp,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  const theme = useTheme();

  const stats = [
    { value: '2018', label: 'سنة التأسيس', icon: <Timeline /> },
    { value: '15+', label: 'دولة', icon: <Public /> },
    { value: '500+', label: 'عضو', icon: <Groups /> },
    { value: '200+', label: 'شريك', icon: <Star /> },
  ];

  const features = [
    {
      title: 'الشفافية المطلقة',
      description: 'نلتزم بالشفافية في جميع أعمالنا ونشاطاتنا الإعلامية',
      icon: <Verified />,
    },
    {
      title: 'التميز والجودة',
      description: 'نسعى للتميز في تقديم خدمات إعلامية سياحية عالية الجودة',
      icon: <EmojiEvents />,
    },
    {
      title: 'الشراكة الفعالة',
      description: 'نؤمن بقوة التعاون بين الإعلاميين والمؤسسات السياحية',
      icon: <ConnectWithoutContact />,
    },
    {
      title: 'النمو المستمر',
      description: 'نشجع النمو والتطور في وسائل الإعلام السياحي الحديثة',
      icon: <TrendingUp />,
    },
  ];

  return (
    <>
      <Navbar />
      <Box>
        {/* Hero Section - Asymmetric Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, 
                ${theme.palette.primary.main}15 0%, 
                ${theme.palette.secondary.main}15 25%, 
                ${theme.palette.background.default} 50%, 
                ${theme.palette.primary.main}10 75%, 
                ${theme.palette.secondary.main}20 100%)`,
              py: { xs: 6, md: 10 },
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}20 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}25 0%, transparent 50%)`,
                zIndex: 0,
              },
            }}
          >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  alignItems: 'center',
                  gap: { xs: 4, lg: 8 },
                }}
              >
                {/* Text Content */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'right' } }}>
                  <Stack
                    spacing={3}
                    alignItems={{ xs: 'center', lg: 'flex-end' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Chip
                        label="تعرف علينا"
                        sx={{
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1rem',
                          px: 3,
                          py: 1,
                          boxShadow: `0 4px 15px ${theme.palette.primary.main}40`,
                          border: '2px solid rgba(255,255,255,0.2)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: {
                            xs: '2.5rem',
                            md: '3.5rem',
                            lg: '3.5rem',
                          },
                          fontWeight: 900,
                          color: theme.palette.text.primary,
                          lineHeight: 1.1,
                          mb: 2,
                        }}
                      >
                        نحن{' '}
                        <Box
                          component="span"
                          sx={{
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontSize: {
                              xs: '2.5rem',
                              md: '3.5rem',
                              lg: '3.5rem',
                            },
                            position: 'relative',
                            display: 'inline-block',
                            animation: 'textGlow 3s ease-in-out infinite',
                            '@keyframes textGlow': {
                              '0%, 100%': {
                                textShadow: `0 0 10px ${theme.palette.primary.main}50`,
                              },
                              '50%': {
                                textShadow: `0 0 20px ${theme.palette.secondary.main}70, 0 0 30px ${theme.palette.primary.main}50`,
                              },
                            },
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -10,
                              left: 0,
                              right: 0,
                              height: 6,
                              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              borderRadius: 3,
                              animation: 'underlineGrow 2s ease-out',
                              '@keyframes underlineGrow': {
                                '0%': { width: '0%', left: '50%' },
                                '100%': { width: '100%', left: '0%' },
                              },
                            },
                          }}
                        >
                          الجمعية الخليجية
                        </Box>
                      </Typography>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.8rem', md: '2.2rem' },
                          fontWeight: 700,
                          color: theme.palette.secondary.main,
                          mb: 2,
                        }}
                      >
                        للإعلام السياحي
                      </Typography>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                          maxWidth: '600px',
                        }}
                      >
                        منظمة رائدة تسعى لتطوير وتعزيز قطاع الإعلام السياحي في
                        دول الخليج من خلال الشراكات الاستراتيجية والحلول
                        المبتكرة
                      </Typography>
                    </motion.div>
                  </Stack>
                </Box>

                {/* Visual Element */}
                <Box
                  sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: 280, md: 400 },
                        height: { xs: 280, md: 400 },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: '100%',
                          height: '100%',
                          background: `conic-gradient(from 0deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          boxShadow: `0 20px 40px ${theme.palette.primary.main}30, 0 0 60px ${theme.palette.secondary.main}20`,
                          animation:
                            'rotate 20s linear infinite, pulse 4s ease-in-out infinite',
                          border: `4px solid rgba(255,255,255,0.3)`,
                          '@keyframes rotate': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                          },
                          '@keyframes pulse': {
                            '0%, 100%': {
                              boxShadow: `0 20px 40px ${theme.palette.primary.main}30, 0 0 60px ${theme.palette.secondary.main}20`,
                            },
                            '50%': {
                              boxShadow: `0 25px 50px ${theme.palette.primary.main}50, 0 0 80px ${theme.palette.secondary.main}40`,
                            },
                          },
                          '& > svg': {
                            fontSize: { xs: '4rem', md: '6rem' },
                            color: 'white',
                            animation: 'iconFloat 3s ease-in-out infinite',
                            '@keyframes iconFloat': {
                              '0%, 100%': { transform: 'translateY(0px)' },
                              '50%': { transform: 'translateY(-10px)' },
                            },
                          },
                        }}
                      >
                        <LocationOn />
                      </Avatar>

                      {/* Floating Stats */}
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            scale: 0,
                            x: index < 2 ? -100 : 100,
                            y: index % 2 === 0 ? -50 : 50,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 1 + index * 0.2,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          style={{
                            position: 'absolute',
                            ...(index === 0 && { top: '10%', right: '-15%' }),
                            ...(index === 1 && { top: '70%', right: '-20%' }),
                            ...(index === 2 && { top: '10%', left: '-15%' }),
                            ...(index === 3 && { top: '70%', left: '-20%' }),
                            display: window.innerWidth < 960 ? 'none' : 'block',
                          }}
                        >
                          <Card
                            sx={{
                              p: 2,
                              background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}05)`,
                              border: `2px solid ${theme.palette.primary.main}30`,
                              boxShadow: `0 10px 30px ${theme.palette.primary.main}40, 0 0 20px ${theme.palette.secondary.main}20`,
                              borderRadius: '15px',
                              minWidth: 120,
                              textAlign: 'center',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <Box
                              sx={{ color: theme.palette.primary.main, mb: 1 }}
                            >
                              {stat.icon}
                            </Box>
                            <Typography variant="h6" fontWeight="bold">
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {stat.label}
                            </Typography>
                          </Card>
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* Stats Section for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: { xs: 'block', md: 'none' }, py: 4 }}>
            <Container>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card
                      sx={{
                        p: 2,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: `0 5px 15px ${theme.palette.primary.main}20`,
                        borderRadius: '12px',
                        minWidth: 100,
                        textAlign: 'center',
                      }}
                    >
                      <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h6" fontWeight="bold">
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* Mission Section - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              py: 8,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.main} 100%)`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
                             radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 60%)`,
                zIndex: 1,
              },
            }}
          >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      fontWeight: 800,
                      color: 'white',
                      mb: 3,
                      textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
                      animation: 'titleGlow 3s ease-in-out infinite',
                      '@keyframes titleGlow': {
                        '0%, 100%': {
                          textShadow:
                            '2px 2px 10px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.3)',
                        },
                        '50%': {
                          textShadow:
                            '2px 2px 10px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.5)',
                        },
                      },
                    }}
                  >
                    رسالتنا
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      color: 'rgba(255,255,255,0.95)',
                      lineHeight: 1.8,
                      maxWidth: '800px',
                      mx: 'auto',
                      fontWeight: 500,
                      textShadow: '1px 1px 5px rgba(0,0,0,0.2)',
                    }}
                  >
                    تعزيز دور الإعلام في التنمية السياحية المستدامة من خلال بناء
                    شراكات استراتيجية قوية وتطوير المحتوى الإعلامي المتخصص الذي
                    يخدم القطاع السياحي في المنطقة الخليجية والعربية
                  </Typography>
                </motion.div>
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* Features Section - Diagonal Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{ py: 10, backgroundColor: theme.palette.background.default }}
          >
            <Container maxWidth="lg">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    mb: 8,
                  }}
                >
                  ما يميزنا
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -100 : 100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: {
                          xs: 'column',
                          md: index % 2 === 0 ? 'row' : 'row-reverse',
                        },
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <motion.div whileHover={{ scale: 1.05, rotate: 2 }}>
                          <Card
                            sx={{
                              p: 6,
                              borderRadius: '30px',
                              background:
                                index % 2 === 0
                                  ? `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}10, ${theme.palette.background.paper})`
                                  : `linear-gradient(135deg, ${theme.palette.secondary.main}15, ${theme.palette.primary.main}10, ${theme.palette.background.paper})`,
                              border: `2px solid ${
                                index % 2 === 0
                                  ? theme.palette.primary.main
                                  : theme.palette.secondary.main
                              }30`,
                              boxShadow: `0 20px 40px ${
                                index % 2 === 0
                                  ? theme.palette.primary.main
                                  : theme.palette.secondary.main
                              }20`,
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              animation: 'cardHover 4s ease-in-out infinite',
                              animationDelay: `${index * 0.3}s`,
                              transition: 'all 0.3s ease',
                              '@keyframes cardHover': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-5px)' },
                              },
                            }}
                          >
                            <motion.div whileHover={{ rotate: 360 }}>
                              <Box
                                sx={{
                                  color: theme.palette.primary.main,
                                  fontSize: { xs: '3rem', md: '4rem' },
                                }}
                              >
                                {feature.icon}
                              </Box>
                            </motion.div>
                          </Card>
                        </motion.div>
                      </Box>

                      <Box
                        sx={{
                          flex: 2,
                          textAlign: { xs: 'center', md: 'right' },
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 3,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.8,
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* Vision Section - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              py: 10,
              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 30%, ${theme.palette.primary.main} 70%, ${theme.palette.primary.dark} 100%)`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
                zIndex: 1,
              },
            }}
          >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      fontWeight: 800,
                      color: 'white',
                      mb: 4,
                      textShadow: '3px 3px 15px rgba(0,0,0,0.4)',
                      animation: 'visionGlow 4s ease-in-out infinite',
                      '@keyframes visionGlow': {
                        '0%, 100%': {
                          textShadow:
                            '3px 3px 15px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.3)',
                          transform: 'scale(1)',
                        },
                        '50%': {
                          textShadow:
                            '3px 3px 15px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.6)',
                          transform: 'scale(1.02)',
                        },
                      },
                    }}
                  >
                    رؤيتنا
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.3rem', md: '1.8rem' },
                      color: 'rgba(255,255,255,0.98)',
                      lineHeight: 1.8,
                      fontWeight: 500,
                      textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    أن نكون{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'rgba(255,255,255,0.2)',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '20px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        display: 'inline-block',
                        margin: '0 0.5rem',
                      }}
                    >
                      المرجع الأول والرائد
                    </Box>{' '}
                    في مجال الإعلام السياحي في المنطقة الخليجية والعربية، ونساهم
                    في وضع المنطقة على خريطة السياحة العالمية من خلال إعلام
                    متخصص ومحتوى عالي الجودة
                  </Typography>
                </motion.div>
              </Box>
            </Container>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
