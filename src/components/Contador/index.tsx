import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const targetDate = new Date(Date.UTC(2025, 4, 3, 0, 0, 0));

const getTimeRemaining = () => {
  const now = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
  const total = targetDate.getTime() - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  // Dias baseados em diferença de calendário (ignora hora)
  const nowDate = new Date();
  const eventDate = new Date(Date.UTC(2025, 4, 3));
  const diffTime = eventDate.getTime() - Date.UTC(
    nowDate.getUTCFullYear(),
    nowDate.getUTCMonth(),
    nowDate.getUTCDate()
  );
  const days = Math.round(diffTime / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};


export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
      if (remaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'dias', value: timeLeft.days },
    { label: 'horas', value: timeLeft.hours },
    { label: 'min', value: timeLeft.minutes },
    { label: 'seg', value: timeLeft.seconds },
  ];

  return (
    <Box
    sx={{
        padding: '100px 5%',
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        textAlign: 'center',
    }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: '#fff',
          mb: 4,
          fontSize: { xs: '20px', sm: '28px' },
        }}
      >
        Contagem Regressiva para o Evento
      </Typography>

      <Grid container spacing={2} justifyContent="center" maxWidth="lg" sx={{ mx: 'auto' }}>
        {items.map(({ label, value }, idx) => (
          <Grid item xs={3} sm={2} md={2} key={idx}>
            <Box
              sx={{
                background: '#ffffff22',
                borderRadius: '16px',
                py: 2,
                px: 1,
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(8px)',
                transition: '0.3s',
                '&:hover': {
                  background: '#ffffff33',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: { xs: '24px', sm: '32px' },
                }}
              >
                {value < 10 ? `0${value}` : value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: '#fff', opacity: 0.8, fontSize: '14px', textTransform: 'uppercase' }}
              >
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
