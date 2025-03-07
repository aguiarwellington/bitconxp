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
import Patrocinio from '../../components/Patrocinio';
import Contato from '../../components/Contato';
import Sobre from '../../components/sobre';


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
    '🎓 Aprendizado de Alto Nível – Workshops e palestras com especialistas em Bitcoin e Web3.',
    '🤝 Conexões Estratégicas – Expanda sua rede com entusiastas e profissionais do mercado.',
    '🌍 Networking de Qualidade – Troque experiências no ambiente ideal para conexões valiosas.',
    '🏛️ Experiência Confortável e Organizada – Infraestrutura pensada para seu bem-estar.',
    '✍️ Sessão de Autógrafos e Fotografias – Encontro com autores e especialistas do setor.',
    '📊 Visão Atualizada do Mercado – Discussões sobre o cenário geopolítico e impactos no setor.',
    '💬 Dúvidas Esclarecidas – Interação direta com especialistas para respostas em tempo real.',
    '🔐 Segurança Garantida – Ambiente monitorado para sua tranquilidade.',
    '✨ E muito mais!'
];

const benefitsSponsors = [
    '🚀 Alta Visibilidade para Sua Marca – Sua empresa em destaque no universo cripto.',
    '🎞️ Vídeo Institucional no Telão – Exibição de até 1 minuto para impactar o público.',
    '🎙️ Menção Especial no Evento – O mestre de cerimônias apresentando sua marca.',
    '🏷️ Logomarca em Todos os Materiais do Evento – Cartazes, panfletos e muito mais.',
    '🎪 Espaço Exclusivo para Stand – Interação direta com o público e geração de leads.',
    '📢 Promoção nas Redes Sociais – Menções, marcações e repostagens no Instagram do evento e de influenciadores.',
    '🅿️ Benefícios VIP – Estacionamento, acessos e assentos privilegiados.',
    '✨ E outras oportunidades exclusivas!'
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

            {/* Seção Home */}
            <Box
                id="home"
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '105vh',
                    
                    backgroundImage: 'url(/assets/main.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Box>
            
            {/* Seção Sobre o Evento com Design Atrativo */}
            <Sobre />

            {/* Seção Palestrantes */}
            <Palestrantes />


            
            <Box
    id="beneficios"
    sx={{
        padding: '100px 5%',
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        textAlign: 'center',
    }}
>
    <Typography
        variant="h2"
        sx={{
            color: '#fff',
            fontWeight: 'bold',
            mb: 6,
            textTransform: 'uppercase',
            fontSize: { xs: '32px', md: '48px' },
            textShadow: '3px 3px 5px rgba(0,0,0,0.3)',
        }}
    >
        Benefícios <span style={{ color: '#FF8C00' }}>do Evento</span>
    </Typography>

    <Grid container spacing={4} justifyContent="center">
        {/* Bloco de Participantes */}
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #FF8C00, #004aad)',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                    },
                }}
            >
                <Typography variant="h3" sx={{ color: '#fff', mb: 4 }}>
                    🎟 Para os Participantes
                </Typography>
                <List sx={{ padding: 0 }}>
                    {benefitsParticipants.map((benefit, index) => (
                        <ListItem key={index} disableGutters sx={{ padding: '5px 0' }}>
                            <ListItemText primary={benefit} sx={{ color: '#fff', fontSize: '18px' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>

        {/* Bloco de Patrocinadores */}
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #004aad, #FF8C00)',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                    },
                }}
            >
                <Typography variant="h3" sx={{ color: '#fff', mb: 4 }}>
                    💼 Para os Patrocinadores
                </Typography>
                <List sx={{ padding: 0 }}>
                    {benefitsSponsors.map((benefit, index) => (
                        <ListItem key={index} disableGutters sx={{ padding: '5px 0' }}>
                            <ListItemText primary={benefit} sx={{ color: '#fff', fontSize: '18px' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    </Grid>
</Box>



        <Patrocinio />



            <Box id="data" sx={{ padding: '100px 20px', background: 'linear-gradient(to right, #e69c47, #002f87)' }}>
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


            <Box id="local" sx={{ padding: '100px 5%', background: 'linear-gradient(to right, #e69c47, #002f87)', textAlign: 'center' }}>
    <Typography
        variant="h2"
        sx={{
            color: '#fff',
            fontWeight: 'bold',
            mb: 6,
            textTransform: 'uppercase',
            fontSize: { xs: '32px', md: '48px' },
            textShadow: '3px 3px 5px rgba(0,0,0,0.3)',
        }}
    >
        <PlaceIcon sx={{ verticalAlign: 'middle', fontSize: '42px', color: '#FF8C00' }} /> Local do Evento
    </Typography>

    <Grid container spacing={4} justifyContent="center">
        {/* Local 1 */}
        <Grid item xs={12} md={5}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #FF8C00, #004aad)',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                    },
                }}
            >
                <img src="/assets/Unifra.jpg" alt="Local 1" style={{ width: '100%', borderRadius: '12px' }} />
                <Typography variant="h6" color="white" sx={{ mt: 3, fontWeight: 'bold' }}>
                    📍 R. Padre Ibiapina, 1129 - Centro, Fortaleza - CE, 60010-260
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <IconButton
                        href="https://www.google.com/maps?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE"
                        target="_blank"
                        sx={{ color: '#34A853', fontSize: 50 }}
                    >
                        <SiGooglemaps size={36} />
                    </IconButton>
                    <IconButton
                        href="https://waze.com/ul?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE"
                        target="_blank"
                        sx={{ color: '#05C4F9', fontSize: 50 }}
                    >
                        <FaWaze size={36} />
                    </IconButton>
                </Box>
            </Box>
        </Grid>

        {/* Local 2 */}
        <Grid item xs={12} md={5}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #004aad, #FF8C00)',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                    },
                }}
            >
                <img src="/assets/Unifametro.jpg" alt="Local 2" style={{ width: '100%', borderRadius: '12px' }} />
                <Typography variant="h6" color="white" sx={{ mt: 3, fontWeight: 'bold' }}>
                    📍 Centro de Eventos BTC Fortaleza
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <IconButton
                        href="https://www.google.com/maps?q=Centro+de+Eventos+BTC+Fortaleza"
                        target="_blank"
                        sx={{ color: '#34A853', fontSize: 50 }}
                    >
                        <SiGooglemaps size={36} />
                    </IconButton>
                    <IconButton
                        href="https://waze.com/ul?q=Centro+de+Eventos+BTC+Fortaleza"
                        target="_blank"
                        sx={{ color: '#05C4F9', fontSize: 50 }}
                    >
                        <FaWaze size={36} />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    </Grid>
</Box>

            <Ingressos />

            <BitcoinBrasilia />

            <Contato />

            <Footer />
        

        </Box>
    );
};

export default LandingPage;
