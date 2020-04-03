import React from "react";
import { CardGroup, Card, Container, Carousel, Media } from "react-bootstrap";
const InicioView = (props) => {
    return (
        <div id='main'>
            {/* Slider */}
            <Container fluid id='inicio'>
                <Carousel interval='3000'>
                    <Carousel.Item bsPrefix='carousel-item w-100'>
                        <img
                            className="d-block w-100"
                            src="img/reactexpressmongo.jpeg"
                            alt="React, Express, Mongodb"

                        />

                    </Carousel.Item>
                    <Carousel.Item bsPrefix='carousel-item w-100'>
                        <img
                            className="d-block w-100"
                            src="img/nodedev.jpeg"
                            alt="Node js developer"

                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            {/* Slider */}

            {/* Proyectos */}
            <Container bsPrefix='container-fluid bg-light my-4' id='misproyectos'>
                <h1 className="text-center my-3">Proyectos</h1>
            </Container>
            <Container>
                <CardGroup>
                    <Card>
                        {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
                        <Card.Body>
                            <Card.Title>Mapa social</Card.Title>
                            <Card.Text>
                                Desarrollado en React js + Express js + Mongodb + Mysql. Permite compartir la ubicación entre contactos que se agregan mutuamente.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href='https://github.com/sebacast/mapa-social-reactjs-express'><small className="text-muted">Ver más</small></a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
                        <Card.Body>
                            <Card.Title>React Native Login</Card.Title>
                            <Card.Text>
                                Desarrollado en React Native + Express js + Mongodb. Es una estructura preparada para realizar un login desde el celular, usando verificación por email
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href='https://github.com/sebacast/react-native-mongodb-login'><small className="text-muted">Ver más</small></a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
                        <Card.Body>
                            <Card.Title>Instagram PHP</Card.Title>
                            <Card.Text>
                                Desarrollado en PHP + Mongodb. Clase Instagram con metodos para obtener y almacenar datos de las publicaciones y comentarios de usuarios Instagram.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href='https://github.com/sebacast/Instagram-php'><small className="text-muted">Ver más</small></a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
            {/* Proyectos */}

            {/* Sobre mí */}
            <Container bsPrefix='container-fluid bg-light my-4' id='sobremi'>
                <h1 className="text-center my-3">Sobre mí</h1>
            </Container>
            <Container >
                <Media>
                    
                    <img
                        width={'40%'}
                        //height={225}
                        className="rounded-circle mr-3 pt-4 nav-item d-none d-sm-none d-md-block"
                        src="img/foto.jpeg"
                        alt="Sebastian Castillo"
                    />
                    <Media.Body>
                        <p className='text-justify'> 
                            Hola, soy Sebastián. Analista en sistemas, Desarrollador de software y Músico.
                            <br/> El año pasado, egresé de Técnico Superior en Análisis de Sistemas,
                            en el instituto público ITFS-21, dando por finalizado un ciclo académico que inició
                            en 2017, cuando llegué a Buenos Aires. El conocimiento adquirido, me permitió incorporar
                            un marco metodologico, a una de mis grandes pasiones; el desarrollo de software.
                            <br/> Mientras estudiaba, tuve la oportunidad de desempeñarme programando en PHP, en la empresa Tech
                            To Perfection (retailer). PHP me parece un lenguaje muy cómodo, y el hecho de incorporar la clase mysqli, 
                            lo vuelve extremadamente práctico para el desarrollo de aplicaciones web, con base de datos Mysql.
                            Como sea, en un periodo de incursionar en otras tecnologías (como Python con Flask, o el uso de Mongodb desde
                            el php mongo driver, o con pymongo) empecé a usar Node js, con React + Express + Mongodb; hasta
                            ahora, es mi stack de desarrollo favorito.
                        </p>
                    </Media.Body>
                </Media>
            </Container>
        </div>
    );
};
export default InicioView;