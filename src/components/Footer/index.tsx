import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BitcoinIcon from '@mui/icons-material/MonetizationOn'; // Ícone Bitcoin

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#383213', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
            <Grid container spacing={3} justifyContent="center">
                
                {/* Empresas */}
                <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffa500' }}>
                        BTC Conecta | W&N Cripto Solutions
                    </Typography>
                </Grid>

                {/* Redes Sociais */}
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Nossas Redes:
                    </Typography>
                    <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#ffa500' }}>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://youtube.com" target="_blank" sx={{ color: '#ffa500' }}>
                        <YouTubeIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#ffa500' }}>
                        <TwitterIcon fontSize="large" />
                    </IconButton>
                    <IconButton href="https://telegram.org" target="_blank" sx={{ color: '#ffa500' }}>
                        <TelegramIcon fontSize="large" />
                    </IconButton>
                </Grid>

                {/* Política e Bitcoin */}
                <Grid item xs={12}>
                    <Typography variant="body2">
                        <a href="#" style={{ color: '#ffa500', textDecoration: 'none', marginRight: '10px' }}>Política de Privacidade</a> |
                        <a href="#" style={{ color: '#ffa500', textDecoration: 'none', marginLeft: '10px' }}>Termos de Uso</a>
                    </Typography>
                </Grid>

                {/* Preferência por Bitcoin */}
                <Grid item xs={12}>
                    <Typography variant="body2">
                        Preferimos Bitcoin <BitcoinIcon sx={{ verticalAlign: 'middle', color: '#ffa500' }} />
                    </Typography>
                </Grid>

                {/* Direitos Reservados */}
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                        © 2025 Evento Bitcoin Fortaleza. Todos os direitos reservados.
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
