import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';
import type { NavPaths } from '../../data/i18n/localized-nav-paths';

type Props = {
	locale: string;
	paths: NavPaths;
};

function HomeAboutInner({ paths }: { paths: NavPaths }) {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<div className="home__prose-callout">
				<h2 id="home-about-title" className="home__prose-kicker">
					{t('home.aboutTitle')}
				</h2>
				<p>{t('home.aboutP1')}</p>
				<p>
					{t('home.aboutP2Before')}{' '}
					<a href={paths.home}>{t('home.aboutPillar')}</a>
					{t('home.aboutP2Mid')}
					<a href={paths.lolEsp}>{t('home.aboutEsp')}</a>
					{t('home.aboutP2Mid')}
					<a href={paths.lolAimbot}>{t('home.aboutAimbot')}</a>
					{t('home.aboutP2Or')}
					<a href={paths.updates}>{t('home.aboutUndetected')}</a>
					{t('home.aboutP2After')}
				</p>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner paths={props.paths} />
		</I18nProvider>
	);
}
