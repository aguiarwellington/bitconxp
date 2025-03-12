import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Stack, Grid, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        ingressoSelecionado: ""
    });

    const [ingressoEscolhido, setIngressoEscolhido] = useState(null);
    const [mensagemStatus, setMensagemStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
            mensagem: `Estou interessado em compro o : ${ingressoEscolhido?.titulo || ""}.\n\nNome: ${prevInputs.nome || value}\nTelefone: ${prevInputs.telefone || value}`
        }));
    };

    const handleSelectIngresso = (ingresso) => {
        setIngressoEscolhido(ingresso);
        setFormInputs(prevInputs => ({
            ...prevInputs,
            ingressoSelecionado: ingresso.titulo,
            mensagem: `Estou interessado em comprar o: ${ingresso.titulo}.\n\nNome: ${prevInputs.nome || "Nome não informado"}\nTelefone: ${prevInputs.telefone || "Telefone não informado"}`
        }));
    };

    const handleWhatsApp = () => {
        const mensagemWhatsApp = `Olá, gostaria de comprar o ingresso: *${formInputs.ingressoSelecionado}*`;
        return `https://wa.me/556199180458?text=${encodeURIComponent(mensagemWhatsApp)}`;
    };

    const handleVoltar = () => {
        setIngressoEscolhido(null);
        setFormInputs({ nome: "", email: "", telefone: "", mensagem: "", ingressoSelecionado: "" });
        setMensagemStatus("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeKaqLIZO2NnoGAjVmn6Wj7jCOl6r_vdrI86KuTiwpiSAVvRA/formResponse";

        const formPayload = new FormData();
        formPayload.append("entry.1209685076", formInputs.nome);
        formPayload.append("entry.796714753", formInputs.email);
        formPayload.append("entry.2008765561", formInputs.telefone);
        formPayload.append("entry.3456789012", formInputs.ingressoSelecionado);
        formPayload.append("entry.2023437147", formInputs.mensagem);

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                body: formPayload,
                mode: "no-cors",
            });

            setMensagemStatus("✅ Formulário enviado com sucesso!");
        } catch (error) {
            setMensagemStatus("❌ Erro ao enviar. Tente novamente.");
        }
    };

    return (
        <Box id="ingressos" sx={{ background: 'linear-gradient(to right, #e69c47, #002f87)', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Paper elevation={10} sx={{ maxWidth: 900, margin: '0 auto', background: 'linear-gradient(to right, #e69c47, #002f87)', padding: '60px', borderRadius: '16px', textAlign: 'center', border: '2px solid #E28D1C' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 2 }}>
                        <span style={{ color: '#fff' }}>PRÉ-VENDA</span> LIBERADA!
                    </Typography>

                    {!ingressoEscolhido ? (
                        <Grid container spacing={3} justifyContent="center">
                            {ingressos.map((ingresso, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Paper elevation={6} sx={{ padding: '25px', borderRadius: '16px', background: ingresso.cor, textAlign: 'center', cursor: 'pointer' }} onClick={() => handleSelectIngresso(ingresso)}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>{ingresso.emoji} {ingresso.titulo}</Typography>
                                        <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>{ingresso.descricao}</Typography>
                                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>{ingresso.preco}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <>
                            <Paper elevation={6} sx={{ padding: '25px', borderRadius: '16px', background: ingressoEscolhido.cor, textAlign: 'center', mb: 3 }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>{ingressoEscolhido.emoji} {ingressoEscolhido.titulo}</Typography>
                                <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>{ingressoEscolhido.descricao}</Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>{ingressoEscolhido.preco}</Typography>
                            </Paper>

                            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 3 }}>
                                <TextField label="Nome" name="nome" value={formInputs.nome} onChange={handleChange} required fullWidth />
                                <TextField label="E-mail" name="email" type="email" value={formInputs.email} onChange={handleChange} required fullWidth />
                                <TextField label="Telefone" name="telefone" value={formInputs.telefone} onChange={handleChange} required fullWidth />
                                <TextField label="Mensagem" name="mensagem" value={formInputs.mensagem} onChange={handleChange} fullWidth multiline rows={4} />

                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Button href={handleWhatsApp()} target="_blank" variant="contained" sx={{ backgroundColor: '#25D366', color: '#fff' }}>
                                        <WhatsAppIcon sx={{ mr: 1 }} /> Comprar pelo WhatsApp
                                    </Button>
                                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#E28D1C', color: '#fff' }}>
                                        <SendIcon sx={{ mr: 1 }} /> Enviar Formulário
                                    </Button>
                                </Stack>
                                {mensagemStatus && <Typography sx={{ mt: 2, color: '#00e676' }}>{mensagemStatus}</Typography>}

                                <Button onClick={handleVoltar} variant="outlined" sx={{ color: '#fff', borderColor: '#fff', mt: 3 }}>
                                    <ArrowBackIcon sx={{ mr: 1 }} /> Escolher outro ingresso
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </motion.div>
        </Box>
    );
};

export default Ingressos;
