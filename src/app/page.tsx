import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			<Navbar />
			<Hero />
			<Projects />
			<Technologies />
		</main>
	);
}
