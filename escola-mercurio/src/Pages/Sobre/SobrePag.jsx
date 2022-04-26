import React from 'react'
import Sobre from '../../Components/Sobre'
import colegio from '../../Assets/colegio.jpg'
import colegioLivraria from '../../Assets/colegioLivraria.jpg'
import colegioCriancas from '../../Assets/colegioCriancas.jpg'

function SobrePag() {
  return (
    <>
        <Sobre conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec malesuada tempor purus ut lobortis. Mauris ullamcorper nibh vitae felis scelerisque lacinia. 
        Nulla facilisi. Aliquam eleifend ullamcorper commodo. Duis dignissim congue quam eu rhoncus. Aenean egestas nibh 
        eget ex molestie, nec egestas sem cursus. Mauris iaculis vestibulum turpis, eu luctus tellus pharetra sit amet. Phasellus 
        eget quam at justo mollis tempus vitae a mi. Donec sed venenatis quam, ultricies blandit nulla. Sed id dignissim ligula."
        img={colegio}>
        </Sobre>
        <Sobre conteudo="Donec placerat consectetur elit a bibendum. Suspendisse eget pretium mauris. Vivamus rhoncus 
        dolor ac convallis malesuada. Sed enim nunc, sodales sed sem et, laoreet dapibus quam. Fusce dignissim elementum 
        lectus, et eleifend magna commodo ut. Aliquam tristique nisl vitae volutpat sodales. Cras porta, lacus nec vulputate 
        elementum, dolor est faucibus quam, non finibus neque dui quis velit. Cras pellentesque bibendum fermentum. Quisque 
        elementum diam porta, consectetur sapien eget, accumsan quam. Nam pharetra at turpis ut malesuada. Aenean pellentesque a 
        magna a dictum."
        img={colegioLivraria}>
        </Sobre>
        <Sobre conteudo='Fusce sollicitudin fringilla elit, et venenatis sapien tincidunt et. Nullam facilisis ligula non orci 
        laoreet feugiat. Donec a iaculis turpis, in ultrices tortor. Ut ut porta nibh. Duis ut lacus eleifend, mattis lectus non, 
        placerat nibh. Sed ut posuere ante. In et sagittis sem, non faucibus velit. Aliquam porttitor euismod urna, sit amet 
        eleifend justo ultrices ac. Fusce viverra tincidunt magna, nec venenatis magna venenatis vitae.'
        img={colegioCriancas}>
        </Sobre>
    </>
  )
}

export default SobrePag