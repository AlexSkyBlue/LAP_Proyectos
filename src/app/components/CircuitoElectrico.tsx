"use client"; // Esto es necesario para usar Anime.js en un componente de Next.js

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const PlacaMadre: React.FC = () => {
    const pathsRef = useRef<SVGPathElement[]>([]);

    // Función para animar el flujo de electricidad
    const animateElectricity = () => {
        pathsRef.current.forEach((path) => {
            const length = path.getTotalLength();

            // Inicializar el trazado del SVG
            path.style.strokeDasharray = `${length} ${length}`;
            path.style.strokeDashoffset = `${length}`;

            // Animación del flujo de electricidad
            anime({
                targets: path,
                strokeDashoffset: [length, 0], // Mover el trazado de largo a corto
                duration: 2000,
                easing: 'linear',
                loop: true,
                direction: 'alternate', // Alternar la dirección de la animación
            });
        });
    };

    // Iniciar la animación cuando el componente se monta
    useEffect(() => {
        animateElectricity();
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: -1,
                backgroundColor: '#1a1a1a', // Fondo oscuro para resaltar el circuito
            }}
        >
            <svg width="100%" height="100%">
                {/* Circuitos de la placa madre */}
                <path
                    ref={(el) => (pathsRef.current[0] = el!)}
                    d="M 100 100 Q 150 50 200 100 T 300 100"
                    stroke="#00ff00" // Color verde para simular electricidad
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    ref={(el) => (pathsRef.current[1] = el!)}
                    d="M 300 100 Q 350 150 400 100 T 500 100"
                    stroke="#00ff00"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    ref={(el) => (pathsRef.current[2] = el!)}
                    d="M 500 100 Q 550 50 600 100 T 700 100"
                    stroke="#00ff00"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    ref={(el) => (pathsRef.current[3] = el!)}
                    d="M 700 100 Q 750 150 800 100 T 900 100"
                    stroke="#00ff00"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    ref={(el) => (pathsRef.current[4] = el!)}
                    d="M 900 100 Q 950 50 1000 100 T 1100 100"
                    stroke="#00ff00"
                    strokeWidth="2"
                    fill="none"
                />
                {/* Agrega más líneas según sea necesario */}
            </svg>
        </div>
    );
};

export default PlacaMadre;