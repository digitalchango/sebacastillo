import React from "react";
import { Row, Col, Container, ListGroup, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HeaderView = (props) => {
    return (
        <header className='sticky-top bg-dark text-white pt-3'>
            <Container>
                <Row>
                    <Col xs={3}><span>Sebastian Castillo</span></Col>
                    <Col xs={6}>
                        <Navbar id='menu-header' bsPrefix='navbar navbar-dark navbar-expand-md bg-dark justify-content-center text-white'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav bsPrefix='nav-item d-none d-sm-none d-md-block'>
                                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                                </Nav>
                                <Nav bsPrefix='nav-item d-none d-sm-none d-md-block'>
                                    <Nav.Link href="#misproyectos">Mis proyectos</Nav.Link>
                                </Nav>
                                <Nav bsPrefix='nav-item d-none d-sm-none d-md-block'>
                                    <Nav.Link href="#sobremi">Sobre mí</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col xs={3}>
                        <ListGroup as='ul' bsPrefix='list-inline text-right' >
                            <ListGroup.Item as='li' bsPrefix='list-inline-item'>
                                <a href='https://github.com/sebacast'>
                                    <Col as='span' bsPrefix='social-header-footer'>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </Col>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' bsPrefix='list-inline-item'>
                                <a href='https://www.linkedin.com/in/sebastian-castillo-579840186/'>
                                    <Col as='span' bsPrefix='social-header-footer'>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </Col>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' bsPrefix='list-inline-item'>
                                <a href='mailto:sebacastriv@gmail.com'>
                                    <Col as='span' bsPrefix='social-header-footer'>
                                        <FontAwesomeIcon icon={['fab', 'google']} />
                                    </Col>
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
export default HeaderView;