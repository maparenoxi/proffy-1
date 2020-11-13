import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos <b>online</b>.</h2>
                </div>

                <img
                    src={landing}
                    alt="landing"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={study} alt="Study"/> Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Give Classes"/> Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeart} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;