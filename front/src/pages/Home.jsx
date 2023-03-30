import { useState ,useEffect } from 'react';

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css';

import { Link } from 'react-router-dom';

import Category from '../components/UI/category/Category';

import '../styles/home.css';

import featureimg01 from '../assets/images/service-01.png';
import featureimg02 from '../assets/images/service-02.png';
import featureimg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products.js';

import foodCategoryImg01 from '../assets/images/carne.png';
import foodCategoryImg02 from '../assets/images/bebida.png';
import foodCategoryImg03 from '../assets/images/acompanhamento.png';
import foodCategoryImg04 from '../assets/images/sobremesa.png';

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import Restaurant from '../components/UI/product-card/Restaurant.jsx';

import whyImg from '../assets/images/location.png';

import networkImg from "../assets/images/network.png";

import DescricaoSlider from '../components/UI/slider/DescricaoSlider';


const featureData = [
  {
    title:'Entrega rápida',
    imgUrl: featureimg01,
    desc: "Entregadores expêrientes para entrega rápida e eficiente."
  },
  {
    title:'Super jantar',
    imgUrl: featureimg02,
    desc: "Temos ótimas opções variadas para jantar."
  },
  {
    title:'Fácil de pegar',
    imgUrl: featureimg03,
    desc: "Escolha seu produto com fácilidade no site."
  },
];

const Home = () => {

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotCarne, setHotCarne] = useState([])

  useEffect(()=>{
    const filteredCarne = products.filter(item=> item.category === "Carne")
    const sliceCarne = filteredCarne.slice(0,4)
    setHotCarne(sliceCarne)
  },[])

useEffect(() => {
  if (category === "ALL") {
    setAllProducts(products);
  }

  if (category === "CARNE") {
    const filteredProducts = products.filter((item) => item.category === "Carne");

    setAllProducts(filteredProducts);
  }

  if (category === "BEBIDA"){
    const filteredProducts = products.filter((item) => item.category === "Bebida");

    setAllProducts(filteredProducts);
  }

  if (category === "ACOMPANHAMENTO"){
    const filteredProducts = products.filter((item) => item.category === "Acompanhamento");

    setAllProducts(filteredProducts);
  }

  if (category === "SOBREMESA"){
    const filteredProducts = products.filter((item) => item.category === "Sobremesa");

    setAllProducts(filteredProducts);
  }
},[category]);


  return (
  <Helmet title='Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
            <h5 className="mb-3">Maneira fácil de fazer um pedido</h5>
            <h1 className="mb-4 hero__title">
              <span> FAMINTO?</span> Apenas espere <br /> a comida na
              <span> sua porta</span>
            </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iusto libero, 
                earum saepe facilis explicabo dolor esse aperiam voluptatem eius laborum inventore qui!
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">Peça agora
                <i className="ri-arrow-right-s-line"></i>
                </button>

                <button className="all__foods-btn">
                  <Link to='/foods'>Ver todos os alimentos</Link>
                </button>
              </div>

              <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i className="ri-car-line"></i>
                  </span>{" "}
                   Sem taxa de envio
                  </p>

                <p className=" d-flex align-items-center gap-2 ">
                 <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                 </span>{" "}
                  Finalização de compra 100% segura
                </p>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className="w-100"  />
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section className="pt-0">
      <Category />
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h5 className="feature__subtitle mb-4">O que servimos</h5>
              <h2 className="feature__title">Apenas sinte-se em casa</h2>
                <h2 className="feature__title">
                  nós vamos<span> cuidar</span>
                </h2>
                <p className="mb-1 mt-4 feature__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, laudantium.
                </p>
                <p className="feature__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, saepe.{" "}
                </p>
          </Col>

          {featureData.map((item,index) => (
              <Col lg='4' md='6'sm='6' key={index} className='mt-5'>
                <div className="feature__item text-center px-5 py-3">
                  <img 
                   src={item.imgUrl}
                   alt="feature-img" 
                   className="w-25 mb-3" 
                   />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2>Restaurantes Parceiros</h2>
          </Col>
          
         {allProducts.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
            <Restaurant item={item} />
          </Col>
         ))}  
        </Row>
      </Container>
    </section>

    <section className="why__chosse-us">
      <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="why-tasty-treat" className='w-100'/>
            </Col>

            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Por que?! <span>ChurrasCria</span>
                </h2>
                <p className="tasty__treat-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, hic.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam possimus laudantium expedita ducimus asperiores,
                  sapiente nisi tempora placeat, ullam quasi ut.
                  Eum similique doloremque earum quam! Iusto rerum iure consequuntur.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className=" ri-checkbox-circle-line"></i> Alimentos frescos e saborosos
                    </p>
                   <p className=" choose__us-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, nulla.</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className=" ri-checkbox-circle-line"></i> Suporte de qualidade
                    </p>
                   <p className=" choose__us-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sequi.</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i className=" ri-checkbox-circle-line"></i> Peça de qualquer lugar{" "}
                    </p>
                   <p className=" choose__us-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sequi.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
      </Container>
    </section>

    <section>
      <Container className="pt-0">
        <Row>
          <Col lg='12' className="text-center mb-5">
            <h2>Hot Carne</h2>
          </Col>

          {
            hotCarne.map((item) =>(
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
    
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="depoimento ">
                <h5 className="depoimento__subtitle mb-4">Depoimento</h5>
                <h2 className="depoimento__title mb-4">Oque nossos <span>clientes </span>estão dizendo</h2>
                <p className="depoimento__desc">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, velit.

                </p>

                <DescricaoSlider />
            </div>
          </Col>

          <Col lg="6" md="6">
              <img src={networkImg} alt="depoimento-img" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  );
};

export default Home;
