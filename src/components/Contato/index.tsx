import React from 'react';
import { Box, Typography, Grid, Avatar, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const contatos = [
    {
        nome: "Nyk Casana",
        telefones: ["61 99670-1472"], 
        instagram: "@nykcasana",
        instagramLink: "https://instagram.com/nykcasana",
        twitter: null,
        twitterLink: "https://twitter.com/btcconecta",
        foto: "/assets/nyk01.jpg"
    },
    {
        nome: "Wellington Neves",
        telefones: ["61 99918-0458"], 
        instagram: "@neveslmjr.wellington",
        instagramLink: "https://instagram.com/neveslmjr.wellington",
        twitter: null, 
        twitterLink: null,
        foto: "/assets/well01.jpg"
    },
    {
        nome: "E-mails",
        emails: ["marketing@bitconxp.com","parceria@bitconxp.com","suporte@bitconxp.com "],
        foto: "/assets/email.webp" // Ícone do Gmail
    }
];

const Contato = () => {
    return (
        <Box id="contato" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            
            {/* Título */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FFEB3B', mb: 2 }}>
            fale conosco
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
                                minHeight: '350px'
                            }}
                        >
                            <Avatar src={contato.foto} alt={contato.nome} sx={{ width: 120, height: 120, mb: 2, border: '3px solid #D17A00' }} />
                            
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                                {contato.nome}
                            </Typography>

                            {/* Se for a terceira caixa (E-mails), exibe os e-mails */}
                            {contato.emails ? (
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        mb: 2, 
                                        gap: '6px' // Ajuste no espaçamento para uniformidade
                                    }}
                                >
                                    {contato.emails.map((email, i) => (
                                        <Box 
                                            key={i} 
                                            sx={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                gap: '8px', 
                                                width: 'fit-content',
                                                minWidth: '250px', // Mantém uma largura uniforme
                                                textAlign: 'center',
                                            }}
                                        >
                                            <EmailIcon sx={{ color: '#D17A00', fontSize: '20px' }} />
                                            <Typography 
                                                variant="h6" 
                                                component="a" 
                                                href={`mailto:${email}`} 
                                                sx={{ 
                                                    textDecoration: 'none', 
                                                    color: '#fff', 
                                                    fontSize: '16px',
                                                    '&:hover': { color: '#ffa500' },
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    minWidth: '200px', // Garante alinhamento consistente
                                                }}
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                ) : (
                                                            <>
                                    {/* Telefones - Apenas para as duas primeiras caixas */}
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
                                        {contato.telefones.map((telefone, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <PhoneIcon sx={{ color: '#D17A00' }} />
                                                <Typography variant="h6">{telefone}</Typography>
                                            </Box>
                                        ))}
                                    </Box>

<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center', marginLeft: '-20px' }}>
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

   
</Box>

                                </>
                            )}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Contato;
