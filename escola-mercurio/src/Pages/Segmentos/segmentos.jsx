
import React, { useEffect }from 'react'
import Vestibular from '../../Assets/vestibular.jpg'
import Medio from '../../Assets/medio.jpg'
import Fundamental from '../../Assets/fundamental.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import '../Segmentos/segmentos.css'



function Segmentos (){
   

    useEffect(()=>{
        Aos.init({duration:3000})
      },[])  
   
    return (

        <div >
       
         <div className="container  " data-aos="fade-right">
                <h1 className='titulo'>
                    Metodologia - Fundamental ( I e II )
                </h1>
             <div className='area '>
                <img className='mt-5 img' src={Fundamental} alt="crianças na creche"/>
                <p  className='mt-5  texto ' >
                Princípios como o diálogo, a colaboração, o pensamento crítico, a criatividade e a pesquisa estão na base do trabalho desenvolvido no Ensino Fundamental I. Nesse segmento, diferentes metodologias e estratégias de ensino são usadas para ampliar o repertório dos alunos e desenvolver diversas habilidades e competências.
                Desde pequenos, nossos alunos são incentivados a construírem a própria autonomia e a exercerem a autoria de suas produções.Desenvolvemos uma educação de alto nível a partir das transformações da sociedade com o ensino teórico e prático para o aluno se desenvolver através de sua própria vivência. O Ensino Fundamental II acompanha os alunos em uma fase de mudanças, com singularidades, formações identitárias e culturais próprias e desenvolvimento das responsabilidades.
                </p>
             </div>
        </div>
        <div className="container " data-aos="fade-left" >
             <h1 className='titulo'>
                 Metodologia - Ensino Medio
             </h1>
             <div className='area '>
             <img className='mt-5  img' src={Medio}  alt="Crianças no ensino medio"/>
             <p className='mt-5 texto' >
             O nosso Ensino Médio é construído a partir de uma formação produtiva e responsável com foco no desenvolvimento do autoconhecimento e do potencial do aluno. Valorizamos as experiências individuais e coletivas para que cada estudante se torne um indivíduo crítico, participativo e dialógico, aplicando seus conhecimentos na resolução de problemas de forma autônoma e proativa. Com um corpo de professores altamente qualificado, propostas interdisciplinares, metodologias ativas e formação tecnológica, preparamos nossos alunos para enfrentar os grandes desafios da vida, do pleno exercício da cidadania e do mundo do trabalho.
             </p>
            </div>
        </div>
        <div className="container " data-aos="fade-right" >
             <h1 className='titulo'>
                 Metodologia - Vestibular
             </h1>
             <div className='area '>
             <img className='mt-5 img' src={Vestibular} alt="cursinho para vestibular"/>
             <p  className='mt-5 texto'>
             Com o objetivo de preparar os alunos para as provas de ingresso no Ensino Superior mais importantes do país, desenvolvemos diferentes metodologias, projetos e simulados. Além disso, temos um Coordenador de Vestibular que acompanha os estudantes ao longo do ano e os auxilia nos estudos e preparação para o Enem e vestibulares.
             </p>
            </div>
         </div>
        </div>
    )
}

export default Segmentos