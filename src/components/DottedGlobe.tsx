import React, { useEffect, useRef } from 'react';

interface Point3D {
	x: number;
	y: number;
	z: number;
}

interface DottedGlobeProps {
	color?: string; // Optional custom color, defaults to computed --color-primary
	className?: string;
	dotCount?: number;
}

export default function DottedGlobe({
	color,
	className = '',
	dotCount = 2000
}: DottedGlobeProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		const handleResize = () => {
			if (!canvas) return;
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		// Generate Fibonacci Sphere base points
		const points: Point3D[] = [];
		const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio

		for (let i = 0; i < dotCount; i++) {
			const y = 1 - (i / (dotCount - 1)) * 2; // -1 to 1
			const radiusAtY = Math.sqrt(1 - y * y);
			const theta = (2 * Math.PI * i) / phi;

			const x = Math.cos(theta) * radiusAtY;
			const z = Math.sin(theta) * radiusAtY;

			points.push({ x, y, z });
		}

		let angleY = 0;
		const angleX = 0.2; // Slight downward tilt for 3D depth perspective

		const render = () => {
			ctx.clearRect(0, 0, width, height);

			// Radius calculated so the sphere diameter is slightly wider than the bento grid container (max-w-6xl)
			const bentoContainerWidth = Math.min(width * 0.92, 1152);
			const sphereRadius = Math.max(bentoContainerWidth * 0.58, height * 0.48);
			const centerX = width / 2;
			const centerY = height / 2;

			// Continuous automatic rotation
			angleY += 0.003;

			const cosY = Math.cos(angleY);
			const sinY = Math.sin(angleY);
			const cosX = Math.cos(angleX);
			const sinX = Math.sin(angleX);

			// Resolve point primary color from CSS variable or prop
			let pointColor = color;
			if (!pointColor) {
				const computedColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
				pointColor = computedColor || '#34d399';
			}

			// Parse hex or rgb color to component r,g,b for alpha blending
			let r = 52, g = 211, b = 153; // Default emerald-400 (#34d399)
			if (pointColor.startsWith('#')) {
				const hex = pointColor.replace('#', '');
				if (hex.length === 3) {
					r = parseInt(hex[0] + hex[0], 16);
					g = parseInt(hex[1] + hex[1], 16);
					b = parseInt(hex[2] + hex[2], 16);
				} else if (hex.length === 6) {
					r = parseInt(hex.substring(0, 2), 16);
					g = parseInt(hex.substring(2, 4), 16);
					b = parseInt(hex.substring(4, 6), 16);
				}
			}

			// Sort points by rotated Z for correct 3D rendering order (back to front)
			const transformedPoints = points.map((p) => {
				// Y-axis rotation
				const x1 = p.x * cosY - p.z * sinY;
				const z1 = p.z * cosY + p.x * sinY;
				const y1 = p.y;

				// X-axis tilt
				const y2 = y1 * cosX - z1 * sinX;
				const z2 = z1 * cosX + y1 * sinX;
				const x2 = x1;

				return {
					x: centerX + x2 * sphereRadius,
					y: centerY + y2 * sphereRadius,
					z: z2
				};
			});

			// Sort back-to-front
			transformedPoints.sort((a, b) => a.z - b.z);

			// Render points
			for (let i = 0; i < transformedPoints.length; i++) {
				const pt = transformedPoints[i];

				// Normalized Z depth from -1 (back) to +1 (front)
				const normZ = (pt.z + 1) / 2; // 0 to 1

				// Scale size and opacity based on depth
				const currentRadius = 0.8 + normZ * 2.2; // 0.8px to 3.0px
				const alpha = 0.12 + Math.pow(normZ, 1.8) * 0.78; // 0.12 to 0.90

				ctx.beginPath();
				ctx.arc(pt.x, pt.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
				ctx.fill();
			}

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, [color, dotCount]);

	return (
		<canvas
			ref={canvasRef}
			className={`fixed inset-0 pointer-events-none w-full h-full ${className}`}
			style={{ zIndex: 0 }}
		/>
	);
}
