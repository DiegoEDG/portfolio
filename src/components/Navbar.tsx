import Link from 'next/link';
import { GithubIcon, LinkedInIcon, NavbarIcon } from '@/icons';
import styles from './Navbar.module.css';
import { Links } from '@/constants';

const Navbar = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.itemsContainer}>
				<NavbarIcon />
				<p className={styles.title}>Digudev</p>
			</div>
			<div className={styles.itemsContainer}>
				<Link href={Links.github} target="blank">
					<GithubIcon />
				</Link>
				<Link href={Links.linkedIn} className={styles.icon} target="blank">
					<LinkedInIcon />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
