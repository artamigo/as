import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/01.png'

let iframeSrc = 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d59193.30628802942!2d-102.32046801828386!3d21.989013924106906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x8429ee66c314de7d%3A0xdff547d2b8c845ce!2sAltaria+Mall%2C+Troje+de+Alonso%2C+Aguascalientes+Municipality%2C+Aguascalientes%2C+Mexico!3m2!1d21.924259!2d-102.2896449!4m3!3m2!1d22.025617!2d-102.30960499999999!5e0!3m2!1sen!2sus!4v1557010191858!5m2!1sen!2sus'

// let iframeSrc = "https://www.google.com/maps/embed?key=AIzaSyAG2y5ljPXNtDP6_0V4UPcwChKuZbDw6C4&pb=!1m26!1m12!1m3!1d59199.24788159626!2d-102.34673231080421!3d21.974767136241738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x8429ee66c314de7d%3A0xdff547d2b8c845ce!2sAltaria+Mall%2C+Boulevard+a+Zacatecas+849%2C+Troje+de+Alonso%2C+Aguascalientes%2C+Ags.%2C+Mexico!3m2!1d21.924259!2d-102.2896449!4m3!3m2!1d22.025617!2d-102.30960499999999!5e0!3m2!1sen!2sus!4v1557010437514!5m2!1sen!2sus"


class Index extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            stickyNav: false
        }
    }

    _handleWaypointEnter = () => {
        this.setState( () => ({ stickyNav: false }) );
    }

    _handleWaypointLeave = () => {
        this.setState( () => ({ stickyNav: true }) );
    }

    render() {

        return (
            <Layout>
                <Helmet title="Armando & Susana"/>

                <Header/>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="intro" className="main">
                        <div className="spotlight">
                            <div className="content">
                                <header className="major">
                                    <h2>Nos Casamos</h2>
                                </header>
                                <p>A algunos de ustedes les habrá tomado por sorpresa la noticia, de que dentro de muy
                                    pocos días nos casaremos.
                                </p>
                                <p>
                                    Se preguntarán el por qué de tan repentina decisión. La verdad… es que después de 16
                                    años de ponernos de acuerdo y desacuerdo, de idealizar y buscar el momento perfecto.
                                    Comprendimos que el momento perfecto es “ahora”. Ahora que estamos plenos, felices y
                                    enamorados.
                                </p>
                                <p>
                                    Nos gustaría que ustedes, que han sido parte de esta historia, nos acompañen a
                                    celebrar este momento tan especial.
                                </p>
                            </div>
                            <span className="image"><img src={pic01} alt=""/></span>
                        </div>
                    </section>

                    <section id="first" className="main special">
                        <header className="major">
                            <h2>Lugar</h2>
                        </header>
                        <div className="direccion-conainer">

                            <div style={{
                                flex: 1,
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                margin: "20px"
                            }}>
                                <p>Hemos elegido un bonito jardín, ubicado en la granja “El Profe”, cerca de Valladolid.
                                    Aproximadamente a 20 min del centro de Aguascalientes.

                                    Te anexamos la dirección 👇 y el mapa 🗺️ para que no te pierdas.</p>

                                <h2>Dirección</h2>
                                <p style={{ textAlign: "center", margin: 0 }}>Camino Río San Pedro #196, El Maguey.</p>
                                <p style={{ textAlign: "center", margin: 0 }}>Granja "El Profe".</p>
                                <p style={{ textAlign: "center", margin: 0 }}>Jesus María, Aguascalientes.</p>
                            </div>
                            <div className="map">
                                <iframe src={iframeSrc} frameborder="0" allowfullscreen></iframe>
                            </div>

                        </div>
                    </section>

                    <section id="second" className="main special">
                        <header className="major">
                            <h2>¿Qué me pongo?</h2>
                            <p style={{ maxWidth: "500px", margin: "auto", marginBottom: "10px" }}> No te estreses!
                                Queremos que te sientas códomo(a). Guarda el smoking y vestido largo. Una vestimenta
                                casual 👗 es excelente para la ocasión.
                            </p>
                            <p style={{ maxWidth: "500px", margin: "auto" }}> La recepción será en un jardín, así que no
                                olvides tus 🕶 y 👡🥿 cómodos en el caso de las mujeres.
                            </p>
                        </header>
                    </section>

                    <section id="trd" className="main special">
                        <header className="major">
                            <h2>¿Y... a qué hora llego?</h2>
                            <p style={{ maxWidth: "500px", margin: "auto", marginBottom: "10px" }}>
                                Estaremos listos para recibirte en punto de las 14:00 hrs. ☀️ con unos deliciosos
                                bocadillos y bebidas refrescantes 🍻🍸🍹 de bienvenida. </p>
                        </header>
                    </section>

                    <section id="cta" className="main special">
                        <header className="major">
                            <h2>Regalos</h2>
                            <p style={{ maxWidth: "500px", margin: "auto", marginBottom: "10px" }}>
                                Nuestro camino de regreso a casa 🗽 será largo y el espacio muy reducido. Así que no te
                                preocupes por llevar algún 🎁. El mejor regalo es que nos acompañes y celebres
                                este día con nosotros 🍾🥂.
                            </p>
                        </header>
                    </section>
                    <section className="main special">
                        <header className="major">
                            <h1>Los esperamos!</h1>
                            <h1 style={{ color: "initial" }}>🤵👰</h1>
                        </header>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default Index
