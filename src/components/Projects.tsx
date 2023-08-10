import { ProjectsDB } from '@/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
	return (
		<section className={styles.mainContainer}>
			<h3 className={styles.title}>Projects</h3>
			<div className={styles.cardsContainer}>
				{ProjectsDB.map((project) => (
					<ProjectCard project={project} key={project.name} />
				))}
			</div>
		</section>
	);
};

export default Projects;
