import React from "react";
import rotina1 from "../img/Rotina/img1-rotina.avif"
import rotina2 from "../img/Rotina/img2-rotina.avif"
import "../styles/Rotina.css"

const Rotina = () => {
    return(
      <>
      <div className="rotina">
        <div className="text-box-rotina">
          <h2 className="title-rotina">Rotina</h2>
          <div className="text-rotina">
            <p className="p1">
              Nossa ferramenta de Rotina é essencial para ajudá-lo a estruturar seu dia de maneira eficiente e produtiva. Nesta seção do nosso site, você poderá informar seus horários e criar uma rotina personalizada com base em suas preferências de treino e estudo.
              Ao acessar a aba 'Rotina', você encontrará um formulário onde poderá inserir seus horários disponíveis ao longo da semana. Você terá a opção de definir seus horários de acordo com sua rotina diária, como manhã, tarde e noite, ou especificar horários específicos para cada dia da semana.
              Uma vez que você tenha informado seus horários, nossa plataforma utilizará essas informações para criar automaticamente uma rotina personalizada para você. Essa rotina será baseada nas suas escolhas de treinos e estudos, que serão selecionados nas abas correspondentes: 'Treinos' e 'Estudos'.
            </p>
            <img className="img-rotina img1-rotina" src={rotina1} alt="Imagem homescreen background" />
            <div className="spam"></div>
            <img className="img-rotina img2-rotina" src={rotina2} alt="Imagem homescreen background" />
            <p className="p2">
              Na aba 'Treinos', você terá acesso a uma variedade de opções de treinamento, incluindo diferentes modalidades esportivas, exercícios específicos e níveis de dificuldade. Você poderá escolher os treinos que mais se adequam aos seus objetivos e preferências. Com base nessas escolhas, nossa plataforma irá inserir automaticamente os treinos selecionados nos horários designados em sua rotina.
              Da mesma forma, na aba 'Estudos', você poderá selecionar as áreas de estudo que deseja priorizar. Seja para aprendizado de idiomas, matemática, ciências ou qualquer outro assunto, você encontrará uma ampla gama de opções. A plataforma irá considerar essas escolhas ao criar sua rotina e alocar horários específicos para o estudo das disciplinas escolhidas.
            </p>
            <p className="p3">
              É importante ressaltar que nossa plataforma oferece flexibilidade para que você possa personalizar ainda mais sua rotina. Você poderá ajustar os horários, adicionar ou remover treinos e estudos conforme necessário, garantindo que sua rotina esteja sempre adaptada às suas necessidades em constante mudança.
            </p>
            <p className="p4">
              A aba 'Rotina' é uma ferramenta poderosa para auxiliá-lo na organização do seu tempo, permitindo que você mantenha uma prática regular de treinos e estudos de forma eficiente. Com a criação automática da rotina com base nas suas preferências, você terá mais tempo para se dedicar ao que realmente importa, alcançando seus objetivos e maximizando seu potencial de aprendizado e condicionamento físico.
            </p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Rotina;