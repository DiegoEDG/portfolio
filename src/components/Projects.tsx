import { ProjectsDB } from '@/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
	return (
		<section className={styles.mainContainer}>
			<h3 className={styles.title}>Projects I've Created</h3>
			<div className={styles.cardsContainer}>
				{ProjectsDB.slice(0, 6).map((project) => (
					<ProjectCard project={project} key={project.name} />
				))}
			</div>
		</section>
	);
};

export default Projects;
