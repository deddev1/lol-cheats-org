import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Review = {
	slug: string;
	handle: string;
	text: string;
	short?: string;
	date: string;
	rating: number;
	href: string;
	plan?: 'Monthly' | 'Lifetime';
};

type Props = {
	locale: string;
	reviews: Review[];
	averageRating: number;
	totalCount: number;
	reviewsBasePath: string;
};

function formatDate(iso: string, locale: string) {
	return new Date(`${iso}T12:00:00`).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

function initial(handle: string) {
	return handle.replace(/^@/, '').charAt(0).toUpperCase();
}

function displayHandle(handle: string) {
	return handle.startsWith('@') ? handle : `@${handle}`;
}

function StarRow({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
	const full = Math.floor(rating);
	const partial = rating - full >= 0.25;
	const empty = 5 - full - (partial ? 1 : 0);

	return (
		<span className={`reviews__stars reviews__stars--${size}`} aria-hidden="true">
			{Array.from({ length: full }, (_, i) => (
				<svg key={`f-${i}`} viewBox="0 0 20 20" fill="currentColor">
					<path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z" />
				</svg>
			))}
			{partial ? (
				<svg viewBox="0 0 20 20" fill="currentColor" className="reviews__star-partial">
					<defs>
						<linearGradient id="star-partial-fill">
							<stop offset="55%" stopColor="currentColor" />
							<stop offset="55%" stopColor="transparent" />
						</linearGradient>
					</defs>
					<path
						d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z"
						fill="url(#star-partial-fill)"
					/>
				</svg>
			) : null}
			{Array.from({ length: empty }, (_, i) => (
				<svg key={`e-${i}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
					<path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z" />
				</svg>
			))}
		</span>
	);
}

function HomeReviewsInner({
	locale,
	reviews,
	averageRating,
	totalCount,
	reviewsBasePath,
}: Props) {
	const { t } = useTranslation();
	const ratingLabel = averageRating.toFixed(1);

	return (
		<section className="reviews" aria-labelledby="reviews-title">
			<div className="shell">
				<header className="reviews__head">
					<div className="reviews__head-copy">
						<p className="reviews__eyebrow">{t('reviews.eyebrow')}</p>
						<h2 id="reviews-title">{t('reviews.homeTitle')}</h2>
					</div>
					<div
						className="reviews__score"
						aria-label={t('reviews.averageAria', { rating: ratingLabel, count: totalCount })}
					>
						<strong>{ratingLabel}</strong>
						<div>
							<StarRow rating={averageRating} size="lg" />
							<p>{t('reviews.buyerReviews', { count: totalCount })}</p>
						</div>
					</div>
				</header>
			</div>

			<div className="reviews__marquee" data-marquee>
				<div className="reviews__track">
					{[0, 1].map((copy) => (
						<ul className="reviews__row" aria-hidden={copy === 1 ? true : undefined} key={copy}>
							{reviews.map((review) => (
								<li key={`${copy}-${review.slug}`}>
									<article className="review-card">
										<div className="review-card__top">
											<StarRow rating={review.rating} />
											{review.plan ? (
												<span className="review-card__plan">{review.plan}</span>
											) : null}
										</div>
										<p className="review-card__text">{review.short ?? review.text}</p>
										<footer className="review-card__foot">
											<span className="review-card__avatar" aria-hidden="true">
												{initial(review.handle)}
											</span>
											<div className="review-card__meta">
												{copy === 1 ? (
													<span className="review-card__name">{displayHandle(review.handle)}</span>
												) : (
													<a className="review-card__name" href={review.href}>
														{displayHandle(review.handle)}
													</a>
												)}
												<span className="review-card__verified">{t('reviews.verified')}</span>
												<time dateTime={review.date}>{formatDate(review.date, locale)}</time>
											</div>
										</footer>
									</article>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>

			<div className="shell">
				<p className="reviews__more">
					<a href={reviewsBasePath}>{t('reviews.readAll')}</a>
				</p>
			</div>
		</section>
	);
}

export default function HomeReviewsApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeReviewsInner {...props} />
		</I18nProvider>
	);
}
