import React from 'react';
import { Box, Typography, Grid, Avatar, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';

const contatos = [
    {
        nome: "BTC Conecta",
        telefones: ["61 99670-1472", "61 9979-7179"], // Dois telefones
        instagram: "@btcconecta",
        instagramLink: "https://instagram.com/btcconecta",
        twitter: "@btcconecta",
        twitterLink: "https://twitter.com/btcconecta",
        foto: "/assets/btcconecta.jpeg"
    },
    {
        nome: "Wellington Neves",
        telefones: ["61 99918-0458"], // Apenas um telefone
        instagram: "@neveslmjr.wellington",
        instagramLink: "https://instagram.com/neveslmjr.wellington",
        twitter: null, // Sem Twitter
        twitterLink: null,
        foto: "/assets/well01.jpg"
    }
];

const Contato = () => {
    return (
        <Box id="contato" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            
            {/* Título */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#D17A00', mb: 2 }}>
                Ficou interessado?
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
                Entre em contato com os organizadores!
            </Typography>

            {/* Grid com contatos */}
            <Grid container spacing={6} justifyContent="center">
                {contatos.map((contato, index) => (
                    <Grid item xs={12} md={5} key={index}>
                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'linear-gradient(to right, #1e3c72, #2a5298)',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: '8px 8px 20px rgba(0,0,0,0.3)',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.03)' },
                                minHeight: '350px' // Garantindo que ambas tenham o mesmo tamanho
                            }}
                        >
                            <Avatar src={contato.foto} alt={contato.nome} sx={{ width: 120, height: 120, mb: 2, border: '3px solid #D17A00' }} />
                            
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                                {contato.nome}
                            </Typography>
                            
                            {/* Telefones - Lado a lado */}
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
                                {contato.telefones.map((telefone, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PhoneIcon sx={{ color: '#D17A00' }} />
                                        <Typography variant="h6">{telefone}</Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Redes Sociais - Embaixo dos números */}
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                                {/* Instagram */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton href={contato.instagramLink} target="_blank" sx={{ color: '#D17A00' }}>
                                        <InstagramIcon fontSize="large" />
                                    </IconButton>
                                    <Typography 
                                        variant="h6"
                                        component="a"
                                        href={contato.instagramLink}
                                        target="_blank"
                                        sx={{ textDecoration: 'none', color: '#fff', '&:hover': { color: '#ffa500' } }}
                                    >
                                        {contato.instagram}
                                    </Typography>
                                </Box>

                                {/* Twitter (se existir) */}
                                {contato.twitter && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <IconButton href={contato.twitterLink} target="_blank" sx={{ color: '#D17A00' }}>
                                            <TwitterIcon fontSize="large" />
                                        </IconButton>
                                        <Typography 
                                            variant="h6"
                                            component="a"
                                            href={contato.twitterLink}
                                            target="_blank"
                                            sx={{ textDecoration: 'none', color: '#fff', '&:hover': { color: '#ffa500' } }}
                                        >
                                            {contato.twitter}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>

                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Contato;
