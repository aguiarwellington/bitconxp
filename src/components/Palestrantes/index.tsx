import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { FaInstagram } from 'react-icons/fa';

// Lista de palestrantes
const speakers = [
    { name: 'Nyk Casana', role: 'Organizador', img: '/assets/Nyk.jpg', instagram: 'https://instagram.com/nykcasana' },
    { name: 'Wellington Neves', role: 'Organizador', img: '/assets/wellingtonNeves.JPG', instagram: 'https://instagram.com/neveslmjr.wellington' },
    { name: 'Camarada Sobrinho', role: 'Especialista Bitcoin e P2P', img: '/assets/Camarada Sobrinho.jpg', instagram: 'https://instagram.com/sobrinho.btc' },
    { name: 'Bruno Costa', role: 'DeFi e Pool de liquidez', img: '/assets/Bruno.jpg', instagram: 'https://instagram.com/b.money_br' },
    { name: 'Walter Silva', role: 'Macroeconomia e DeFi', img: '/assets/Walter.jpg', instagram: 'https://instagram.com/criptocomfe' },
    { name: 'Rodolfo Romão', role: 'Bitcoin e programação', img: '/assets/Rodolfo.jpg', instagram: 'https://instagram.com/rodolforomao' },
    { name: 'Filipe Iório', role: 'CEO Criptoverso', img: '/assets/Filipe.jpg', instagram:'https://instagram.com/filipe.iorio' }, 
    { name: 'Breno Brito', role: 'Bitcoin - TI', img: '/assets/Breno.jpg', instagram: 'https://instagram.com/brenorbrito' },
    { name: 'Jeff Plebs', role: 'Especialista BTC e WEB3', img: '/assets/jeff.jpg', instagram: 'https://instagram.com/jeffplebs' }
];

const Palestrantes = () => {
    return (
        <Box
            id="palestrantes"
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
                Atrações <span style={{ color: '#FF8C00' }}>Palestrantes</span>
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {speakers.map((speaker, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Card
                            sx={{
                                background: 'linear-gradient(145deg, #ff9c32, #004aad)',
                                color: '#fff',
                                borderRadius: '16px',
                                textAlign: 'center',
                                width: '280px',
                                padding: '20px',
                                boxShadow: '8px 8px 16px rgba(0,0,0,0.2)',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            <CardContent>
                                <Avatar
                                    src={speaker.img}
                                    alt={speaker.name}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        margin: '0 auto',
                                        mb: 2,
                                        border: '4px solid #fff',
                                        transition: '0.3s',
                                        '&:hover': {
                                            filter: 'brightness(1.2)',
                                        },
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                    }}
                                >
                                    {speaker.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#fff', opacity: 0.9, mb: 1 }}
                                >
                                    {speaker.role}
                                </Typography>
                                {speaker.instagram && (
                                    <IconButton
                                        component="a"
                                        href={speaker.instagram}
                                        target="_blank"
                                        sx={{
                                            color: '#fff',
                                            backgroundColor: '#FF8C00',
                                            '&:hover': { backgroundColor: '#ffa73a' },
                                            width: '40px',
                                            height: '40px',
                                        }}
                                    >
                                        <FaInstagram size={20} />
                                    </IconButton>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Palestrantes;
