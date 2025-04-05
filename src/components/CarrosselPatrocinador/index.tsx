import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Link } from '@mui/material';

const logos = [
  { src: "/assets/diySec.png", url: "https://diyseclab.io" },
  { src: "/assets/logoalfred.png", url: "https://www.alfredp2p.io/pt" },
  { src: "/assets/logosats.png", url: "https://www.satscapital.com.br" },
  { src: "/assets/Mib.jpeg", url: "https://www.instagram.com/mibetter_ag" },
  { src: "/assets/diySec.png", url: "https://diyseclab.io" },
  { src: "/assets/logoalfred.png", url: "https://www.alfredp2p.io/pt" },
  { src: "/assets/logosats.png", url: "https://www.satscapital.com.br" },
  { src: "/assets/Mib.jpeg", url: "https://www.instagram.com/mibetter_ag" },
  { src: "/assets/diySec.png", url: "https://diyseclab.io" },
  { src: "/assets/logoalfred.png", url: "https://www.alfredp2p.io/pt" },
  { src: "/assets/logosats.png", url: "https://www.satscapital.com.br" },
  { src: "/assets/Mib.jpeg", url: "https://www.instagram.com/mibetter_ag" },
  { src: "/assets/diySec.png", url: "https://diyseclab.io" },
  { src: "/assets/logoalfred.png", url: "https://www.alfredp2p.io/pt" },
  { src: "/assets/logosats.png", url: "https://www.satscapital.com.br" },
  { src: "/assets/Mib.jpeg", url: "https://www.instagram.com/mibetter_ag" },
  
];

export default function CarroselPatrocinador() {
  return (
    <Box
      sx={{
        width: "100vw",
        background: "linear-gradient(90deg, #7c5c3b, #61492f)",
        py: 2,
      }}
    >
      <Marquee
        gradient={false} 
        speed={120} 
        pauseOnHover={true} 
        loop={0}       >
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 4 }}
          >
            <Box
              component="img"
              src={logo.src}
              alt=""
              sx={{
                width: 100,
                height: 60,
                objectFit: "contain",
              }}
            />
          </Link>
        ))}
      </Marquee>
    </Box>
  );
}
