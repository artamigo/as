import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'trd', 'cta', 'five'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">¿Qué esta pasando?</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Lugar</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">¿Qué me pongo?</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="trd">
                    <a href="#">¿Y... a qué hora llego?</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Regalos</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="five">
                    <a href="#">Redes Sociales</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
