import GithubIcon from '@/icons/GithubIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
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
