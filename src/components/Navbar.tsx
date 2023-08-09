import Link from 'next/link';
import { GithubIcon, LinkedInIcon, NavbarIcon } from '@/icons';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.itemsContainer}>
				<NavbarIcon />
				<p className={styles.title}>Digudev</p>
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
