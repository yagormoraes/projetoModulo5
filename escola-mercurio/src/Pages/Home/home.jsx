import React from 'react';
import { Carousel } from 'react-bootstrap';
import Formatura from '../../Assets/formaturaMoca.jpg'


function Home () {
    return (
        <>
        <section>
        <Carousel>
            <Carousel.Item>
            <img
            className="d-block img2"
            src={Formatura}
            alt="Jovens em sua formatura"
            />
            <Carousel.Caption>
            <h3>35ª Formatura na Escola Mercúrio</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>35ª Formatura na Escola Mercúrio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </section>

        <main>
            <div>
        <p>oi</p>
            </div>
            </main>
            </>
    );
}

export default Home