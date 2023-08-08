import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
	return (
		<section className={styles.mainContainer}>
			<h3 className={styles.title}>Projects</h3>
			<div className={styles.cardsContainer}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
};

export default Projects;
