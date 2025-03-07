import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'Sobre', path: 'sobre' },
    { label: 'Workshops', path: 'workshops' },
    { label: 'Palestrantes', path: 'palestrantes' },
    { label: 'Local e Data', path: 'local' },
    { label: 'Ingressos', path: 'ingressos' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Função para rolar até a seção correspondente
    const handleScroll = (id: string) => {
        setTimeout(() => {
            const element = document.querySelector(`[id="${id}"]`) as HTMLElement;
            if (element) {
                const offset = 80;
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth',
                });
                setActiveSection(id);
                setMobileOpen(false);
            }
        }, 200);
    };

    // Detectar seção visível ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = 'home';

            menuItems.forEach((item) => {
                const element = document.querySelector(`[id="${item.path}"]`) as HTMLElement;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = item.path;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a', color: '#fff', zIndex: 1000 }}>
            <Toolbar sx={{ justifyContent: 'space-between', paddingX: 2 }}>
                
                {/* Logo (Aumentada) */}
                <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={() => handleScroll('home')}>
                    <img 
                        src="/assets/logo.png" 
                        alt="Logo" 
                        style={{ width: '200px', height: 'auto' }} // Aumentei o tamanho do logo
                    />
                </Box>

                {/* Menu Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.label}
                            onClick={() => handleScroll(item.path)}
                            sx={{
                                color: activeSection === item.path ? '#ffa500' : '#fff',
                                fontSize: '13px',
                                mx: 1,
                                padding: '5px 10px',
                                '&:hover': { color: '#ffa500' },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* Botão de Participar */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#E28D1C',
                            color: '#fff',
                            borderRadius: '20px',
                            fontSize: '13px',
                            '&:hover': { backgroundColor: '#d47a0b' }
                        }}
                        onClick={() => handleScroll('ingressos')}
                    >
                        Participar
                    </Button>
                </Box>

                {/* Ícone do Menu Hamburguer (Mobile) */}
                <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }} onClick={() => setMobileOpen(true)}>
                    <MenuIcon />
                </IconButton>

                {/* Menu Mobile */}
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    sx={{ '& .MuiDrawer-paper': { backgroundColor: '#1a1a1a', color: '#fff', width: '250px' } }}
                >
                    <List sx={{ textAlign: 'center', padding: '20px' }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.label} onClick={() => handleScroll(item.path)} sx={{ cursor: 'pointer' }}>
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        textAlign: 'center',
                                        color: activeSection === item.path ? '#ffa500' : '#fff',
                                        fontWeight: 'bold',
                                    }}
                                />
                            </ListItem>
                        ))}

                        {/* Botão de Participar */}
                        <ListItem sx={{ justifyContent: 'center', marginTop: '15px' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#E28D1C',
                                    color: '#fff',
                                    borderRadius: '20px',
                                    width: '100%',
                                    '&:hover': { backgroundColor: '#d47a0b' }
                                }}
                                onClick={() => handleScroll('ingressos')}
                            >
                                Participar
                            </Button>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
