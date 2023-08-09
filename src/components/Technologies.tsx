import { TechStack } from './TechStack';
import { BackEndStack, ComplementaryStack, FrontEndStack } from '@/data';
import { ExtraIcon, MonitorIcon, ServerIcon } from '@/icons';
import styles from './Technologies.module.css';

const Technologies = () => {
	return (
		<section className={styles.techContainer}>
			<h3 className={styles.title}>Technologies I use</h3>
			<div className={styles.stackContainer}>
				<TechStack title="Front End" icon={<MonitorIcon />} techStack={FrontEndStack} />
				<TechStack title="Back End" icon={<ServerIcon />} techStack={BackEndStack} />
				<TechStack title="Complementary" icon={<ExtraIcon />} techStack={ComplementaryStack} />
			</div>
		</section>
	);
};

export default Technologies;
