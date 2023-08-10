import { ITechStack } from '@/data';
import { FC } from 'react';
import styles from './TechStack.module.css';

interface Props {
	title: string;
	icon: JSX.Element;
	techStack: ITechStack[];
}

export const TechStack: FC<Props> = ({ title, icon, techStack }) => {
	return (
		<article className={styles.cardContainer}>
			<div className={styles.titleContainer}>
				{icon}
				<h4 className={styles.title}>{title}</h4>
			</div>
			<div className={styles.techList}>
				{techStack.map((tech) => (
					<ul className={styles.techItem} key={tech.techName}>
						{tech.icon}
						<p className={styles.techName}>{tech.techName}</p>
					</ul>
				))}
			</div>
		</article>
	);
};
