import React from 'react';
import { Box, Typography, Button, Paper, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Ingressos = () => {
    return (
        <Box  id="ingressos"  sx={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            
            {/* Caixa Principal */} 
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Paper 
                    elevation={6} 
                    sx={{
                        maxWidth: 800,
                        margin: '0 auto',
                        backgroundColor: '#252525',
                        padding: '50px',
                        borderRadius: '16px',
                        textAlign: 'center',
                        border: '3px solid #E28D1C'
                    }}
                >
                    {/* Logo BTC Conecta */}
                    <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                        <img 
                            src="/assets/bitcoin3.png" 
                            alt="BTC Conecta"
                            style={{ width: '50px', height: 'auto', marginRight: '10px' }} 
                        />
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                            BTC <span style={{ color: '#fff' }}>Conecta</span>
                        </Typography>
                    </Box>

                    {/* Destaque para Pré-Venda */}
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
                        🎟 PRÉ-VENDA LIBERADA!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#ccc', mb: 2 }}>
                        **Garanta seu ingresso agora antes que os preços aumentem!**
                    </Typography>

                    {/* Opções de ingressos */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper 
                                elevation={3} 
                                sx={{ padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                                    🎤 Bitcoin Only (1º dia)
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E28D1C' }}>
                                    R$ 200
                                </Typography>
                                
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper 
                                elevation={3} 
                                sx={{ padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                                    🎤 WEB3 (2º dia)
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E28D1C' }}>
                                    R$ 350
                                </Typography>
                                
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper 
                                elevation={3} 
                                sx={{ padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                                    🔥 Combo (Ambos os dias)
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E28D1C' }}>
                                    R$ 500
                                </Typography>
                               
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper 
                                elevation={3} 
                                sx={{ padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                                    👑 VIP - Magnata
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#E28D1C' }}>
                                    R$ 1000
                                </Typography>
                                
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Botão de Compra via WhatsApp */}
                    <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#25D366', // Verde do WhatsApp
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: '12px 24px',
                                    fontSize: '18px',
                                    textTransform: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
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
                        ⏳ *Vagas Limitadas! Não perca essa oportunidade!*
                    </Typography>

                </Paper>
            </motion.div>
            
        </Box>
    );
};

export default Ingressos;
