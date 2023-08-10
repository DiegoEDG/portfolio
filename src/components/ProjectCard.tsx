import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { IProject } from '../data/ProjectsDB';
import { CodeIcon, DemoIcon } from '@/icons';

interface Props {
	project: IProject;
}

const ProjectCard = ({ project }: Props) => {
	return (
		<article className={styles.cardContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h3 className={styles.title}>{project.name}</h3>
					<p className={styles.description}>{project.description}</p>
					<div className={styles.linksContainer}>
						<Link className={styles.link} href={project.ghLink} target="blank">
							<CodeIcon /> <p style={{ marginLeft: '5px' }}>Code</p>
						</Link>
						{project.demoLink && (
							<Link className={styles.link} href={project.demoLink} target="blank">
								<DemoIcon /> <p>Demo</p>
							</Link>
						)}
					</div>
				</div>
			</div>
			<Image className={styles.bgImg} src={project.image} height={400} width={450} alt={project.name} />
		</article>
	);
};

export default ProjectCard;
