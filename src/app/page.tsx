import { Achievements, Experience, Footer, Hero, Navbar, Projects, Technologies } from '@/components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			<Navbar />
			<Hero />
			<Experience />
			<Achievements />
			<Projects />
			<Technologies />
			<Footer />
		</main>
	);
}
