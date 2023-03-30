// All images imported from images directory
import axios from 'axios';
import product_01_carne_01 from "../images/carne/picanha_nobre_01.jpg";
import product_01_carne_02 from "../images/carne/cupim_01.jpg";
import product_01_carne_03 from "../images/carne/costela_prime_01.jpg";
import product_01_carne_04 from "../images/carne/linguica_mineira_01.jpg";
import product_01_carne_05 from "../images/carne/fillet_01.jpg";
import product_04_sobremesa_01 from "../images/sobremesa/Bolo_de_cenoura.png";

const cardapios = []
const cardapio = async () => {
   try {
      const response = await axios.get('http://localhost:3001/cardapio');
      console.log(response.data);
      const resultCardapio = response.data
      cardapios.push(resultCardapio)
   } catch (error) {
      console.error(error);
   }
}

const products = cardapios;

    export default products;