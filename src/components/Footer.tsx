import { GithubIcon, LinkedInIcon } from '@/icons';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<section className={styles.footerContainer}>
			<div>
				<GithubIcon /> <LinkedInIcon />
			</div>
			<p className={styles.brand}>Digudev ®</p>
		</section>
	);
};

export default Footer;
