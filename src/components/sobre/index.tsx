import React from 'react';
import {
  Box,
  Typography,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const Sobre = () => {
  const handleClick = () => {
    // 🔥 Facebook Pixel: rastreia clique no botão "Adquirir Ingresso"
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'AdquirirIngresso',
      });
    }

    // Continua com o scroll para #ingressos
    const element = document.getElementById('ingressos');
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="sobre"
      sx={{
        padding: '80px 5%',
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Título */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '32px', md: '48px' },
            color: '#FF8C00',
            textShadow: '3px 3px 5px rgba(0,0,0,0.3)',
          }}
        >
          <span>O Futuro do Bitcoin e </span>
          Web3 Começa Aqui!
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: { xs: '18px', md: '24px' },
            mt: 2,
            mb: 6,
          }}
        >
          Não fique de fora da maior experiência imersiva de Bitcoin e Web3 do Nordeste! ⚡<br />
          Aprenda, conecte-se e viva o mercado cripto de forma segura, interativa e revolucionária.
        </Typography>

        {/* Destaques */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={6}
          mt={6}
        >
          {[
            "2 dias repletos de conhecimento e conexões valiosas entre entusiastas do Bitcoin e Web3.",
            "Aprenda com os melhores e esteja preparado para proteger seu patrimônio e potencializar seus lucros!"
          ].map((texto, index) => (
            <Box
              key={index}
              sx={{
                background: 'linear-gradient(to right, #ffbb33, #ff8c00)',
                padding: '20px 30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '6px 6px 12px rgba(0,0,0,0.2)',
                maxWidth: '400px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: '#000',
                  fontSize: '22px',
                  lineHeight: '1.4',
                }}
              >
                <strong>{texto}</strong>
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Botão com rastreamento */}
        <Box display="flex" justifyContent="center" mt={6}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF8C00',
                color: '#000',
                borderRadius: '25px',
                padding: '15px 40px',
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#ffbb33',
                },
              }}
              onClick={handleClick}
            >
              🎟️ Adquira já seu ingresso!
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Sobre;
