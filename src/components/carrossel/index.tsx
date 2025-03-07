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
    { src: '/assets/img_556.jpg', orientation: 'landscape' },
    { src: '/assets/img_1556.jpg', orientation: 'landscape' },
    { src: '/assets/img778.JPEG', orientation: 'portrait' }, 
    { src: '/assets/IMG_3622.JPEG', orientation: 'landscape' },
    { src: '/assets/well1.jpeg', orientation: 'landscape' },
    { src: '/assets/well2.jpeg', orientation: 'portrait' }
];

const BitcoinBrasilia = () => {
    let sliderRef = React.useRef<any>(null); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        adaptiveHeight: true,
        arrows: false, 
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #e69c47, #002f87)',
                color: '#fff',
                padding: '80px 20px',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            {/* Título da Seção */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: '#fff' }}>
                Bitcoin, <span style={{ color: '#E28D1C' }}>Web3</span> e Conexões Reais – Veja Como Foi!
            </Typography>

            <Typography variant="body1" sx={{ color: '#ccc', mb: 4, maxWidth: '800px', margin: '0 auto' }}>
            Confira os registros de eventos que marcaram a comunidade Bitcoin e Web3! 💡🔥
            Cada imagem conta uma história de aprendizado, networking e inovação. Agora, chegou a sua vez de fazer parte dessa revolução!
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
