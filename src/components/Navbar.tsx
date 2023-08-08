import GithubIcon from '@/icons/GithubIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
import NavbarIcon from '@/icons/NavbarIcon';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.itemsContainer}>
				<NavbarIcon />
				<p className={styles.title}>Portfolio</p>
			</div>
			<div className={styles.itemsContainer}>
				<Link href="#">
					<GithubIcon />
				</Link>
				<Link href="#" className={styles.icon}>
					<LinkedInIcon />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
