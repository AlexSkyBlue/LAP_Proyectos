import { Icon } from '@iconify/react';

export const Navbar = async () => {
    return (
        <div className="navbar">
            <button className="navbar-button">
                <Icon className="navbar-button-icon" icon="line-md:home-twotone" />
                <span>
                    Inicio
                </span>
            </button>
            <button className="navbar-button">
                <Icon className="navbar-button-icon" icon="line-md:lightbulb-filled" /> {/* Icono para "servicios" */}
                <span>
                    Servicios
                </span>
            </button>
            <button className="navbar-button">
                <Icon className="navbar-button-icon" icon="ic:baseline-contact-page" /> {/* Icono para "contáctame" */}
                <span>
                    Contáctame
                </span>
            </button>
            <button className="navbar-button">
                <Icon className="navbar-button-icon" icon="ic:outline-request-quote" /> {/* Icono para "cotiza" */}
                <span>
                    Cotiza
                </span>
            </button>
        </div>
    );
};