import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterView = (props) => {
    return (
        <footer className='bg-dark text-white pt-3' >
            <Container bsPrefix='container'>
                <Row>
                    <Col xs={6}><span className='text-center'>Sebastian Castillo Rivero <p></p> sebacastriv@gmail.com</span> </Col>
                    <Col xs={6}>
                        <a href='https://github.com/sebacast' className='text-center'>
                            <p className='social-header-footer'>
                                Github<FontAwesomeIcon icon={['fab', 'github']} />
                            </p>
                        </a>
                        <a href='https://www.linkedin.com/in/sebastian-castillo-579840186/' className='text-center'>
                            <p className='social-header-footer'>
                                Linked<FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default FooterView;