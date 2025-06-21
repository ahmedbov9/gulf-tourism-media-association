import {
  Box,
  Container,
  Typography,
  Card,
  useTheme,
  TextField,
  Button,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone fontSize="large" />,
      title: 'الهاتف',
      details: ['+966 11 234 5678', '+971 4 567 8901'],
      color: theme.palette.primary.main,
    },
    {
      icon: <Email fontSize="large" />,
      title: 'البريد الإلكتروني',
      details: ['info@gtma.org', 'media@gtma.org'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: 'المكاتب',
      details: [
        'الرياض، المملكة العربية السعودية',
        'دبي، دولة الإمارات العربية المتحدة',
      ],
      color: theme.palette.success.main,
    },
    {
      icon: <AccessTime fontSize="large" />,
      title: 'ساعات العمل',
      details: ['الأحد - الخميس: 8:00 ص - 5:00 م', 'الجمعة - السبت: مغلق'],
      color: theme.palette.warning.main,
    },
  ];

  const socialMedia = [
    { icon: <Facebook />, name: 'Facebook', color: '#1877F2' },
    { icon: <Twitter />, name: 'Twitter', color: '#1DA1F2' },
    { icon: <LinkedIn />, name: 'LinkedIn', color: '#0A66C2' },
    { icon: <Instagram />, name: 'Instagram', color: '#E4405F' },
  ];

  return (
    <>
      <Navbar />
      <Box>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
              py: { xs: 8, md: 12 },
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 30% 70%, ${theme.palette.primary.main}10 0%, transparent 50%)`,
                zIndex: 0,
              },
            }}
          >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    mb: 3,
                  }}
                >
                  تواصل معنا
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما يتعلق
                  بالإعلام السياحي في منطقة الخليج والعالم العربي
                </Typography>
              </motion.div>
            </Container>
          </Box>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: {
                      xs: '1 1 100%',
                      sm: '1 1 calc(50% - 16px)',
                      md: '1 1 calc(25% - 24px)',
                    },
                    minWidth: '250px',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        height: '100%',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${info.color}10, ${theme.palette.background.paper})`,
                        border: `2px solid ${info.color}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 20px 40px ${info.color}30`,
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`,
                            color: 'white',
                            mb: 3,
                            boxShadow: `0 10px 30px ${info.color}40`,
                          }}
                        >
                          {info.icon}
                        </Box>
                      </motion.div>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2,
                        }}
                      >
                        {info.title}
                      </Typography>

                      {info.details.map((detail, detailIndex) => (
                        <Typography
                          key={detailIndex}
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Container>
        </motion.div>

        {/* Contact Form and Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{ backgroundColor: theme.palette.background.default, py: 8 }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 6,
                }}
              >
                {/* Contact Form */}
                <Box sx={{ flex: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}05)`,
                        boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 3,
                          textAlign: 'center',
                        }}
                      >
                        أرسل لنا رسالة
                      </Typography>

                      <Box component="form" onSubmit={handleSubmit}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: { xs: 'column', sm: 'row' },
                              gap: 3,
                            }}
                          >
                            <TextField
                              fullWidth
                              label="الاسم الكامل"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '12px',
                                },
                              }}
                            />

                            <TextField
                              fullWidth
                              label="البريد الإلكتروني"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '12px',
                                },
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: { xs: 'column', sm: 'row' },
                              gap: 3,
                            }}
                          >
                            <TextField
                              fullWidth
                              label="رقم الهاتف"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '12px',
                                },
                              }}
                            />

                            <TextField
                              fullWidth
                              label="الموضوع"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '12px',
                                },
                              }}
                            />
                          </Box>

                          <TextField
                            fullWidth
                            label="الرسالة"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                              },
                            }}
                          />

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              startIcon={<Send />}
                              sx={{
                                width: '100%',
                                py: 1.5,
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                gap: 2,
                                fontWeight: 600,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                '&:hover': {
                                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                                },
                              }}
                            >
                              إرسال الرسالة
                            </Button>
                          </motion.div>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>

                {/* Map and Additional Info */}
                <Box sx={{ flex: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Map Placeholder */}
                    <Paper
                      sx={{
                        p: 4,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.secondary.main}05)`,
                        boxShadow: `0 20px 40px ${theme.palette.secondary.main}20`,
                        mb: 4,
                        textAlign: 'center',
                        minHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <LocationOn
                        sx={{
                          fontSize: '4rem',
                          color: theme.palette.primary.main,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 1,
                        }}
                      >
                        موقعنا على الخريطة
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                        }}
                      >
                        ستجدوننا في قلب المراكز التجارية الرئيسية
                      </Typography>
                    </Paper>

                    {/* Social Media */}
                    <Paper
                      sx={{
                        p: 4,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.success.main}05)`,
                        boxShadow: `0 20px 40px ${theme.palette.success.main}20`,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 3,
                          textAlign: 'center',
                        }}
                      >
                        تابعونا على وسائل التواصل
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        {socialMedia.map((social, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <IconButton
                              sx={{
                                width: 60,
                                height: 60,
                                background: `${social.color}15`,
                                color: social.color,
                                border: `2px solid ${social.color}30`,
                                '&:hover': {
                                  background: social.color,
                                  color: 'white',
                                  boxShadow: `0 10px 30px ${social.color}50`,
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {social.icon}
                            </IconButton>
                          </motion.div>
                        ))}
                      </Box>

                      <Divider sx={{ my: 3 }} />

                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 2,
                          }}
                        >
                          أو تواصلوا معنا مباشرة
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                          }}
                        >
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Button
                              variant="outlined"
                              startIcon={<Phone />}
                              sx={{
                                borderRadius: '25px',
                                gap: 2,
                                px: 3,
                              }}
                            >
                              اتصل بنا
                            </Button>
                          </motion.div>

                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Button
                              variant="outlined"
                              startIcon={<Email />}
                              sx={{
                                borderRadius: '25px',
                                gap: 2,
                                px: 3,
                              }}
                            >
                              راسلنا
                            </Button>
                          </motion.div>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  textAlign: 'center',
                  mb: 6,
                }}
              >
                الأسئلة الشائعة
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              {[
                {
                  question: 'كيف يمكنني الانضمام إلى الجمعية؟',
                  answer:
                    'يمكنكم التقديم للعضوية من خلال ملء النموذج الإلكتروني أو زيارة مكاتبنا مباشرة.',
                },
                {
                  question: 'ما هي شروط العضوية؟',
                  answer:
                    'العمل في مجال الإعلام السياحي أو القطاعات ذات الصلة مع خبرة لا تقل عن سنتين.',
                },
                {
                  question: 'هل تقدمون دورات تدريبية؟',
                  answer:
                    'نعم، نقدم دورات تدريبية متخصصة في الإعلام السياحي والتسويق الرقمي.',
                },
                {
                  question: 'كيف يمكنني الحصول على الدعم؟',
                  answer:
                    'يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكاتبنا.',
                },
              ].map((faq, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: {
                      xs: '1 1 100%',
                      md: '1 1 calc(50% - 16px)',
                    },
                    minWidth: '300px',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: '15px',
                        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}05)`,
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 15px 30px ${theme.palette.primary.main}20`,
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 2,
                        }}
                      >
                        {faq.question}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Container>
        </motion.div>
      </Box>
    </>
  );
}
