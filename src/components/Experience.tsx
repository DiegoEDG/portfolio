import styles from './Experience.module.css';

const Experience = () => {
	return (
		<section className={styles.experienceContainer}>
			<h3 className={styles.title}>Work Experience</h3>
			<div className={styles.cardContainer}>
				<article className={styles.card}>
					<h4 className={styles.cardTitle}>HCL Technologies</h4>
					<p className={styles.date}>Feb-22 / Current</p>
					<p className={styles.position}>Front End Developer</p>
				</article>
				<article className={styles.card}>
					<h4 className={styles.cardTitle}>HCL Technologies</h4>
					<p className={styles.date}>Feb-22 / Current</p>
					<p className={styles.position}>Front End Developer</p>
				</article>
				<article className={styles.card}>
					<h4 className={styles.cardTitle}>HCL Technologies</h4>
					<p className={styles.date}>Feb-22 / Current</p>
					<p className={styles.position}>Front End Developer</p>
				</article>
				<article className={styles.card}>
					<h4 className={styles.cardTitle}>HCL Technologies</h4>
					<p className={styles.date}>Feb-22 / Current</p>
					<p className={styles.position}>Front End Developer</p>
				</article>
			</div>
		</section>
	);
};

export default Experience;
