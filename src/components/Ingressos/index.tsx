import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ingressos = [
    { titulo: 'Bitcoin Day', descricao: 'Acesso ao primeiro dia do evento, com palestras e cursos exclusivos sobre Bitcoin.', preco: 'R$ 200,00', cor: 'linear-gradient(135deg, #f5af19, #e69c47)', emoji: '₿' },
    { titulo: 'WEB3 Day', descricao: 'Acesso ao segundo dia do evento, explorando inovação, descentralização e Web3.', preco: 'R$ 350,00', cor: 'linear-gradient(135deg, #e69c47, #f5af19)', emoji: '🌐' },
    { titulo: 'Full Experience', descricao: 'Acesso completo aos dois dias do evento, incluindo todas as palestras e cursos.', preco: 'R$ 500,00', cor: 'linear-gradient(135deg, #002f87, #e69c47)', emoji: '🔥' },
    { titulo: 'VIP Experience', descricao: 'Acesso total, brindes exclusivos, sorteios e um jantar especial com os palestrantes.', preco: 'R$ 1000,00', cor: 'linear-gradient(135deg, #8B0000, #FF4500)', emoji: '👑' }
];

const Ingressos = () => {
    return (
        <Box id="ingressos" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Paper elevation={10} sx={{ maxWidth: 900, margin: '0 auto', background: 'linear-gradient(to right, #e69c47, #002f87)', padding: '60px', borderRadius: '16px', textAlign: 'center', border: '2px solid #E28D1C' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
                        <span style={{ color: '#fff' }}>PRÉ-VENDA</span> LIBERADA!
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {ingressos.map((ingresso, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper elevation={6} sx={{ padding: '25px', borderRadius: '16px', background: ingresso.cor, textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>{ingresso.emoji} {ingresso.titulo}</Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>{ingresso.descricao}</Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>{ingresso.preco}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Button href="https://wa.me/5561996701472" target="_blank" variant="contained" sx={{ backgroundColor: '#25D366', color: '#fff', width: { xs: '100%', sm: '280px' }, height: '56px' }}>
                            <WhatsAppIcon sx={{ mr: 1}} /> Compre com Nyk Casana
                        </Button>
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>OU</Typography>
                        <Button href="https://wa.me/5561999180458" target="_blank" variant="contained" sx={{ backgroundColor: '#25D366', color: '#fff', width: { xs: '100%', sm: '280px' }, height: '56px' }}>
                            <WhatsAppIcon sx={{ mr: 1 }} /> Compre com Wellington
                        </Button>
                    </Box>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default Ingressos;
