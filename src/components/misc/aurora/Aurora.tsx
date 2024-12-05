import { useEffect } from 'react';
import './aurora.css';

export default function Aurora() {
    useEffect(() => {
        const createParticles = () => {
            const container = document.querySelector('.aurora-background');
            if (!container) return;

            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
                container.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return (
        <div className="aurora-background">
            {/* Aurora waves */}
            <div className="aurora"></div>
            <div className="aurora"></div>
            <div className="aurora"></div>

            {/* Central vortex */}
            <div className='eclipse-container'>
            <div className="eclipse"></div>

            </div>
        </div>
    );
};