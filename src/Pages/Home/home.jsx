import React from 'react';
import '../Home/home.css'
import { Carousel } from 'react-bootstrap';
import Matricula from '../../Assets/matricula.png';
import Curso from '../../Assets/curso.png';
import Enem from '../../Assets/enem.png';
import Jogos from '../../Assets/jogos-escolares.png';
import Ciencias from '../../Assets/ciencias.png';
import Livros from '../../Assets/livro.png';
import Cronograma from '../../Assets/eventos.png'
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';




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
        <Card className='card-projeto'>
            <Card.Body>Projetos em Andamento</Card.Body>
        </Card>
        <div className='card-img'>
            <CardGroup>
                <Card className='card-menu'>
                    <Card.Img variant="top" src={Jogos} />
                    <Card.Body>
                    <Card.Title>Premiação dos Jogos Escolares 2022</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            <Card className='card-menu'>
                <Card.Img variant="top" src={Ciencias} />
                <Card.Body>
                <Card.Title>Concurso de Química Tecnológica</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-menu'>
                <Card.Img variant="top" src={Livros} />
                <Card.Body>
                <Card.Title>Novos grupos do Clube do Livro</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        <div>
            <p> </p>
        </div>

        <Card className='card-projeto'>
            <Card.Body>Cronograma e Eventos</Card.Body>
        </Card>
        
        <div className='agenda'>
        <Card.Img className='cronograma' variant="top" src={Cronograma} />
        <div>
            <p></p>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Data</th>
                <th>Evento</th>
                <th>Importante</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>29/04/2022</td>
                <td>Mês especial do Clube do Livro!</td>
                <td>Já garantiu o seu? Confira os livros récem-chegados no nosso Clube do Livro. </td>
                </tr>
                <tr>
                <td>01/05/2022</td>
                <td>Simulado Enem – 1ª fase</td>
                <td>Para participar do Simulado Enem, é necessário<br>
                </br>inscrever-se gratuitamente até o dia 30/04/2022.</td>
                </tr>
                <tr>
                <td>12/05/2022</td>
                <td>Formatura da décima primeira turma</td>
                <td>Depois de seis meses, a turma 11 irá se formar! Fique de olho e marque em sua agenda.</td>
                </tr>
            </tbody>
        </Table>  
        </div>  
        <div>
            <p>

            </p>
        </div>
        <Card className="text-center">
                <Card.Body>
                <Card.Title>Você tem interesse se matricular na escola Mercúrio?</Card.Title>
                    <Card.Text>
                        Por favor, deixe seus dados que entraremos em contato o mais breve possível!
                    </Card.Text>
                    <Button variant="primary">FORMULÁRIO DE INTERESSE</Button>
                </Card.Body>
        </Card>
        </>
    );
}

export default Home