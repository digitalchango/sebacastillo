import React from "react";
//import { Row, Col, Container, ListGroup, Nav } from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderView from './HeaderView';
import InicioView from './InicioView';
import FooterView from './FooterView';
const HomeView = (props) => {
  return (
    <div>
      <HeaderView/>
      <InicioView/>
      <FooterView/>
    </div>
  );
};
export default HomeView;