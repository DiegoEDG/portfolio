import styles from './Hero.module.css';
import BgImage from '../icons/BgImage';

const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<div className={styles.textsContainer}>
				<p className={styles.title}>Welcome To</p>
				<p className={styles.title}>My Personal Portfolio</p>
				<p className={styles.description}>
					Creating exceptional user-centric web experiences, combining stunning designs with intuitive functionality,
					using modern technologies.
				</p>
			</div>
			<div className={styles.bgImage}>
				<BgImage />
			</div>
		</section>
	);
};

export default Hero;
