import React from 'react';
import { Box, Typography, Grid, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BitcoinIcon from '@mui/icons-material/MonetizationOn';

const Footer = () => {
    return (
        <Box 
            sx={{ 
                background: 'linear-gradient(to right, #002f87, #e69c47)', 
                color: '#fff', 
                padding: '3rem 1.5rem', 
                textAlign: 'center',
                boxShadow: '0 -4px 10px rgba(0,0,0,0.2)'
            }}
        >
            <Grid container spacing={3} justifyContent="center">
                
                {/* Nome das Empresas */}
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>
                        BTC Conecta | W&N Cripto Solutions
                    </Typography>
                </Grid>

                {/* Redes Sociais */}
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Siga-nos nas redes sociais:
                    </Typography>
                    <IconButton href="https://instagram.com/bitconxp"  target="_blank" sx={{ color: '#FFEB3B', transition: '0.3s', '&:hover': { color: '#ffa500' } }}>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="" target="_blank" sx={{ color: '#FFEB3B', transition: '0.3s', '&:hover': { color: '#ffa500' } }}>
                        <YouTubeIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://x.com/bitconxp" target="_blank" sx={{ color: '#FFEB3B', transition: '0.3s', '&:hover': { color: '#ffa500' } }}>
                        <TwitterIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://telegram.org" target="_blank" sx={{ color: '#FFEB3B', transition: '0.3s', '&:hover': { color: '#ffa500' } }}>
                        <TelegramIcon fontSize="large" />
                    </IconButton>
                </Grid>

                <Divider sx={{ width: '60%', backgroundColor: '#bbb', my: 3 }} />

                {/* Política de Privacidade e Termos */}
                <Grid item xs={12}>
                         <Typography variant="body2">
                            <a href="#" 
                                style={{ color: '#FFEB3B', textDecoration: 'none', fontWeight: 'bold', marginRight: '15px', transition: '0.3s' }}
                                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffa500'}
                                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#FFEB3B'}
                            >
                                Política de Privacidade
                            </a> 
                            |
                            <a href="#" 
                                style={{ color: '#FFEB3B', textDecoration: 'none', fontWeight: 'bold', marginLeft: '15px', transition: '0.3s' }}
                                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffa500'}
                                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#FFEB3B'}
                            >
                                Termos de Uso
                            </a>
                         </Typography>

                </Grid>

                {/* Preferência por Bitcoin */}
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        Preferimos Bitcoin 
                        <BitcoinIcon sx={{ color: '#FFEB3B' }} />
                    </Typography>
                </Grid>

                {/* Direitos Autorais */}
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: '#ddd' }}>
                        © 2025 Evento BITcon XP. Todos os direitos reservados.
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
