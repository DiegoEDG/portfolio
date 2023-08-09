import { ProjectsDB } from '@/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
	return (
		<section className={styles.mainContainer}>
			<h3 className={styles.title}>My Work</h3>
			<div className={styles.cardsContainer}>
				{ProjectsDB.map((project) => (
					<ProjectCard project={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
