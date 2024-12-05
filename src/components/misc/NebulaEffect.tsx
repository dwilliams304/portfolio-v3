import { useEffect, useRef } from 'react';
import './effects.css';

export default function NebulaEffect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const particleCount = 50;

        const initParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width!,
                    y: Math.random() * canvas.height!,
                    vx: Math.random() * 2 - 1,
                    vy: Math.random() * 2 - 1,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width!, canvas.height!);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#02F0A1';
                ctx.fill();
                ctx.closePath();

                // Update positions
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width!) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height!) p.vy *= -1;
            });

            requestAnimationFrame(drawParticles);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        initParticles();
        drawParticles();
    }, []);

    return (
        <div className="background">
            <div className="grid" />
            <canvas ref={canvasRef} />
        </div>
    );
};