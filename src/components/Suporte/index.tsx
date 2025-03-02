import React from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { motion } from 'framer-motion';

const Suporte = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper 
                    elevation={4} 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '15px 20px',
                        borderRadius: '12px',
                        backgroundColor: '#252525',
                        color: '#fff',
                        minWidth: '400px'
                    }}
                >
                    {/* Ícone de Suporte */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ChatBubbleOutlineIcon sx={{ color: '#E28D1C', fontSize: 30, marginRight: '10px' }} />
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                Dúvidas ou dificuldades?
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#ccc' }}>
                                Entre em contato pelo WhatsApp!
                            </Typography>
                        </Box>
                    </Box>

                    {/* Botão para WhatsApp */}
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#25D366', // Cor do WhatsApp
                                color: '#fff',
                                borderRadius: '10px',
                                padding: '8px 16px',
                                fontSize: '14px',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            href="https://wa.me/556199180458?text=Olá,%20preciso%20de%20ajuda!"
                            target="_blank"
                        >
                            <WhatsAppIcon sx={{ fontSize: 20 }} />
                            Falar Agora
                        </Button>
                    </motion.div>

                </Paper>
            </motion.div>
        </Box>
    );
};

export default Suporte;
