import './AboutComponent.css';
import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
            <div id="about-component">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="container">
                            <div className="col-xs-12">
                                <h1 className="padding-top">
                                    <strong>Natureza e vida</strong>
                                </h1>
                                <h3>Conheça um pouco mais de nossa história!</h3>
                                <p>
                                    <br />
                                    A Natureza e Vida parceira dos que buscam o Bem Viver através de uma
                                    alimentação saudável, baseada na Natureza, na sabedoria, e novos hábitos que
                                    garantam mais qualidade de vida, prazer e realização.
                                </p>
                                <p>
                                    A experiência que obtivemos ao longo dos anos nos dão a indicação de que
                                    estamos no caminho certo para proporcionar aos clientes e parceiros mais
                                    satisfação e confiança nessa entre ajuda e de troca de experiências.
                                </p>
                                <p>
                                    Estreitar os laços com entidades comprometidas com o bem estar social,
                                    buscando um mundo melhor para todos.                    </p>
                                <a href="/contato">
                                    <h2 className="text-center">
                                        <button className="btn btn-lg btn-about">Venha nos <strong>visitar</strong>!</button>
                                    </h2>
                                </a>
                                <h2><strong>Nossa linha de produtos:</strong></h2>
                                <div className="col-md-6">
                                    <ul>
                                        <li><h4>Biscoitos</h4></li>
                                        <li><h4>Cereais</h4></li>
                                        <li><h4>Chás</h4></li>
                                        <li><h4>Farinhas sem Glúten</h4></li>
                                        <li><h4>Geléia</h4></li>
                                        <li><h4>Grãos</h4></li>
                                        <li><h4>Temperos</h4></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li><h4>Mel</h4></li>
                                        <li><h4>Nutracêuticos</h4></li>
                                        <li><h4>Óleos Vegetais</h4></li>
                                        <li><h4>Pães</h4></li>
                                        <li><h4>Sucos Naturais</h4></li>
                                        <li><h4>Suplementos</h4></li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="clearfix" />
                                    <h2 className="text-center">
                                        <a href="/produtos">
                                            <button className="btn btn-lg btn-about">Conheça nossa linha de produtos</button>
                                        </a>
                                    </h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutComponent;
