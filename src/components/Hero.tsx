import { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';

interface HeroProps {
	variant?: 'default' | 'alt';
}

function SkillBadge({ name, index, activeIndex }: { name: string; index: number; activeIndex: number | null }) {
	const isActive = activeIndex === index;
	return (
		<span
			className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-500 cursor-default shadow-sm border ${isActive
				? 'border-primary text-primary bg-primary/20 shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-105 font-semibold'
				: 'bg-surface text-text-muted border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)]'
				}`}
		>
			{name}
		</span>
	);
}

export default function Hero({ variant = 'default' }: HeroProps) {
	const [copied, setCopied] = useState(false);
	const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(0);

	const totalSkills = 26;

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSkillIndex((prev) => {
				let next;
				do {
					next = Math.floor(Math.random() * totalSkills);
				} while (next === prev && totalSkills > 1);
				return next;
			});
		}, 1800);

		return () => clearInterval(interval);
	}, [totalSkills]);

	const handleCopyEmail = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText('hugo.leroux1000@gmail.com');
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	if (variant === 'alt') {
		return (
			<section className="relative flex-1 flex items-center justify-center text-center py-16 px-4 overflow-hidden">
				{/* Voile d'ombrage léger pour la lisibilité */}
				<div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
				<div className="max-w-[800px] w-full relative z-10">
					<h1 className="text-3xl text-[#e6c344] font-mono mb-4 tracking-widest uppercase">
						<ScrambleText text="[ Designer Créatif ]" />
					</h1>
					<h1 className="text-7xl font-black mb-8 italic">
						Expériences <span className="bg-linear-to-r from-[#ffe32a] to-[#0d282a] bg-clip-text text-transparent">Immersives</span> & <br />
						Identité <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>Visuelle</span>
					</h1>
					<p className="text-2xl text-text-muted mb-16 font-light">
						Je sculpte le web pour créer des interfaces mémorables qui racontent une histoire unique.
					</p>
					<div className="flex gap-6 justify-center">
						<button className="bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,42,109,0.4)]">Lancer un projet</button>
						<button className="bg-transparent text-text border-2 border-surface hover:border-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all">Portfolio</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="relative flex-1 flex flex-col items-center justify-start py-12 px-4 md:px-8 overflow-y-auto w-full pb-32">
			{/* Voile d'ombrage léger pour faire ressortir les cartes Bento et le texte */}
			<div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

			{/* Notification toast descendante */}
			<div
				className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out transform ${copied
					? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
					: '-translate-y-12 opacity-0 scale-95 pointer-events-none'
					}`}
			>
				<div className="bg-white/10 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.25)] rounded-2xl px-6 py-3.5 border border-white/20 flex items-center gap-3 backdrop-blur-xs hover:border-white/35 transition-all">
					<span className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(52,211,153,0.3)]">
						<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="20 6 9 17 4 12" />
						</svg>
					</span>
					<span className="font-semibold text-sm tracking-wide text-white drop-shadow-sm">
						Mail copié dans le presse-papier
					</span>
				</div>
			</div>

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

				{/* Bento 1: Profil / Header (Col Span 2) */}
				<div className="col-span-1 md:col-span-2 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] flex flex-col justify-center relative overflow-hidden group hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					{/* Decorative subtle gradient */}
					<div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>

					<h1 className="text-7xl text-contrast font-bold mb-2">
						<ScrambleText text="Hugo Le Roux" />
					</h1>
					<h2 className="text-2xl text-text font-semibold mb-4">
						[Etudiant en <span className="text-[#EFB762]">developpement informatique</span>]
					</h2>
					<p className="text-text-muted leading-relaxed max-w-2xl text-lg font-light">
						Étudiant en développement informatique à 42, je suis autonome, autodidacte et adaptable. Ma formation m’a appris à résoudre des problèmes, à apprendre par moi-même et à travailler en équipe.
						<br />Je souhaite aujourd’hui mettre ces compétences en pratique et continuer à me former au sein d'une equipe et a travers un projet concret.
					</p>
				</div>

				{/* Bento 2: Contact / Liens (Col Span 1) */}
				<div id="contact" className="col-span-1 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] flex flex-col justify-center hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-4 text-text flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
						Contact & Liens
					</h3>
					<div className="flex flex-col gap-4">
						<button onClick={handleCopyEmail} className="text-text hover:text-primary transition-colors flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/25 backdrop-blur-sm border border-white/15 text-left w-full">
							<span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-white/10">
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect width="20" height="16" x="2" y="4" rx="2" />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
							</span>
							<span className="truncate font-medium">
								[hugo.leroux1000@gmail.com]
							</span>
						</button>
						<a href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/25 backdrop-blur-sm border border-white/15">
							<span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-white/10">
								<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
									<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.12.92-2.04 2.04-2.04 1.11 0 2.02.92 2.02 2.04v4.93h2.78M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
								</svg>
							</span>
							<span className="truncate font-medium">[URL LinkedIn]</span>
						</a>
						<a href="https://github.com/hle-roux" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/25 backdrop-blur-sm border border-white/15">
							<span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-white/10">
								<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
								</svg>
							</span>
							<span className="truncate font-medium">[GitHub]</span>
						</a>
						<a href="/CV_Hugo_Le_Roux.pdf" download className="mt-2 text-center block bg-primary/10 border border-contrast text-contrast hover:bg-primary/20 hover:border-[#9d615c] hover:text-primary hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] font-bold py-3 rounded-xl transition-all uppercase tracking-wider text-sm backdrop-blur-xs shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
							Télécharger CV
						</a>
					</div>
				</div>

				{/* Bento 3: Expérience (Col Span 1) */}
				<div className="col-span-1 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] flex flex-col hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4">Formation</h3>
					<div className="flex flex-col gap-6 flex-1">
						<div className="relative pl-6 border-l-2 border-contrast/60">
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-contrast/80 shadow-contrast"></span>
							<div className="flex flex-col mb-1">
								<h4 className="font-bold text-text text-lg hover:text-primary transition-colors cursor-default">[Etudiant developpement]</h4>
								<span className="text-sm font-medium text-primary mb-1">[2023 - Présent]</span>
							</div>
							<p className="text-sm text-text-muted font-medium">[Ecole 42]</p>
							<p className="text-sm text-text-muted mt-2 line-clamp-3">[Preparation d'un diplome en Architecture Informatique]</p>
						</div>
						<div className="relative pl-6 border-l-2 border-contrast/80">
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-contrast/80"></span>
							<div className="flex flex-col mb-1">
								<h4 className="font-bold text-text text-lg hover:text-primary transition-colors cursor-default">[Etudiant en Sciences de l'ingenieur]</h4>
								<span className="text-sm font-medium text-text-muted mb-1">[2019 - 2023]</span>
							</div>
							<p className="text-sm text-text-muted font-medium">[Prepa integree - IUT]</p>
						</div>
					</div>
				</div>

				{/* Bento 4: Compétences (Col Span 2) */}
				<div id="competences" className="col-span-1 md:col-span-2 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4">Compétences & Expertise</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Group 1 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-5 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex justify-center items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary items-center"></span>
								[WEB - Frontend]
							</h4>
							<div className="flex flex-wrap flex-cent gap-2 text-white">
								<SkillBadge name="[HTML5]" index={0} activeIndex={activeSkillIndex} />
								<SkillBadge name="[CSS3]" index={1} activeIndex={activeSkillIndex} />
								<SkillBadge name="[TypeScript]" index={2} activeIndex={activeSkillIndex} />
								<SkillBadge name="[JavaScript]" index={3} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Tailwind]" index={4} activeIndex={activeSkillIndex} />
								<SkillBadge name="[React]" index={5} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Wordpress]" index={6} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Figma]" index={7} activeIndex={activeSkillIndex} />
							</div>
						</div>
						{/* Group 2 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-5 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex justify-center items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Backend]
							</h4>
							<div className="flex flex-wrap gap-2">
								<SkillBadge name="[Node.js]" index={8} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Fastify]" index={9} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Rest API]" index={10} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Authentication]" index={11} activeIndex={activeSkillIndex} />
							</div>
						</div>
						{/* Group 3 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-5 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex justify-center items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Systems & programming]
							</h4>
							<div className="flex flex-wrap gap-2">
								<SkillBadge name="[C]" index={12} activeIndex={activeSkillIndex} />
								<SkillBadge name="[C++]" index={13} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Memory management]" index={14} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Unix]" index={15} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Processes]" index={16} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Multithreading]" index={17} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Networking]" index={18} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Github]" index={19} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Bash]" index={20} activeIndex={activeSkillIndex} />
							</div>
						</div>
						{/* Group 4 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-5 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex justify-center items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Data & Database]
							</h4>
							<div className="flex flex-wrap gap-2">
								<SkillBadge name="[Python]" index={21} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Panda]" index={22} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Numpy]" index={23} activeIndex={activeSkillIndex} />
								<SkillBadge name="[MySQL]" index={24} activeIndex={activeSkillIndex} />
								<SkillBadge name="[SQLite]" index={25} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Data analysis]" index={26} activeIndex={activeSkillIndex} />
								<SkillBadge name="[Algorithms]" index={27} activeIndex={activeSkillIndex} />
							</div>
						</div>
					</div>
				</div>

				{/* Bento 7: Technologies / Stack Technique (Col Span 3) */}
				<div id="technologies" className="col-span-1 md:col-span-3 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4 flex justify-between items-center">
						<span>Technologies & Stack Technique</span>
					</h3>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
						{/* Python */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">Python</span>
						</div>

						{/* HTML5 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">HTML5</span>
						</div>

						{/* CSS3 */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">CSS3</span>
						</div>

						{/* JavaScript */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">JavaScript</span>
						</div>

						{/* TypeScript */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">TypeScript</span>
						</div>

						{/* React */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">React</span>
						</div>

						{/* C / C++ */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">C / C++</span>
						</div>

						{/* Tailwind CSS */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">Tailwind CSS</span>
						</div>

						{/* Node.js */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">Node.js</span>
						</div>

						{/* Git / GitHub */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">Git / GitHub</span>
						</div>

						{/* Docker / Linux */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">Docker / Linux</span>
						</div>

						{/* SQL & BDD */}
						<div className="bg-slate-800/25 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center gap-3 group">
							<div className="w-12 h-12 flex items-center justify-center text-primary transition-transform">
								<svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
									<path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z" />
								</svg>
							</div>
							<span className="text-sm font-semibold text-text">SQL & BDD</span>
						</div>
					</div>
				</div>

				{/* Bento 5: Projets Principaux (Col Span 3) */}
				<div id="projets" className="col-span-1 md:col-span-3 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4 flex justify-between items-center">
						<span>Projets Principaux</span>
						<button className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1 transition-colors bg-primary/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/20 backdrop-blur-xs shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
							Voir le portfolio détaillé <span className="text-lg leading-none">→</span>
						</button>
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

						{/* Projet 1 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://mylifehub.vercel.app/login" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/LifeHub Logo.png" alt="LifeHub" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="https://mylifehub.vercel.app/login" target="_blank" rel="noopener noreferrer">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[LifeHub]</h4>
								</a>
								<p className="text-sm text-text-muted mb-2 line-clamp-2 leading-relaxed">[Site Web de gestion de projet personnel - Suivi des idees,  etat des projets et passions]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Web]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Front - ts]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Back - sql]</span>
									</div>
								</div>
								<div className="flex w-full m-2 justify-end">
									<a
										href="https://mylifehub.vercel.app/login"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Projet 2 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://github.com/hle-roux/ft_transcendence" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/pong.jpg" alt="pong" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="#">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Transcendance]</h4>
								</a>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Jeu Pong en multijoueur sur navigateur avec authentification, database, API, 2FA]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Front - TS]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Back - API - db]</span>
									</div>
									<a
										href="https://github.com/hle-roux/ft_transcendence"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Projet 3 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://github.com/DX4RK/red-tetris" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/tetris.png" alt="tetris" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="#">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Red_Tetris] - En Cours</h4>
								</a>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Une Web-app Tetris en temps reel et en multijoueur ]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Tech]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Tech]</span>
									</div>
									<a
										href="https://github.com/DX4RK/red-tetris"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] px-1 group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>

				{/* Bento 6: Projets Réalisés (Col Span 3) */}
				<div className="col-span-1 md:col-span-3 bg-slate-900/35 backdrop-blur-xs rounded-[var(--radius-xl)] p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.2)] hover:bg-slate-900/50 hover:border-white/35 transition-all duration-300">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4 flex justify-between items-center">
						<span>Projets secondaires et notions apprises</span>
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

						{/* Projet 3 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://github.com/hle-roux" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/python" alt="Python" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="#">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Formation Python]</h4>
								</a>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Courte description du projet. Quel problème résout-il et quelles technologies clés ont été utilisées ?]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Tech]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Tech]</span>
									</div>
									<a
										href="https://github.com/hle-roux"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>
						{/* Projet 1 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://github.com/hle-roux/cub3D" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/raycasting.png" alt="raycasting" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="#">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Cub3D]</h4>
								</a>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Jeu en vue a la 1er personne en 3D realise utilisant le raycasting]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[C]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Raycasting]</span>
									</div>
									<a
										href="https://github.com/hle-roux/cub3D"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Projet 2 */}
						<div className="group rounded-2xl overflow-hidden bg-slate-800/25 backdrop-blur-sm border border-white/15 shadow-[0_4px_20px_0_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.15)] flex flex-col h-full relative">
							<a href="https://github.com/hle-roux/cpp" target="_blank" rel="noopener noreferrer" className="h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden border-b border-white/10 block">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<img src="/C++.png" alt="c++" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
							</a>
							<div className="p-6 flex flex-col flex-1">
								<a href="#">
									<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Formation C++]</h4>
								</a>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[10 modules concu pour developper des bases solides en programmation c++ et oriente objet]</p>
								<div className="flex items-end justify-between gap-2 mt-auto pt-2">
									<div className="flex flex-wrap gap-2">
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[C++]</span>
										<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">[Object Oriented]</span>
									</div>
									<a
										href="https://github.com/hle-roux/cpp"
										target="_blank"
										rel="noopener noreferrer"
										className="group/repo flex items-center p-2 rounded-xl bg-slate-800/60 border border-white/15 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 shrink-0 overflow-hidden"
										title="View repo"
									>
										<span className="max-w-0 opacity-0 group-hover/repo:max-w-[100px] group-hover/repo:opacity-100 group-hover/repo:mr-1.5 translate-x-3 group-hover/repo:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold text-primary">
											View repo
										</span>
										<svg className="w-4 h-4 text-primary group-hover/repo:translate-x-1 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</section>
	);
}


