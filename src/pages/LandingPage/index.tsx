import React from 'react';
import {
    Box,
    useMediaQuery,
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid
} from '@mui/material';

import Navbar from '../../components/Navegacao';
import Footer from '../../components/Footer';
import Ingressos from '../../components/Ingressos';
import BitcoinBrasilia from '../../components/carrossel';
import Palestrantes from '../../components/Palestrantes';
import Patrocinio from '../../components/Patrocinio';
import Contato from '../../components/Contato';
import Sobre from '../../components/sobre';
import Local from '../../components/Local';

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import EventIcon from "@mui/icons-material/Event";

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

const events = [
  {
    date: "03/05 - Bitcoin",
    schedule: [
      { time: "09h00 às 12h30", title: "Palestra" },
      { time: "12h30 às 14h00", title: "Almoço" },
      { time: "14h00 às 18h00", title: "Curso - Autocustódia" },
      { time: "18h00 às 20h30", title: "Intervalo" },
      { time: "20h30 às 23h00", title: "Jantar" },
    ],
  },
  {
    date: "04/05 - WEB3",
    schedule: [
      { time: "07h00 às 09h30", title: "Café da manhã" },
      { time: "10h00 às 12h30", title: "Palestra" },
      { time: "12h30 às 14h00", title: "Almoço" },
      { time: "14h00 às 15h30", title: "Mesa redonda" },
      { time: "15h30 às 16h00", title: "Perguntas" },
      { time: "16h00 às 21h30", title: "Autógrafos e Fotos" },
      { time: "22h00", title: "Encerramento" },
    ],
  },
];

const LandingPage = () => {
    const isMobile = useMediaQuery('(max-width: 768px)'); 
    const logoSrc = isMobile ? '/assets/img1.png' : '/assets/logo3.png';

    return (
        <Box sx={{ backgroundColor: '#4a3f24', color: '#fff', overflowX: 'hidden', minHeight: '100vh' }}>
            <Navbar />

            {/* Seção Principal com a Logo */}
            <Box
                id="home"
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={logoSrc}
                    alt="Evento Bitcoin XP"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Sobre />
            <Palestrantes />

            {/* Seção de Benefícios */}
            <Patrocinio />

            {/* Cronograma - Agora inserido diretamente na LandingPage */}
            <Box
                sx={{
                    background: "linear-gradient(to right, #e69c47, #002f87)",
                    color: "#fff",
                    padding: "80px 5%",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 4, color: "#FF8C00" }}
                >
                    <EventIcon sx={{ fontSize: "34px", mr: 1 }} /> Data do Evento
                </Typography>
                {events.map((event, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "#FF8C00", mb: 2 }}
                        >
                            {event.date}
                        </Typography>
                        <Timeline position="alternate">
                            {event.schedule.map((item, idx) => (
                                <TimelineItem key={idx}>
                                    <TimelineOppositeContent
                                        sx={{ fontWeight: "bold", color: "#fff" }}
                                    >
                                        {item.time}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot sx={{ backgroundColor: "#FF8C00" }} />
                                        {idx !== event.schedule.length - 1 && (
                                            <TimelineConnector sx={{ backgroundColor: "#FF8C00" }} />
                                        )}
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ fontWeight: "bold", color: "#fff" }}
                                    >
                                        {item.title}
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Box>
                ))}
            </Box>

            <Local />               
            <Ingressos />
            <BitcoinBrasilia />
            <Contato />
            <Footer />
        </Box>
    );
};

export default LandingPage;
