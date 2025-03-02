import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { FaInstagram } from 'react-icons/fa';

// Lista de palestrantes

const speakers = [
    { name: 'Nyk Casana', role: 'Organizado', img: '/assets/Nyk.jpg', instagram: 'https://instagram.com/nykcasana' },
    { name: 'Alan Schram', role: 'Bitcoin Red Pill', img: '/assets/Alan.jpg', instagram: 'https://instagram.com/alan_schramm' },
    { name: 'Camarada Sobrinho', role: 'Especialista Bitcoin e P2P', img: '/assets/Camarada Sobrinho.jpg', instagram: '' },
    { name: 'Bruno Costa', role: 'DeFi e Pool de liquidez', img: '/assets/Bruno.jpg', instagram: 'https://instagram.com/b.money_br' },
    { name: 'Walter Silva', role: 'Macroeconomia e DeFi', img: '/assets/Walter.jpg', instagram: '' },
    { name: 'Rodolfo Romão', role: 'Bitcoin e programação', img: '/assets/Rodolfo.jpg', instagram: 'https://instagram.com/rodolforomao' },
    { name: 'Filipe Iório', role: 'CEO Criptoverso', img: '/assets/Filipe.jpg', instagram: '' },
    { name: 'Breno Brito', role: 'Bitcoin - TI', img: '/assets/Breno.jpg', instagram: 'https://instagram.com/brenorbrito' },
    { name: 'Wellington Neves', role: 'Organizado', img: '/assets/wellingtonNeves.JPG', instagram: 'https://instagram.com/neveslmjr.wellington'}
];

const Palestrantes = () => {
    // Quantidade total de palestrantes
    const totalSpeakers = speakers.length;
    const remainder = totalSpeakers % 4; // Verifica quantos sobram na última linha

    return (
        <Box id="palestrantes" sx={{ padding: '100px 20px', backgroundColor: '#1a1a1a', textAlign: 'center' }}>
            <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', mb: 4 }}>
                Atrações <span style={{ color: '#E28D1C' }}>Palestrantes</span>
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {speakers.map((speaker, index) => (
                    <Grid 
                        item 
                        xs={12} sm={6} md={3} 
                        key={index} 
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Card sx={{ backgroundColor: '#252525', color: '#fff', borderRadius: '16px', textAlign: 'center', width: '280px' }}>
                            <CardContent>
                                <Avatar src={speaker.img} alt={speaker.name} sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }} />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{speaker.name}</Typography>
                                <Typography variant="body2" sx={{ color: '#E28D1C', mb: 1 }}>{speaker.role}</Typography>
                                <IconButton component="a" href={speaker.instagram} target="_blank" sx={{ color: '#E28D1C' }}>
                                    <FaInstagram size={24} />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {/* Se sobrar 1, 2 ou 3 palestrantes na última linha, centralizar */}
                {remainder !== 0 && (
                    <Grid item xs={12} sm={6} md={3 * (4 - remainder)} sx={{ display: 'flex', justifyContent: 'center' }} />
                )}
            </Grid>
        </Box>
    );
};

export default Palestrantes;
