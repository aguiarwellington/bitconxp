import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiamondIcon from '@mui/icons-material/Diamond';
import CampaignIcon from '@mui/icons-material/Campaign';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import DescriptionIcon from '@mui/icons-material/Description';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MicIcon from '@mui/icons-material/Mic';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const patrocinioData = [
    {
        categoria: "Prata",
        color: "#C0C0C0",
        background: "linear-gradient(to right, #e69c47, #002f87)",
        icon: <WorkspacePremiumIcon sx={{ color: '#C0C0C0', fontSize: 40 }} />,
        beneficios: [
            { texto: "Divulgação em marketing e material impresso", icon: <CampaignIcon sx={{ color: '#fff' }} /> },
            { texto: "Logo no carrossel do site", icon: <LanguageIcon sx={{ color: '#fff' }} /> },
            { texto: "Citação como apoiador nas redes sociais", icon: <ShareIcon sx={{ color: '#fff' }} /> },
            { texto: "Logo em material digital", icon: <DescriptionIcon sx={{ color: '#fff' }} /> },
        ],
        investimento: "R$ 4.000,00"
    },
    {
        categoria: "Ouro",
        color: "#FFD700",
        background: "linear-gradient(to right, #e69c47, #002f87)",
        icon: <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 40 }} />,
        beneficios: [
            { texto: "Stand pequeno", icon: <StorefrontIcon sx={{ color: '#fff' }} /> },
            { texto: "Mais visibilidade no evento", icon: <VisibilityIcon sx={{ color: '#fff' }} /> },
        ],
        investimento: "R$ 8.000,00"
    },
    {
        categoria: "Diamante",
        color: "#E5E4E2",
        background: "linear-gradient(to right, #e69c47, #002f87)",
        icon: <DiamondIcon sx={{ color: '#E5E4E2', fontSize: 40 }} />,
        beneficios: [
            { texto: "Stand grande", icon: <StorefrontIcon sx={{ color: '#fff' }} /> },
            { texto: "Logo em destaque", icon: <StarIcon sx={{ color: '#fff' }} /> },
            { texto: "Tempo de palco", icon: <MicIcon sx={{ color: '#fff' }} /> },
            { texto: "Maior exposição", icon: <RocketLaunchIcon sx={{ color: '#fff' }} /> },
            { texto: "1 ingresso cortesia VIP", icon: <ConfirmationNumberIcon sx={{ color: '#fff' }} /> },
        ],
        investimento: "R$ 15.000,00"
    }
];

const PatrocinioInvestimento = () => {
    return (
        <Box sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            
            {/* Título Principal */}
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#fff' }}>
                Tipos de Patrocínio<span style={{ color: '#E28D1C' }}> e Investimento</span>
            </Typography>
            {/* Blocos empilhados */}
            <Grid container spacing={4} justifyContent="center">
                {patrocinioData.map((item, index) => (
                    <Grid item xs={12} md={8} key={index}>
                        <Card sx={{ 
                            borderRadius: '16px', 
                            boxShadow: 6,
                            padding: '20px',
                            transition: '0.3s',
                            background: item.background, // Degradê dentro da caixa
                            '&:hover': { boxShadow: 12, transform: 'scale(1.02)' }
                        }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                
                                {/* Ícone e Nome da categoria */}
                                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                                    {item.icon}
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: item.color, ml: 1 }}>
                                        {item.categoria}
                                    </Typography>
                                </Box>

                                {/* Lista de Benefícios */}
                                <List sx={{ textAlign: 'left', paddingX: '10%' }}>
                                    {item.beneficios.map((beneficio, i) => (
                                        <ListItem key={i} disableGutters>
                                            <ListItemIcon>{beneficio.icon}</ListItemIcon>
                                            <Typography sx={{ fontSize: '18px', color: '#fff' }}>
                                                {beneficio.texto}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>

                                {/* Investimento */}
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF8C00', mt: 2 }}>
                                    {item.investimento}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

          
        </Box>
    );
};

export default PatrocinioInvestimento;
