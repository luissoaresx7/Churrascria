import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import logo from '../../assets/images/Logo.png';

import "../../styles/footer.css";

import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
          <div className=" footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>{" "}</h5>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Alias sint, atque deleniti ea rem nesciunt.
            </p>

          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className="footer__title">Horário de entrega</h5>
          <ListGroup className="delivery__time-list">
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Quinta - Domingo </span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Segunda - Quarta</span>
              <p>Fechado</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className="footer__title">Contato</h5>
          <ListGroup className="delivery__time-list">

          <ListGroupItem className="delivery__time-item border-0 ps-0">
              <p>Localizão: Mais perto que você imagina. </p>
            </ListGroupItem>

            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Telefone: 02140028922 </span>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Email: churrasCria@gmail.com</span>   
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className="footer__title">Informações</h5>
        <p>Inscreva-se ou informações</p>
          <div className="newsletter">
            <input type="email" placeholder="Digite seu e-mail" />
            <span>
              <i className="ri-send-plane-line"></i>
            </span>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">

        <Col lg='6' md="6" >
          <p className="copyright__text">	&copy; Copyright - 2023, website made by ChurrasCria. All
            Rights Reserved.</p>
        </Col>
        <Col lg='6' md="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className="m-0">Seguir: </p>
            <span>
              {" "}
              <Link to=''>
                <i className="ri-facebook-line"></i>
              </Link>
            </span>

            <span>
              {" "} 
              <Link to=''>
                <i className="ri-github-line"></i>
              </Link>
            </span>

            <span> 
              {" "}
              <Link to=''>
                <i className="ri-instagram-line"></i>
              </Link>
            </span>

            <span> 
              {" "}
              <Link to=''>
                <i className="ri-linkedin-line"></i>
              </Link>
            </span>

          </div>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;