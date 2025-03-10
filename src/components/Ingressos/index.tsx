import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Stack, Grid, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const ingressos = [
    { titulo: 'Bitcoin Day', descricao: 'Acesso ao primeiro dia do evento, com palestras e cursos exclusivos sobre Bitcoin.', preco: 'R$ 200,00', cor: 'linear-gradient(135deg, #f5af19, #e69c47)', emoji: '₿' },
    { titulo: 'WEB3 Day', descricao: 'Acesso ao segundo dia do evento, explorando inovação, descentralização e Web3.', preco: 'R$ 350,00', cor: 'linear-gradient(135deg, #e69c47, #f5af19)', emoji: '🌐' },
    { titulo: 'Full Experience', descricao: 'Acesso completo aos dois dias do evento, incluindo todas as palestras e cursos.', preco: 'R$ 500,00', cor: 'linear-gradient(135deg, #002f87, #e69c47)', emoji: '🔥' },
    { titulo: 'VIP Experience', descricao: 'Acesso total, brindes exclusivos, sorteios e um jantar especial com os palestrantes.', preco: 'R$ 1000,00', cor: 'linear-gradient(135deg, #8B0000, #FF4500)', emoji: '👑' }
];

const Ingressos = () => {
    const [formInputs, setFormInputs] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const [statusMessage, setStatusMessage] = useState(""); // Estado para exibir mensagem

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeKaqLIZO2NnoGAjVmn6Wj7jCOl6r_vdrI86KuTiwpiSAVvRA/formResponse";

        const formPayload = new FormData();
        formPayload.append("entry.1209685076", formInputs.nome);
        formPayload.append("entry.796714753", formInputs.email);
        formPayload.append("entry.2008765561", formInputs.telefone);
        if (formInputs.mensagem) { // Só envia mensagem se for preenchida
            formPayload.append("entry.2023437147", formInputs.mensagem);
        }

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                body: formPayload,
                mode: "no-cors",
            });

            setStatusMessage("Mensagem enviada com sucesso! ✅"); // Atualiza a mensagem
            setFormInputs({ nome: "", email: "", telefone: "", mensagem: "" }); // Reseta os campos

        } catch (error) {
            setStatusMessage("❌ Erro ao enviar. Tente novamente.");
        }
    };

    return (
        <Box id="ingressos" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Paper elevation={10} sx={{ maxWidth: 850, margin: '0 auto', background: 'linear-gradient(to right, #e69c47, #002f87)', padding: '50px', borderRadius: '16px', textAlign: 'center', border: '2px solid #E28D1C' }}>
                    
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
                        <span style={{ color: '#fff' }}>PRÉ-VENDA</span> LIBERADA!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', mb: 4 }}>
                        **Garanta seu ingresso agora antes que os preços aumentem!**
                    </Typography>

                    {/* Opções de ingressos */}
                    <Grid container spacing={3} justifyContent="center">
                        {ingressos.map((ingresso, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper elevation={6} sx={{ padding: '25px', borderRadius: '16px', background: ingresso.cor, textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '10px 10px 20px rgba(0,0,0,0.3)' } }}>
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

                    {/* Botão de Compra via WhatsApp */}
                    <Stack direction="row" justifyContent="center" sx={{ mt: 5 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="contained" sx={{ backgroundColor: '#25D366', color: '#fff', borderRadius: '10px', padding: '12px 24px', fontSize: '18px', textTransform: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} href="https://wa.me/556199180458?text=Olá,%20quero%20comprar%20meu%20ingresso!" target="_blank">
                                <WhatsAppIcon sx={{ fontSize: 28 }} />
                                Fale com a equipe
                            </Button>
                        </motion.div>
                    </Stack>

                    {/* OU Separador */}
                    <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>OU</Typography>

                    {/* Formulário de Contato */}
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 3 }}>
                        <TextField label="Nome" name="nome" value={formInputs.nome} onChange={handleChange} required fullWidth />
                        <TextField label="E-mail" name="email" type="email" value={formInputs.email} onChange={handleChange} required fullWidth />
                        <TextField label="Telefone" name="telefone" value={formInputs.telefone} onChange={handleChange} required fullWidth />
                        <TextField label="Coloque seu nome e número na mensagem" name="mensagem" value={formInputs.mensagem} onChange={handleChange} fullWidth multiline rows={4} />

                        <Button type="submit" variant="contained" sx={{ backgroundColor: '#E28D1C', color: '#fff', borderRadius: '8px', padding: '10px 20px', fontSize: '18px', textTransform: 'none', mt: 2 }}>
                            <SendIcon sx={{ mr: 1 }} />
                            Entraremos em contato
                        </Button>

                        {/* Mensagem de status do envio */}
                        {statusMessage && (
                            <Typography variant="body1" sx={{ mt: 2, color: statusMessage.includes("sucesso") ? "#00e676" : "red" }}>
                                {statusMessage}
                            </Typography>
                        )}
                    </Box>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default Ingressos;
