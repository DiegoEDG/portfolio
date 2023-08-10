import { StaticImageData } from 'next/image';
import EnseImg from '../assets/ense-mockup.webp';
import HoobankImg from '../assets/hoobank-mockup.webp';
import MoviesImg from '../assets/movies-mockup.webp';
import PokedexImg from '../assets/pokedex-mockup.webp';
import BudgetImg from '../assets/budget-mockup.webp';
import CliImg from '../assets/cli-mockup.webp';

export interface IProject {
	name: string;
	description: string;
	image: StaticImageData;
	ghLink: string;
	demoLink?: string;
}

export const ProjectsDB: IProject[] = [
	{
		name: 'Ense Studio Landing Page',
		description: 'Amazing landing page to increase sales for a digital studio',
		image: EnseImg,
		ghLink: 'https://github.com/DiegoEDG/ense-landing',
		demoLink: 'https://www.ensestudio.com/'
	},
	{
		name: 'Movie App',
		description: 'Mobile App to consult movies',
		image: MoviesImg,
		ghLink: 'https://github.com/DiegoEDG/MoviesApp'
	},
	{
		name: 'Pokedex',
		description: 'Mobile App doing fetching pokeApi for consult pokemon information',
		image: PokedexImg,
		ghLink: 'https://github.com/DiegoEDG/PokedexRN'
	},
	{
		name: 'HooBank Landing Page',
		description: 'Amazing landing page for a fake bank',
		image: HoobankImg,
		ghLink: 'https://github.com/DiegoEDG/Hoobank-landingPage',
		demoLink: 'https://diegoedg.github.io/Hoobank-landingPage/'
	},
	{
		name: 'Budget Manager',
		description: 'Budger manager app for control money spend',
		image: BudgetImg,
		ghLink: 'https://github.com/DiegoEDG/control-de-gastos',
		demoLink: 'https://romantic-kowalevski-b69217.netlify.app/'
	},
	{
		name: 'CLI To-Do App ',
		description: 'To-Do app for CLI',
		image: CliImg,
		ghLink: 'https://github.com/DiegoEDG/task-manager-console-app'
	}
];
