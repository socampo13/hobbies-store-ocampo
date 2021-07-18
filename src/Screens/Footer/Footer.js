import React from 'react';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';


export default function Footer() {
    return <footer>

            <Box px={{ xs: 3, sm: 10}} py={{xs: 5, sm: 10}} bgcolor="text.secondary">

                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Ayuda</Box>      {/*  Sección ayuda  */}
                            <Box>
                                <Link href="https://www.google.com/" color="inherit">
                                    Contáctanos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.google.com/" color="inherit">
                                    Reclamos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.google.com/" color="inherit">
                                    Politicas de privacidad y tratamientos de datos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.google.com/" color="inherit">
                                    Atención al cliente
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>          {/* Redes sociales */}
                            <Box borderBottom={1}>Síguenos</Box>
                            <Box>
                                <Link href="https://www.facebook.com/" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.instagram.com/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" color="inherit">
                                    Gmail
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://web.whatsapp.com/" color="inherit">
                                    WhatsApp
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>          {/* Pedidos */}
                            <Box borderBottom={1}>Pedidos especiales</Box>
                            <Box>
                                <Link href="https://devir.co/categoria-producto/board-games/" color="inherit">
                                    Juegos de mesa
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.gamestop.com/" color="inherit">
                                    Videojuegos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://devir.co/categoria-producto/heroclix/" color="inherit">
                                    Ediciones limitadas
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://devir.co/categoria-producto/tcg/" color="inherit">
                                    Libros
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                        The Hobbies Store &reg; {new Date().getFullYear()}
                    </Box>
                </Container>

            </Box>

           </footer>
}