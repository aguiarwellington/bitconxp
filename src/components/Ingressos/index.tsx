import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const ingressos = [
  {
    titulo: 'Bitcoin Day',
    descricao: 'Acesso ao primeiro dia do evento, com palestras e cursos exclusivos sobre Bitcoin.',
    preco: 'R$ 260,00',
    cor: 'linear-gradient(135deg, #f5af19, #e69c47)',
    emoji: '₿'
  },
  {
    titulo: 'WEB3 Day',
    descricao: 'Acesso ao segundo dia do evento, explorando inovação, descentralização e Web3.',
    preco: 'R$ 455,00',
    cor: 'linear-gradient(135deg, #e69c47, #f5af19)',
    emoji: '🌐'
  },
  {
    titulo: 'Full Experience',
    descricao: 'Acesso completo aos dois dias do evento, incluindo todas as palestras e cursos.',
    preco: 'R$ 650,00',
    cor: 'linear-gradient(135deg, #002f87, #e69c47)',
    emoji: '🔥'
  },
  {
    titulo: 'VIP Experience',
    descricao: 'Acesso total, brindes exclusivos, sorteios e um jantar especial com os palestrantes.',
    preco: 'R$ 1300,00',
    cor: 'linear-gradient(135deg,rgb(3, 3, 3),rgb(0, 0, 0))',
    emoji: '👑'
  }
];

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    ttq?: {
      track: (event: string, data?: any) => void;
    };
  }
}

const Ingressos = () => {
  const handleClick = (origem: string) => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Lead', {
        origem,
        tipo: 'Ingresso'
      });
    }

    if (window.ttq) {
      window.ttq.track('Lead', {
        origem,
        tipo: 'Ingresso'
      });
    }
  };

  return (
    <Box
      id="ingressos"
      sx={{
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper
          elevation={10}
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            background: 'linear-gradient(to right, #e69c47, #002f87)',
            padding: '60px',
            borderRadius: '16px',
            textAlign: 'center',
            border: '2px solid #E28D1C'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
            <span style={{ color: '#fff' }}>PRÉ-VENDA</span> LIBERADA!
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {ingressos.map((ingresso, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    padding: '25px',
                    borderRadius: '16px',
                    background: ingresso.cor,
                    textAlign: 'center'
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

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2} justifyContent="center" maxWidth={600}>
              <Grid item xs={12} sm={7}>
                <motion.a
                  href="https://www.sympla.com.br/evento/bitconxp-bitcoin-conference-experience/2862823"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #f5af19, #e69c47)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    fontSize: '1rem',
                    width: '100%'
                  }}
                  onClick={() => handleClick('Comprar Sympla')}
                >
                  Comprar no Sympla <LaunchIcon sx={{ ml: 1 }} />
                </motion.a>
              </Grid>

              <Grid item xs={10} sm={7} >
                <motion.a
                  href="https://wa.me/5561999180458"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    fontSize: '1rem',
                    width: '100%'
                  }}
                  onClick={() => handleClick('WhatsApp')}
                >
                  Falar no WhatsApp <LaunchIcon sx={{ ml: 1 }} />
                </motion.a>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Ingressos;
