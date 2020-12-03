import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    info: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back} alt="Voltar"/>
                </Link>

                <img src={logo} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.info}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;