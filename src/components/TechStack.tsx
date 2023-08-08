import MonitorIcon from '@/icons/MonitorIcon';
import HtmlIcon from '@/icons/techIcons/HtmlIcon';
import styles from './TechStack.module.css';

export const TechStack = () => {
	return (
		<article className={styles.cardContainer}>
			<div className={styles.titleContainer}>
				<MonitorIcon />
				<h4 className={styles.title}>Front End</h4>
			</div>
			<div className={styles.techList}>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
				<ul className={styles.techItem}>
					<HtmlIcon />
					<p className={styles.techName}>HTML</p>
				</ul>
			</div>
		</article>
	);
};
