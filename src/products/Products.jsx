import React,{useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from './assets/hamburger1.png';
import product2 from './assets/chicken.png';
import product3 from './assets/tenders.png';
import product4 from './assets/kasap.png';
import product5 from './assets/kids.png';
import product6 from './assets/olustur.png';
import product7 from './assets/frenchFries.png';
import product8 from './assets/onionRing.png';
import product9 from './assets/chickenTenders.png';
import product10 from './assets/cocaCola.png';
import product11 from './assets/pepsi.png';
import product12 from './assets/sprite.png';

import './Products.css';

const Products = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <h2 className='menu'>Menüler</h2>
      <div className='abc'>
      <Container>
        <Row className='menus'>
          <Col>
            <div className='product'>
              <img src={product1} alt='hamburger' className='products' /><br />
              <a href='/'>Local Burger Menü</a><br />
              <i>Local Burger+ İçecek</i>
              <button className='add' >Add</button>
              <h4 className='price'>80 TL</h4>
             
            </div>
           
          </Col>
          <Col>
            <div className='product'>
              <img src={product2} alt='hamburger' className='products' /><br />
              <a href='/'>Chicken Burger Menü</a><br />
              <i>Chicken Burger+Patates Kızartması+İçecek</i>
              <button className='add'>Add</button>
              <h4 className='price'>80 TL</h4>

            </div></Col>
          <Col>
            <div className='product'>
              <img src={product3} alt='tenders' className='products' /><br />
              <a href='/'>Chicken Tenders Menü</a><br />
              <i>6 Adet  Pane Çıkıt Tavuk+Patates Kızartması+içecek </i>
              <button className='add'>Add</button>
              <h4 className='price'>80 TL</h4>

            </div></Col>
        </Row>
      </Container>
      <Container>
        <Row className='menus'>
          <Col>
            <div className='product'>
              <img src={product4} alt='hamburger' className='products' /><br />
              <a href='/'>Double Kasap Burger Menü</a><br />
              <i>Double Kasap Burger+Patates Kızartması+İçecek</i>
              <button className='add'>Add</button>
              <h4 className='price one'>155 TL</h4>

            </div>

          </Col>
          <Col>
            <div className='product'>
              <img src={product5} alt='hamburger' className='products' /><br />
              <a href='/'>Chicken Kids Menü</a><br />
              <i>Kids Menü+Patates Kızartması+İçecek+Oyuncak </i>
              <button className='add'>Add</button>
              <h4 className='price two'>120 TL</h4>

            </div></Col>
          <Col>
            <div className='product'>
              <img src={product6} alt='tenders' className='products' /><br />
              <a href='/'>Hamburgerini Oluştur</a><br />
              <i>Özel burger köftesi,Seçeceğiniz malzemeler ile </i>
              <button className='add'>Add</button>
              <h4 className='price'>69 TL</h4>

            </div></Col>
        </Row>
      </Container>
      <h2 className='menu'>Yan Ürünler</h2>
      <Container>
        <Row className='menus'>
          <Col>
            <div className='product'>
              <img src={product7} alt='hamburger' className='products' /><br />
              <a href='/'>Patates Kızartması (Uzun)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>3 TL</h4>

            </div>

          </Col>
          <Col>
            <div className='product'>
              <img src={product8} alt='hamburger' className='products onion' /><br />
              <a href='/'>Soğan Halkası(6 Adet)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>18 TL</h4>

            </div></Col>
          <Col>
            <div className='product'>
              <img src={product9} alt='tenders' className='products tender' /><br />
              <a href='/'>Chicken Tenders (6 parça)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>64 TL</h4>

            </div></Col>
        </Row>
      </Container>
      <h2 className='menu'>İçecekler</h2>
      <Container>
        <Row className='menus'>
          <Col>
            <div className='product'>
              <img src={product10} alt='hamburger' className='products' /><br />
              <a href='/'>Coca-Cola(33cl)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>16 TL</h4>

            </div>

          </Col>
          <Col>
            <div className='product'>
              <img src={product11} alt='hamburger' className='products pepsi' /><br />
              <a href='/'>Pepsi(333 cl)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>16 TL</h4>

            </div></Col>
          <Col>
            <div className='product'>
              <img src={product12} alt='tenders' className='products sprite ' /><br />
              <a href='/'>Sprite (333cl)</a><br />
              <button className='add'>Add</button>
              <h4 className='price'>16 TL</h4>

            </div></Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default Products
