import CheckIcon from '@/icons/CheckIcon';
import styles from './Achievements.module.css';

const Achievements = () => {
	return (
		<section className={styles.achieveContainer}>
			<h3 className={styles.title}>Achievements</h3>
			<div className={styles.cardContainer}>
				<article className={styles.card}>
					<div>
						<CheckIcon />
					</div>
					<p className={styles.description}>
						Leading a system migration to modern technologies while implementing and adhering to best-in-class
						development practices.
					</p>
				</article>
				<article className={styles.card}>
					<div>
						<CheckIcon />
					</div>
					<p className={styles.description}>Providing mentorship to a compact team of developers within the company.</p>
				</article>
				<article className={styles.card}>
					<div>
						<CheckIcon />
					</div>
					<p className={styles.description}>
						Increased sales, accompanied by positive user comments thanks to an impactful and strategic design.
					</p>
				</article>
				<article className={styles.card}>
					<div>
						<CheckIcon />
					</div>
					<p className={styles.description}>Getting Amazon Web Services practitioner certificate</p>
				</article>
			</div>
		</section>
	);
};

export default Achievements;
