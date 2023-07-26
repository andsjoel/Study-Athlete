import React from "react";
import backgroundTreinos from "../img/Treinos/background-treinos.jpg"
import "../styles/Treinos.css"


const Treinos = () => {
    return(
      <>
      <div className="treinos">
        <div className="text-box">
          <div className="text-treinos">
          <h2 className="title-treinos">Treinos</h2>
          <p>Para atletas amadores que buscam melhorar seu desempenho em diversos esportes, é essencial compreender a importância da academia como um complemento valioso para os treinos específicos. Além disso, é fundamental entender que, na maioria das modalidades esportivas, o foco dos treinamentos deve estar na explosão e força, e não exclusivamente na hipertrofia muscular. A academia desempenha um papel crucial na preparação física dos atletas, independentemente de seu nível de habilidade. Ela proporciona uma série de benefícios que complementam os treinos específicos e contribuem para o desenvolvimento geral do atleta. Através de exercícios variados, é possível trabalhar diferentes capacidades físicas, tais como força, resistência, flexibilidade e coordenação, essenciais para um desempenho eficiente em diversas modalidades esportivas.</p>
          </div>
        </div>
        <div className="organitazion">
          <img className="background-treinos" src={backgroundTreinos} alt="Imagem homescreen background" />
          <div className="box-text">
            <p>Equilíbrio nos treinos:
            Para obter resultados consistentes, é fundamental buscar o equilíbrio nos treinamentos. Isso significa que os exercícios na academia devem ser planejados de forma a complementar os treinos específicos do esporte em questão. O foco não deve ser exclusivamente na hipertrofia muscular, mas sim em desenvolver a força explosiva, a estabilidade articular e a resistência necessárias para as demandas específicas da prática esportiva.</p>
            <p>
            Foco em explosão e força:
            A maioria dos esportes requer a capacidade de executar movimentos rápidos, explosivos e poderosos. Portanto, os treinamentos devem ser direcionados para o desenvolvimento da força muscular e da capacidade de produzir energia rapidamente, em vez de se concentrarem apenas no aumento do tamanho muscular. Isso pode ser alcançado através de exercícios como levantamento de peso, saltos, corridas em alta intensidade e treinamento de resistência com cargas moderadas.
            </p>
            <p>
            Vantagens da abordagem de treinamento:
            Ao adotar uma abordagem de treinamento equilibrada, focada na explosão e força, os atletas amadores podem desfrutar de várias vantagens. Primeiro, eles terão uma base sólida de força e resistência, permitindo melhorar a eficiência dos movimentos esportivos. Além disso, a explosão muscular desenvolvida através dos treinos na academia contribui para uma maior potência e velocidade, características fundamentais em muitas modalidades esportivas.
            </p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Treinos;