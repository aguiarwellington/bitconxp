import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert
} from '@mui/material';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/movepgyn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ nome: '', email: '', telefone: '' });
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: '100px 5%',
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: '#fff', mb: 3 }}
      >
        Cadastre-se para saber mais
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2, width: 'fit-content', px: 3, mx: 'auto' }}>
          Obrigado! Em breve entraremos em contato.
        </Alert>
      )}

      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        {['nome', 'email', 'telefone'].map((field) => (
          <TextField
            key={field}
            fullWidth
            label={field === 'nome' ? 'Nome' : field === 'email' ? 'Email' : 'Telefone'}
            name={field}
            type={field === 'email' ? 'email' : field === 'telefone' ? 'tel' : 'text'}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{
              mb: 2.5,
              input: {
                color: '#fff',
                padding: '14px',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#ffffff22',
                borderRadius: '12px',
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#00c851' },
              },
            }}
          />
        ))}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#00c851',
            color: '#fff',
            fontWeight: 'bold',
            py: 1.5,
            fontSize: '1rem',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#00a63f',
            },
          }}
        >
          ENVIAR
        </Button>
      </Box>
    </Box>
  );
}
