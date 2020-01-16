import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/sps_logo_noname.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">

            <span className="image main"><img src={logo} alt="" className="logo" /></span>
            <span className="sps_logo"/>

        </div>
        <div className="content">
            <div className="inner">
                <h1>
                    <span id="heading_1">Slovenská </span>
                    <span id="heading_2">pirátska </span>
                    <span id="heading_3">strana</span>
                </h1>
                <p id="subheading">S VAMI NA JEDNEJ LODI.</p>
            </div>
        </div>

        <nav className="main_nav">
            <ul>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('intro') }}>PIRÁTI</a></li>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('work') }}>PROGRAM</a></li>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('about') }}>ĽUDIA</a></li>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('bepirate') }}>#BUDPIRAT</a></li>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('change') }}>#ZMENA</a></li>
                <li><a href="javascript:" onClick={() => { props.onOpenArticle('contact') }}>KONTAKT</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
