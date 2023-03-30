import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';

import '../../../styles/category.css';

const categoryData = [
    {
        display:'Carne',
        imgUrl: categoryImg01
    },
    {
        display:'Bebida',
        imgUrl: categoryImg02
    },
    {
        display:'Acompanhamento',
        imgUrl: categoryImg03
    },
    {
        display:'Sobremesa',
        imgUrl: categoryImg04
    },
]

const Category = () => {
  return (
    <Container>
        
    </Container>
)};

export default Category;