import { BgImage } from '@/icons';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<div className={styles.textsContainer}>
				<p className={styles.title}>Embark on a Tour of My Work</p>
				<p className={styles.description}>
					Creating exceptional user-centric web experiences, combining stunning designs with intuitive functionality,
					using modern technologies and applying best-in-class development practices.
				</p>
			</div>
			<div className={styles.bgImage}>
				<BgImage />
			</div>
		</section>
	);
};

export default Hero;
