import React from 'react';
import Sobre from '../assets/Sobre.png';
import "../component/home.css";

const Home = () => {
    return (
        <div>
            <section id="home" className='hero'>
                <div className="text-content">
                    <h1>Sending Money is Easier than before</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.</p>
                    {/* Adicione outros links de navegação conforme necessário */}
                </div>
                <img src={Sobre} alt="Minha Foto" className="about-image" />
            </section>
            <section id="quem-somos" className="quem-somos">
                <h2>Como funciona   </h2>
                <p>Informações sobre a nossa empresa.</p>
                {/* Adicione mais conteúdo sobre "Quem Somos" aqui */}
            </section>
        </div>
    );
};

export default Home;
