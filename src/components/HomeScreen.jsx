import React from "react"
import HomeScreenPhrase from "../img/HomeScreen/phrase-img.png"
import HomeScreenImg from "../img/HomeScreen/homescreen_img.jpg"
import '../styles/HomeScreen.css'

const HomeScreen = () => {
  return (
    <>
      <div className="homeScreen">
        <div className="phrase">
          <img className="phrase-img" src={HomeScreenPhrase} alt="Estude para se tornar um grande Atleta" />
          <div className="text-content">
          <p>Nosso objetivo é oferecer suporte aos atletas de alto rendimento que desejam alcançar o equilíbrio entre os estudos e a carreira esportiva. Reconhecemos os desafios que os atletas enfrentam ao conciliar treinamentos intensivos, competições e a busca por uma educação de qualidade.</p>
          <p>No Study Athlete, somos uma plataforma abrangente que permite aos atletas gerenciar sua rotina diária, incluindo os horários de estudo, treinamentos, compromissos, alimentação e descanso. Com uma abordagem personalizada, adaptada às necessidades de cada atleta, estamos comprometidos em ajudá-los a alcançar o máximo desempenho tanto no esporte quanto nos estudos.</p>
          </div>
        </div>
        <img className="homescreen-img" src={HomeScreenImg} alt="Imagem homescreen background" />
      </div>
    </>
  )
}

export default HomeScreen;
