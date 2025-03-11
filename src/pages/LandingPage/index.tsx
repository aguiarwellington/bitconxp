import React from 'react';
import {
    Box,
    useMediaQuery,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    Grid
} from '@mui/material';

import Navbar from '../../components/Navegacao';
import Footer from '../../components/Footer';
import Ingressos from '../../components/Ingressos';
import Suporte from '../../components/Suporte';
import BitcoinBrasilia from '../../components/carrossel';
import Palestrantes from '../../components/Palestrantes';
import Patrocinio from '../../components/Patrocinio';
import Contato from '../../components/Contato';
import Sobre from '../../components/sobre';
import Local from '../../components/Local';



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
            <Box
                id="beneficios"
                sx={{
                    padding: { xs: '60px 5%', md: '100px 5%' },
                    background: 'linear-gradient(to right, #e69c47, #002f87)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        mb: 4,
                        textTransform: 'uppercase',
                        fontSize: { xs: '28px', sm: '32px', md: '48px' },
                        textShadow: '3px 3px 5px rgba(0,0,0,0.3)',
                    }}
                >
                    Benefícios <span style={{ color: '#FF8C00' }}>do Evento</span>
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Bloco de Participantes */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #FF8C00, #004aad)',
                                padding: { xs: '40px', md: '50px' },
                                borderRadius: '16px',
                                boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                                transition: '0.3s',
                                width: '100%',
                                maxWidth: '600px',
                                minHeight: { xs: 'auto', md: '450px' },
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            <Typography variant="h4" sx={{ color: '#fff', mb: 3, textAlign: 'center' }}>
                                🎟 Para os Participantes
                            </Typography>
                            <List sx={{ padding: 0, marginTop: 0 }}>
                                {benefitsParticipants.map((benefit, index) => (
                                    <ListItem key={index} disableGutters sx={{ padding: '6px 0' }}>
                                        <ListItemText primary={benefit} sx={{ color: '#fff' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    {/* Bloco de Patrocinadores */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #004aad, #FF8C00)',
                                padding: { xs: '40px', md: '50px' },
                                borderRadius: '16px',
                                boxShadow: '6px 6px 15px rgba(0,0,0,0.2)',
                                transition: '0.3s',
                                width: '100%',
                                maxWidth: '600px',
                                minHeight: { xs: 'auto', md: '450px' },
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            <Typography variant="h4" sx={{ color: '#fff', mb: 3, textAlign: 'center' }}>
                                💼 Para os Patrocinadores
                            </Typography>
                            <List sx={{ padding: 0, marginTop: 0 }}>
                                {benefitsSponsors.map((benefit, index) => (
                                    <ListItem key={index} disableGutters sx={{ padding: '6px 0' }}>
                                        <ListItemText primary={benefit} sx={{ color: '#fff' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Patrocinio />

               
            <Local />               
            <Ingressos />
            <BitcoinBrasilia />
            <Contato />
            <Footer />
        </Box>
    );
};

export default LandingPage;
