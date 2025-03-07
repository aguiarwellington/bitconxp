import React from 'react';
import { Box, Typography, Button, Paper, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ingressos = [
    {
        titulo: 'Bitcoin Day',
        descricao: 'Acesso ao primeiro dia do evento, com palestras e cursos exclusivos sobre Bitcoin.',
        preco: 'R$ 200,00',
        cor: 'linear-gradient(135deg, #f5af19, #e69c47)',
        emoji: '₿',
    },
    {
        titulo: 'WEB3 Day',
        descricao: 'Acesso ao segundo dia do evento, explorando inovação, descentralização e Web3.',
        preco: 'R$ 350,00',
        cor: 'linear-gradient(135deg, #e69c47, #f5af19)',
        emoji: '🌐',
    },
    {
        titulo: 'Full Experience',
        descricao: 'Acesso completo aos dois dias do evento, incluindo todas as palestras e cursos.',
        preco: 'R$ 500,00',
        cor: 'linear-gradient(135deg, #002f87, #e69c47)',
        emoji: '🔥',
    },
    {
        titulo: 'VIP Experience',
        descricao: 'Acesso total, brindes exclusivos, sorteios e um jantar especial com os palestrantes.',
        preco: 'R$ 1000,00',
        cor: 'linear-gradient(135deg, #8B0000, #FF4500)',
        emoji: '👑',
    }
];

const Ingressos = () => {
    return (
        <Box id="ingressos" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Caixa Principal */}
                <Paper 
                    elevation={10}
                    sx={{
                        maxWidth: 850,
                        margin: '0 auto',
                        background: 'linear-gradient(to right, #e69c47, #002f87)', // Degradê aplicado aqui!
                        padding: '50px',
                        borderRadius: '16px',
                        textAlign: 'center',
                        border: '2px solid #E28D1C'
                    }}
                >
                    {/* Destaque para Pré-Venda */}
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
                            <span style={{ color: '#E28D1C' }}></span> <span style={{ color: '#fff' }}>PRÉ-VENDA</span> LIBERADA!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', mb: 4 }}>
                        **Garanta seu ingresso agora antes que os preços aumentem!**
                    </Typography>

                    {/* Opções de ingressos */}
                    <Grid container spacing={3} justifyContent="center">
                        {ingressos.map((ingresso, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        padding: '25px',
                                        borderRadius: '16px',
                                        background: ingresso.cor,
                                        textAlign: 'center',
                                        transition: '0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '10px 10px 20px rgba(0,0,0,0.3)',
                                        },
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
                                        {ingresso.emoji} {ingresso.titulo}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                                        {ingresso.descricao}
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>
                                        {ingresso.preco}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Botão de Compra via WhatsApp */}
                    <Stack direction="row" justifyContent="center" sx={{ mt: 5 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#25D366',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: '12px 24px',
                                    fontSize: '18px',
                                    textTransform: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                                href="https://wa.me/556199180458?text=Olá,%20quero%20comprar%20meu%20ingresso!"
                                target="_blank"
                            >
                                <WhatsAppIcon sx={{ fontSize: 28 }} />
                                Fale com a equipe
                            </Button>
                        </motion.div>
                    </Stack>

                    {/* Aviso de urgência */}
                    <Typography variant="body2" sx={{ color: '#ff4747', fontWeight: 'bold', mt: 3 }}>
                        ⏳ *Vagas Limitadas! Garanta já o seu!*
                    </Typography>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default Ingressos;
