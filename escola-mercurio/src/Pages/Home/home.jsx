import React from 'react';
import { Carousel } from 'react-bootstrap';
import Matricula from '../../Assets/matricula.png';
import Curso from '../../Assets/curso.png';
import Enem from '../../Assets/enem.png';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Home () {
    return (
    <>
        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagem-carrossel"
                        src={Matricula}
                        alt="Imagem informando que matrículas estão abertas"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 imagem-carrossel"
                        src={Curso}
                        alt="Jovens em curso técnico"
                    />
                    </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 imagem-carrossel"
                        src={Enem}
                        alt="Jovens em sua formatura"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
        <div>
            <p> </p>
        </div>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        <div>
            <p> </p>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>    
        <div>
            <p>

            </p>
        </div>
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
                <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </>
    );
}

export default Home