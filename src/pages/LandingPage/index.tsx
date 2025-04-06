import React from 'react';
import { Box, Typography } from '@mui/material';

import CarroselPatrocinador from '../../components/CarrosselPatrocinador';
import Navbar from '../../components/Navegacao';
import Footer from '../../components/Footer';
import Ingressos from '../../components/Ingressos';
import BitcoinBrasilia from '../../components/carrossel';
import Palestrantes from '../../components/Palestrantes';
import Patrocinio from '../../components/Patrocinio';
import Apoiadores from '../../components/Apoiadores';
import Contato from '../../components/Contato';
import Sobre from '../../components/sobre';
import Local from '../../components/Local';
import Contador from '../../components/Contador';

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import EventIcon from "@mui/icons-material/Event";


// Definição dos eventos para o cronograma
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
    return (
        <Box sx={{ backgroundColor: '#4a3f24', color: '#fff', overflowX: 'hidden', minHeight: '100vh' }}>
            <Navbar />

            {/* Seção Principal com a Imagem 100% Responsiva */}
            <Box
                id="home"
                sx={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <picture>
                    <source media="(max-width: 768px)" srcSet="/assets/img1.png" />
                    <source media="(min-width: 769px)" srcSet="/assets/logo3.png" />
                    <img
                        src="/assets/logo3.png"
                        alt="Evento Bitcoin XP"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100vw',
                            height: '100vh',
                            objectFit: 'cover', 
                        }}
                    />
                </picture>
            </Box>
            <CarroselPatrocinador/>
            <Sobre />
            <Palestrantes />
            <Apoiadores />
            <Patrocinio />

            {/* Cronograma */}
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
                    sx={{ fontWeight: "bold", mb: 4, color: "#D3D3D3" }}
                >
                    <EventIcon sx={{ fontSize: "34px", mr: 1 }} /> Data do Evento
                </Typography>
                {events.map((event, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", color: "#EEE8AA", mb: 2 }}
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
            <Contador />               
            <Ingressos />
            <BitcoinBrasilia />
            <Contato />
            <Footer />
        </Box>
    );
};

export default LandingPage;
