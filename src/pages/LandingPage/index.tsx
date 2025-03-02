import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent,Avatar, IconButton } from '@mui/material';
import Navbar from '../../components/Navegacao';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaInstagram } from 'react-icons/fa';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import PlaceIcon from '@mui/icons-material/Place';
import MapIcon from '@mui/icons-material/Map';
import DirectionsIcon from '@mui/icons-material/Directions';
import Ingressos from '../../components/Ingressos';
import Suporte from '../../components/Suporte';
import BitcoinBrasilia from '../../components/carrossel';
import Palestrantes from '../../components/Palestrantes';
import { FaWaze } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';


const AnimatedBorder = () => (
    <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        }}
    >
        <svg width="100%" height="100%">
            <path
                d="M10 0 V100 H100 C110 100 110 110 100 110 H10 C0 110 0 120 10 120 H110"
                stroke="#E28D1C"
                strokeWidth="2"
                fill="transparent"
            />
        </svg>
    </motion.div>
);



const benefitsParticipants = [
    'Aprendizado de alto nível',
    'Criptoconexões estratégicas',
    'Networking',
    'Conforto e Organização',
    'Autógrafo de Livros e Fotografias',
    'Leitura da atual conjuntura geopolítica',
    'Esclarecimento de dúvidas com especialistas',
    'Ambiente seguro',
    'Entre outros...'
];

const benefitsSponsors = [
    'Backdrop (Painel atrás das atrações)',
    'Vídeo Institucional no telão do evento (até 1 minuto)',
    'Menção da empresa pelo mestre de cerimônias',
    'Logomarca em todos os materiais do evento (Cartazes, Panfletos)',
    'Espaço para montagem de Stand',
    'Menções, marcações e repostagens no Instagram do influenciador',
    'Menções, marcações e repostagens no Instagram do evento',
    'Vagas de estacionamento, acessos e assentos privilegiados',
    'Entre outros...'
];


const scheduleDay1 = [
    { time: '9h00 às 12:30', activity: 'Palestra' },
    { time: '12h30 às 14h', activity: 'Almoço' },
    { time: '14h às 18h', activity: 'Curso - Autocustódia' },
    { time: '18h às 20h30', activity: 'Intervalo' },
    { time: '20H30 às 23h', activity: 'Jantar' }
];

const scheduleDay2 = [
    { time: '7h às 9h30', activity: 'Café da manhã' },
    { time: '10h00 às 12h30', activity: 'Palestra' },
    { time: '12h30 às 14h', activity: 'Almoço' },
    { time: '14h às 15h30', activity: 'Mesa redonda' },
    { time: '15h30 às 16h00', activity: 'Perguntas' },
    { time: '16h00 às 21h30', activity: 'Autógrafos e Fotos' },
    { time: '22h', activity: 'Encerramento' }
];

const TimelineSchedule = ({ schedule }) => (
    <Timeline position="alternate">
        {schedule.map((item, index) => (
            <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ color: 'white' }}>
                    <Typography variant="body2">
                        <AccessTimeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        {item.time}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: '#E28D1C' }} />
                    {index < schedule.length - 1 && <TimelineConnector sx={{ backgroundColor: '#E28D1C' }} />}
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" color="white">
                        {item.activity}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
);



const LandingPage = () => {
    return (
        <Box sx={{ backgroundColor: '#4a3f24', color: '#fff', overflowX: 'hidden', minHeight: '100vh' }}>
            <Navbar />
            <Box
    sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center',
        justifyContent: 'space-between',
        height: { xs: 'auto', md: 'calc(100vh - 80px)' },
        padding: { xs: '20px', md: '0 5%' }, 
        textAlign: { xs: 'center', md: 'left' } 
    }}
>
    {/* Texto da Seção */}
    <Box id="home" sx={{ maxWidth: { xs: '100%', md: '50%' }, mb: { xs: 4, md: 0 } }}>
        <Typography
            variant="h2"
            sx={{ 
                color: '#E28D1C', 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '32px', md: '48px' } // Ajusta tamanho do título no mobile
            }}
        >
            Impulsione seu
        </Typography>
        <Typography
            variant="h2"
            sx={{ 
                color: '#fff', 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '32px', md: '48px' }
            }}
        >
            conhecimento sobre bitcoins
        </Typography>
        <Typography
            variant="body1"
            sx={{ color: '#d3d3d3', mb: 4, fontSize: { xs: '14px', md: '16px' } }}
        >
            Protegendo Seu Patrimônio na Nova Era Digital
        </Typography>
        <Box display="flex" gap={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Button
                variant="contained"
                sx={{ 
                    backgroundColor: '#E28D1C', 
                    color: '#fff', 
                    borderRadius: '20px', 
                    padding: '10px 20px', 
                    fontSize: { xs: '14px', md: '16px' }
                }}
            >
                Sobre o evento
            </Button>
            <Button
                variant="outlined"
                sx={{ 
                    color: '#fff', 
                    borderColor: '#fff', 
                    borderRadius: '20px', 
                    padding: '10px 20px',
                    fontSize: { xs: '14px', md: '16px' }
                }}
            >
                Saiba mais
            </Button>
        </Box>
    </Box>

    {/* Imagem e Ícones de Moedas */}
    <Box
        sx={{
            position: 'relative',
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {/* Moeda principal */}
        <motion.img
            src="/assets/Bitcoin.png"
            alt="Bitcoin Coin"
            style={{ 
                width: '100%', 
                maxWidth: '300px', 
                height: 'auto', 
                cursor: 'pointer' 
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
        />

        {/* Imagens orbitando */}
        {[
            { src: '/assets/imper.png', top: '-30px', left: '50px' },
            { src: '/assets/bitcoin2.png', top: '50px', left: '-80px' },
            { src: '/assets/olho.png', bottom: '20px', left: '60px' },
            { src: '/assets/bitcoin2.png', top: '-40px', right: '70px' },
            { src: '/assets/bitcoin2.png', bottom: '-10px', right: '100px' },
        ].map((image, index) => (
            <motion.img
                key={index}
                src={image.src}
                alt={`Floating Image ${index + 1}`}
                style={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    top: image.top,
                    left: image.left,
                    right: image.right,
                    bottom: image.bottom,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [10, -10, 10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
        ))}
    </Box>
</Box>

            {/* Seção Sobre o Evento com Design Atrativo */}
            <Box id="sobre" sx={{ padding: '100px 20px', backgroundColor: '#1a1a1a' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', mb: 4, textAlign:"center" }}>
                        Sobre o evento
                    </Typography>
                    <Box display="flex" gap={6}>
                    <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ maxWidth: '600px', textAlign: 'left', ml: 10 }}>
                            <Typography variant="h5" sx={{ color: '#E28D1C', mb: 2 }}>
                                Dois dias repletos de conhecimento e conexões valiosas entre entusiastas do Bitcoin e WEB3.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#fff', mb: 4 }}>
                                Aprenda com os melhores e esteja preparado para aprimorar a proteção do seu patrimônio e potencializar seus lucros.
                            </Typography>
                        </Box>
    </Box>
                        <Box flex={1} sx={{ marginLeft: '150px' }}>
                            <List>
                                {['Cursos', 'Palestras (Com especialistas em Bitcoin e WEB3)', 'Networking/Mesa Redonda', 'Análise da Macro e Micro Economia'].map((text, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon>
                                            <ArrowForwardIosIcon sx={{ color: '#E28D1C' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{ color: '#fff' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Seção Palestrantes e Workshops */}
            <Box id="palestrantes" sx={{ padding: '100px 20px', backgroundColor: '#1a1a1a' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', textAlign:'center', mb: 4 }}>
                    Palestrantes <span style={{ color: '#E28D1C' }}>e Workshops</span>
                </Typography>
                    <Grid container spacing={4}>
                        {['Cidade Bitcoin', 'Realidade Aumentada', 'Painel Interativo de Trading', 'Internet Descentralizada', 'Pagamento Lightning Only', 'Painel Ultra-Restrito', 'Hackathon de Privacidade', 'Workshops Experienciais'].map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card sx={{ borderRadius: '16px', backgroundColor: '#252525', textAlign:"Center"  }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ color: '#E28D1C', mb: 2 }}>
                                            {item}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#ffff' }}>
                                            Descrição do workshop {item}. Saiba mais sobre as experiências e aprendizados disponíveis.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>


           
            
            {/* Seção Palestrantes */}
            <Palestrantes />


            
            <Box id="beneficios" sx={{ padding: '100px 20px', backgroundColor: '#1a1a1a' }}>
                <Typography variant="h2" sx={{ color: '#E28D1C', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    Benefícios do Evento
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#252525', padding: '40px', borderRadius: '16px' }}>
                            <Typography variant="h3" sx={{ color: '#E28D1C', mb: 4 }}>
                                Para os Participantes
                            </Typography>
                            <List>
                                {benefitsParticipants.map((benefit, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon>
                                            <ArrowForwardIosIcon sx={{ color: '#E28D1C' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={benefit} sx={{ color: '#fff' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#252525', padding: '40px', borderRadius: '16px' }}>
                            <Typography variant="h3" sx={{ color: '#E28D1C', mb: 4 }}>
                                Para os Patrocinadores
                            </Typography>
                            <List>
                                {benefitsSponsors.map((benefit, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon>
                                            <ArrowForwardIosIcon sx={{ color: '#E28D1C' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={benefit} sx={{ color: '#fff' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box id="data" sx={{ padding: '100px 20px', backgroundColor: '#1a1a1a' }}>
                <Typography variant="h2" sx={{ color: '#E28D1C', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    <CalendarMonthIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Data do Evento
                </Typography>
                <Typography variant="h4" sx={{ color: '#E28D1C', mb: 2, textAlign:'center' }}>
                    03/05 - Bitcoin
                </Typography>
                <TimelineSchedule schedule={scheduleDay1} />
                <Typography variant="h4" sx={{ color: '#E28D1C', mb: 2,textAlign:'center' }}>
                    04/05 - WEB3
                </Typography>
                <TimelineSchedule schedule={scheduleDay2} />
            </Box>


            <Box id="local" sx={{ padding: '10px 20px', backgroundColor: '#1a1a1a', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#E28D1C', fontWeight: 'bold', mb: 4 }}>
                    <PlaceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Local do Evento
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={5}>
                        <Box sx={{ backgroundColor: '#252525', padding: '20px', borderRadius: '10px' }}>
                            <img src="/assets/Unifra.jpg" alt="Local 1" style={{ width: '100%', borderRadius: '10px' }} />
                            <Typography variant="h6" color="white" sx={{ mt: 2 }}>
                                R. Padre Ibiapina, 1129 - Centro, Fortaleza - CE, 60010-260
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ backgroundColor: '#252525', padding: '20px', borderRadius: '10px' }}>
                            <img src="/assets/Unifametro.jpg" alt="Local 2" style={{ width: '100%', borderRadius: '10px' }} />
                            <Typography variant="h6" color="white" sx={{ mt: 2 }}>
                                Centro de Eventos BTC Fortaleza
                            </Typography>
                        
                            Acesse o mapa pelo seu aplicativo favorito:

                            <Grid item>
                            <IconButton
                                href="https://www.google.com/maps?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE"
                                target="_blank"
                                sx={{ color: '#34A853', fontSize: 50 }}
                            >
                                <SiGooglemaps size={40} />
                            </IconButton>

                    <IconButton
                        href="https://waze.com/ul?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE"
                        target="_blank"
                        sx={{ color: '#05C4F9', fontSize: 50 }}
                    >
                        <FaWaze size={40} />
                    </IconButton>
                        </Grid>
   
                        </Box>

                        
                    </Grid>
                </Grid>
                
            </Box>

            <Ingressos />

            <BitcoinBrasilia />

           


            <Footer />
        

        </Box>
    );
};

export default LandingPage;
