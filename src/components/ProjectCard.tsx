import Image from 'next/image';
import styles from './ProjectCard.module.css';
import bgImg from '../assets/imgtest.jpg';

const ProjectCard = () => {
	return (
		<article className={styles.cardContainer}>
			<div className={styles.projectInfo}>Amet deserunt sit pariatur reprehenderit ad aliqua magna officia et.</div>
			<Image className={styles.bgImg} src={bgImg} height={400} width={450} alt="image test" />
		</article>
	);
};

export default ProjectCard;
