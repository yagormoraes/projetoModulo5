
import React from 'react'
import Vestibular from '../../Components/image/05_geha_blog_impacto_horario_escolar.jpg'
import Medio from '../../Components/image/Escola-4.0-1-800x533.jpg'
import Fundamental from '../../Components/image/escolher-escola-de-ensino-fundamental.png'


function Segmentos (){
   
    const Texto ={
        fontSize:20,
    }
    
   
   
    return (

        <div className='fundo'>
       
         <div className="container mt-5 ">
             <h1 className='titulo'>
                 Metodologia - Fundamental ( I e II )
             </h1>
             <img className='mt-5 img' src={Fundamental} />
             <p  className='mt-5' style={Texto}>
             Princípios como o diálogo, a colaboração, o pensamento crítico, a criatividade e a pesquisa estão na base do trabalho desenvolvido no Ensino Fundamental I. Nesse segmento, diferentes metodologias e estratégias de ensino são usadas para ampliar o repertório dos alunos e desenvolver diversas habilidades e competências.
             Desde pequenos, nossos alunos são incentivados a construírem a própria autonomia e a exercerem a autoria de suas produções. Em diferentes ambientes, alunos e professores altamente qualificados protagonizam uma aprendizagem ativa e significativa, em diálogo com a cultura, com o conhecimento científico e a tecnologia.
             Desenvolvemos uma educação de alto nível a partir das transformações da sociedade com o ensino teórico e prático para o aluno se desenvolver através de sua própria vivência. O Ensino Fundamental II acompanha os alunos em uma fase de mudanças, com singularidades, formações identitárias e culturais próprias e desenvolvimento das responsabilidades. Por isso, são demandadas práticas escolares diferenciadas, capazes de contemplar as necessidades de cada um e diferentes modos de inserção social
             </p>
             
        </div>
        <div className="container mt-5">
             <h1 className='titulo'>
                 Metodologia - Ensino Medio
             </h1>
             <img className='mt-5  img' src={Medio} />
             <p className='mt-5' style={Texto}>
             O nosso Ensino Médio é construído a partir de uma formação produtiva e responsável com foco no desenvolvimento do autoconhecimento e do potencial do aluno. Valorizamos as experiências individuais e coletivas para que cada estudante se torne um indivíduo crítico, participativo e dialógico, aplicando seus conhecimentos na resolução de problemas de forma autônoma e proativa. Com um corpo de professores altamente qualificado, propostas interdisciplinares, metodologias ativas e formação tecnológica, preparamos nossos alunos para enfrentar os grandes desafios da vida, do pleno exercício da cidadania e do mundo do trabalho.
             </p>
        </div>
        <div className="container mt-5">
             <h1 className='titulo'>
                 Metodologia - Vestibular
             </h1>
             <img className='mt-5 img' src={Vestibular} />
             <p  className='mt-5'style={Texto}>
             Com o objetivo de preparar os alunos para as provas de ingresso no Ensino Superior mais importantes do país, desenvolvemos diferentes metodologias, projetos e simulados. Além disso, temos um Coordenador de Vestibular que acompanha os estudantes ao longo do ano e os auxilia nos estudos e preparação para o Enem e vestibulares.
             </p>
         </div>
        </div>
    )
}

export default Segmentos