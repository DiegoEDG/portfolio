import { AchievementDB } from '@/data';
import { CheckIcon } from '@/icons';
import styles from './Achievements.module.css';

const Achievements = () => {
	return (
		<section className={styles.achieveContainer}>
			<h3 className={styles.title}>Achievements</h3>
			<div className={styles.cardContainer}>
				{AchievementDB.map(({ description }) => (
					<article className={styles.card} key={description}>
						<div>
							<CheckIcon />
						</div>
						<p className={styles.description}>{description}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Achievements;
