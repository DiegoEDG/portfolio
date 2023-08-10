import { Links } from '@/constants';
import { GithubIcon, LinkedInIcon } from '@/icons';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<section className={styles.footerContainer}>
			<div className={styles.iconsContainer}>
				<Link href={Links.github} target="blank">
					<GithubIcon />
				</Link>
				<Link href={Links.linkedIn} target="blank">
					<LinkedInIcon />
				</Link>
			</div>
			<p className={styles.brand}>Digudev ®</p>
		</section>
	);
};

export default Footer;
