import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { SiGooglemaps } from 'react-icons/si';
import { FaWaze } from 'react-icons/fa';

const locais = [
    {
        nome: '📍 R. Padre Ibiapina, 1129 - Centro, Fortaleza - CE, 60010-260',
        imagem: '/assets/Unifra.jpg',
        googleMaps: 'https://www.google.com/maps?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE',
        waze: 'https://waze.com/ul?q=R.+Padre+Ibiapina,+1129+-+Centro,+Fortaleza+-+CE',
        cor: 'linear-gradient(135deg, #FF8C00, #004aad)',
    },
    {
        nome: '📍 Centro de Eventos BTC Fortaleza',
        imagem: '/assets/Unifametro.jpg',
        googleMaps: 'https://www.google.com/maps?q=Centro+de+Eventos+BTC+Fortaleza',
        waze: 'https://waze.com/ul?q=Centro+de+Eventos+BTC+Fortaleza',
        cor: 'linear-gradient(135deg, #004aad, #FF8C00)',
    },
];

const LocalEvento = () => {
    return (
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
                {locais.map((local, index) => (
                    <Grid item xs={12} md={5} key={index}>
                        <Box
                            sx={{
                                background: local.cor,
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
                            <img src={local.imagem} alt={`Local ${index + 1}`} style={{ width: '100%', borderRadius: '12px' }} />
                            <Typography variant="h6" color="white" sx={{ mt: 3, fontWeight: 'bold' }}>
                                {local.nome}
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <IconButton href={local.googleMaps} target="_blank" sx={{ color: '#34A853', fontSize: 50 }}>
                                    <SiGooglemaps size={36} />
                                </IconButton>
                                <IconButton href={local.waze} target="_blank" sx={{ color: '#05C4F9', fontSize: 50 }}>
                                    <FaWaze size={36} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LocalEvento;
