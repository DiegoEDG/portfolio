import { TechStack } from './TechStack';
import styles from './Technologies.module.css';

const Technologies = () => {
	return (
		<section className={styles.techContainer}>
			<h3 className={styles.title}>Technologies I use</h3>
			<div className={styles.stackContainer}>
				<TechStack />
				<TechStack />
				<TechStack />
			</div>
		</section>
	);
};

export default Technologies;
