import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';
import './Home.css';
import img from '../../Image/r15.jpg';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
// use hooks
const Home = () => {
    const[reviews,setReviews] = Usereviews();
   
    return (
        <div>
           <Container>
               <Row>
                   <Col md='7' sm='12'>
                       <div className='title-container'>
                            <h2 className='web-title text-success'>Yamaha R15 New Bake</h2>
                            <h2 className='web-title text-primary'>It is powered by the same 155cc</h2>

                       </div>
                       <div className='description-container'>
                           <p>R15 is Letest bike in the wold. It is vary beautiful bake and awasame Apart from the new colours, the motorcycle remains the same mechanically for the Indonesian market.Yamaha has launched three new colours of the 2019 YZF R15 V3.0 in the Indonesian market.</p>
                       </div>
                        <button className='button-design'>Live demo</button>
                   </Col>
                   <Col md='5' sm='12'>
                       <div className='show-container mt-3'>
                           <img className='show-img' src={img} alt="" />
                       </div>
                   </Col>
               </Row>
               <Row>
                 <h2 className='web-title text-primary text-center py-5'>Client review</h2>
                   <Cart></Cart>
                 
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/review'>See All Reviews</Link>
             </div>
        </div>
    );
};

export default Home;