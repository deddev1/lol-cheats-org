import { useRef, useState } from 'react';

type Props = {
	src: string;
	poster: string;
	alt: string;
};

export default function LazyVideoPlayer({ src, poster, alt }: Props) {
	const [active, setActive] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = () => {
		setActive(true);
		requestAnimationFrame(() => {
			void videoRef.current?.play();
		});
	};

	return (
		<div className="lazy-video">
			{active ? (
				<video
					ref={videoRef}
					className="lazy-video__player"
					controls
					playsInline
					preload="metadata"
					poster={poster}
				>
					<source src={src} type="video/mp4" />
				</video>
			) : (
				<button
					type="button"
					className="lazy-video__trigger"
					onClick={handlePlay}
					aria-label={`Play video: ${alt}`}
				>
					<img src={poster} alt={alt} width={480} height={405} loading="lazy" decoding="async" />
					<span className="lazy-video__play" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="currentColor">
							<path d="M8 5.5v13l11-6.5-11-6.5z" />
						</svg>
					</span>
				</button>
			)}
		</div>
	);
}
