import type { CSSProperties, ReactNode } from 'react';

export interface ShimmerButtonProps {
	href?: string;
	className?: string;
	shimmerColor?: string;
	shimmerSize?: string;
	shimmerDuration?: string;
	background?: string;
	borderRadius?: string;
	rel?: string;
	target?: string;
	'aria-label'?: string;
	children?: ReactNode;
}

const baseStyle = (
	shimmerColor: string,
	shimmerSize: string,
	shimmerDuration: string,
	background: string,
	borderRadius: string,
): CSSProperties =>
	({
		'--spread': '90deg',
		'--shimmer-color': shimmerColor,
		'--radius': borderRadius,
		'--speed': shimmerDuration,
		'--cut': shimmerSize,
		'--bg': background,
	}) as CSSProperties;

function ShimmerButtonInner({
	className = '',
	shimmerColor = '#22d3ee',
	shimmerSize = '0.05em',
	shimmerDuration = '3s',
	background = 'rgba(9, 9, 11, 0.94)',
	borderRadius = '999px',
	children,
}: ShimmerButtonProps) {
	return (
		<>
			<span className="shimmer-btn__fx" aria-hidden="true">
				<span className="shimmer-btn__slide">
					<span className="shimmer-btn__spin" />
				</span>
			</span>
			<span className="shimmer-btn__content">{children}</span>
			<span className="shimmer-btn__sheen" aria-hidden="true" />
			<span className="shimmer-btn__backdrop" aria-hidden="true" />
		</>
	);
}

export default function ShimmerButton({
	href,
	className = '',
	shimmerColor = '#22d3ee',
	shimmerSize = '0.05em',
	shimmerDuration = '3s',
	background = 'rgba(9, 9, 11, 0.94)',
	borderRadius = '999px',
	rel,
	target,
	'aria-label': ariaLabel,
	children,
}: ShimmerButtonProps) {
	const style = baseStyle(shimmerColor, shimmerSize, shimmerDuration, background, borderRadius);

	if (href) {
		return (
			<a
				className={`shimmer-btn ${className}`.trim()}
				style={style}
				href={href}
				rel={rel}
				target={target}
				aria-label={ariaLabel}
			>
				<ShimmerButtonInner
					shimmerColor={shimmerColor}
					shimmerSize={shimmerSize}
					shimmerDuration={shimmerDuration}
					background={background}
					borderRadius={borderRadius}
				>
					{children}
				</ShimmerButtonInner>
			</a>
		);
	}

	return (
		<button type="button" className={`shimmer-btn ${className}`.trim()} style={style} aria-label={ariaLabel}>
			<ShimmerButtonInner
				shimmerColor={shimmerColor}
				shimmerSize={shimmerSize}
				shimmerDuration={shimmerDuration}
				background={background}
				borderRadius={borderRadius}
			>
				{children}
			</ShimmerButtonInner>
		</button>
	);
}
