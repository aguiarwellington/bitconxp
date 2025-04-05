import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';

const logos = [
  { name: 'DIY Sec Lab', src: "/assets/diy.png", url: "https://diyseclab.io" },
  { name: 'Alfred', src: "/assets/logoalfred.png", url: "https://www.alfredp2p.io/pt" },
  { name: 'Sats Capital', src: "/assets/logosats.png", url: "https://www.satscapital.com.br" },
  { name: 'MIBetter', src: "/assets/Mib.jpeg", url: "https://www.instagram.com/mibetter_ag" },
];

export default function PatrocinadoresEApoiadores() {
  return (
    <Box
      id="patrocinadores"
      sx={{
        py: 15,
        px: { xs: 4, md: 10 },
        background: "linear-gradient(to right, #f7931a, #002f87)",
        textAlign: "center",
      }}
    >
      {/* Título */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: { xs: "35px", md: "50px" },
        }}
      >
        Patrocinadores / <Box component="span" sx={{ color: "#f7931a" }}>Apoiadores</Box>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          opacity: 0.9,
          fontSize: { xs: "14px", md: "20px" },
          mt: 1,
          mb: 6,
        }}
      >
        Grandes empresas que apoiam a inovação e acreditam no potencial transformador do nosso evento.
      </Typography>

      {/* Primeira linha - 3 caixas */}
      <Grid container spacing={4} justifyContent="center" maxWidth="xl" margin="0 auto" sx={{ mb: 4 }}>
        {logos.slice(0, 3).map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#ffffff22',
                borderRadius: 4,
                height: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: '0.3s',
                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 35px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardActionArea href={logo.url} target="_blank" sx={{ height: '100%' }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    px: 4,
                  }}
                >
                  <Box
                    component="img"
                    src={logo.src}
                    alt={logo.name}
                    sx={{
                      maxHeight: 100,
                      maxWidth: '100%',
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#fff', fontWeight: '500' }}
                  >
                    {logo.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Segunda linha - 1 ou 2 caixas centralizadas */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1000px", mx: "auto", px: { xs: 2, sm: 4, md: 0 } }}
      >
        {logos.slice(3).map((logo, index) => (
          <Grid item xs={12} sm={10} md={6} key={index}>
            <Card
              sx={{
                backgroundColor: '#ffffff22',
                borderRadius: 4,
                height: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: '0.3s',
                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 35px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardActionArea href={logo.url} target="_blank" sx={{ height: '100%' }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    px: 4,
                  }}
                >
                  <Box
                    component="img"
                    src={logo.src}
                    alt={logo.name}
                    sx={{
                      maxHeight: { xs: 100, md: 120 },
                      maxWidth: '100%',
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#fff', fontWeight: '500' }}
                  >
                    {logo.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
