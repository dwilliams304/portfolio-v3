import { useEffect, useRef } from 'react';
import './spacegrid.css';

export default function SpaceGrid() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const particleCount = 50;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight; // Match canvas height to the full document height
        };

        const initParticles = () => {
            particles.length = 0; // Clear particles to prevent duplicates
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

        // Initialize canvas size and particles
        setCanvasSize();
        initParticles();
        drawParticles();

        // Update canvas size on window resize
        window.addEventListener('resize', () => {
            setCanvasSize();
            initParticles(); // Reinitialize particles after resizing
        });

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    useEffect(() => {
        const updateBackgroundHeight = () => {
            const background = document.querySelector('.background') as HTMLDivElement;
            const grid = document.querySelector('.grid') as HTMLDivElement;
            const docHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                document.documentElement.offsetHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight
            );
    
            if (background) background.style.height = `${docHeight}px`;
            if (grid) grid.style.height = `${docHeight}px`;
    
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                canvas.width = window.innerWidth;
                canvas.height = docHeight;
            }
        };
    
        updateBackgroundHeight();
        window.addEventListener('resize', updateBackgroundHeight);
    
        return () => {
            window.removeEventListener('resize', updateBackgroundHeight);
        };
    }, []);
    

    return (
        <div className="background">
            <div className="grid" />
            <canvas ref={canvasRef} />
        </div>
    );
}
