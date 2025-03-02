import React from 'react';
import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Importação dos estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Lista de imagens do evento anterior
const eventImages = [
    { src: '/assets/IMG_1677.JPEG', orientation: 'landscape' },
    { src: '/assets/IMG_1563.JPEG', orientation: 'landscape' },
    { src: '/assets/img_1556.jpg', orientation: 'landscape' },
    { src: '/assets/img-336.jpg', orientation: 'portrait' }, 
    { src: '/assets/imgwell.jpeg', orientation: 'landscape' },
];

const BitcoinBrasilia = () => {
    let sliderRef = React.useRef<any>(null); // Correção do erro TypeScript

    // Configuração do carrossel
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        adaptiveHeight: true,
        arrows: false, // Desabilita setas padrão do slick-carousel
    };

    return (
        <Box
            sx={{
                background: 'radial-gradient(circle, #1a1a1a 30%, #000000 90%)',
                color: '#fff',
                padding: '80px 20px',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            {/* Título da Seção */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#E28D1C', mb: 4 }}>
                🚀 Bitcoin Brasília - Relembre o Último Evento!
            </Typography>

            <Typography variant="body1" sx={{ color: '#ccc', mb: 4, maxWidth: '800px', margin: '0 auto' }}>
                O <strong>Bitcoin Brasília</strong> reuniu os maiores entusiastas do setor, proporcionando um ambiente único de aprendizado, conexões e inovação. 
                Reviva os melhores momentos do evento passado e prepare-se para o <strong>Bitcoin Fortaleza 2025</strong>!
            </Typography>

            {/* Carrossel de imagens ajustado */}
            <Box sx={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                    {eventImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card
                                sx={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    width: '100%',
                                    boxShadow: '0px 0px 20px rgba(255, 165, 0, 0.5)', // Sombra laranja futurística
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={image.src}
                                    alt={`Evento Bitcoin Brasília ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: '550px',
                                        objectFit: image.orientation === 'portrait' ? 'contain' : 'cover',
                                        backgroundColor: '#121212',
                                    }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </Slider>

                {/* Botões de Navegação */}
                <IconButton
                    onClick={() => sliderRef.current?.slickPrev()}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#E28D1C',
                        zIndex: 2,
                        '&:hover': { backgroundColor: 'rgba(255, 165, 0, 0.7)' },
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                <IconButton
                    onClick={() => sliderRef.current?.slickNext()}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '0',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#E28D1C',
                        zIndex: 2,
                        '&:hover': { backgroundColor: 'rgba(255, 165, 0, 0.7)' },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default BitcoinBrasilia;
