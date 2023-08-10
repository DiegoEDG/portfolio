import { ExperienceDB } from '@/data';
import styles from './Experience.module.css';

const Experience = () => {
	return (
		<section className={styles.experienceContainer}>
			<h3 className={styles.title}>Work Experience</h3>
			<div className={styles.cardContainer}>
				{ExperienceDB.map((job) => (
					<article className={styles.card} key={job.company}>
						<h4 className={styles.cardTitle}>{job.company}</h4>
						<p className={styles.date}>{job.date}</p>
						<p className={styles.position}>{job.position}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Experience;
