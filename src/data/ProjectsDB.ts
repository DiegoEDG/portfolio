import { StaticImageData } from 'next/image';
import EnseImg from '../assets/ense-mockup.webp';
import HoobankImg from '../assets/hoobank-mockup.webp';
import MoviesImg from '../assets/movies-mockup.webp';
import PokedexImg from '../assets/pokedex-mockup.webp';
import BudgetImg from '../assets/budget-mockup.webp';
import CliImg from '../assets/cli-mockup.webp';
import CalculatorImg from '../assets/calculator-mockup.webp';
import OpenJiraImg from '../assets/open-jira-mockup.webp';
import TesloImg from '../assets/teslo-mockup.webp';
import ReadingImg from '../assets/reading-list-mockup.webp';

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
		description: 'Amazing landing page focusing on UI/UX to increase sales for a digital studio.',
		image: EnseImg,
		ghLink: 'https://github.com/DiegoEDG/ense-landing',
		demoLink: 'https://www.ensestudio.com/'
	},
	{
		name: 'Movie App',
		description:
			'Movies app that shows different movies based on categories like Playing now, Popular, Top Rated, Upcoming. The data is fethching from the MovieDB api.',
		image: MoviesImg,
		ghLink: 'https://github.com/DiegoEDG/MoviesApp'
	},
	{
		name: 'Pokedex',
		description: 'App that shows Pokenons by number, the pokemons data are fetching from PokeApi.',
		image: PokedexImg,
		ghLink: 'https://github.com/DiegoEDG/PokedexRN'
	},
	{
		name: 'HooBank Landing Page',
		description: 'Amazing landing page for a fake bank focusing on a great UI/UX.',
		image: HoobankImg,
		ghLink: 'https://github.com/DiegoEDG/Hoobank-landingPage',
		demoLink: 'https://diegoedg.github.io/Hoobank-landingPage/'
	},
	{
		name: 'Teslo Shop',
		description: 'Clone of Tesla Shop in order to create a kind of template for Ecommerce website.',
		image: TesloImg,
		ghLink: 'https://github.com/DiegoEDG/teslo-shop'
	},
	{
		name: 'Open Jira',
		description: 'To-Do web app to manage your task using the popular drag and drop functionality.',
		image: OpenJiraImg,
		ghLink: 'https://github.com/DiegoEDG/open-jira-app'
	},
	{
		name: 'Reading list',
		description: 'Small Bookstore to manage books that you want to buy/read (Chellenge provide by Midudev).',
		image: ReadingImg,
		ghLink: 'https://github.com/DiegoEDG/pruebas-tecnicas/tree/main/pruebas/01-reading-list/diegoedg'
	},
	{
		name: 'iOS Calculator App',
		description: 'Clone of iOS Calculator, adding new functionality to have a better app experience.',
		image: CalculatorImg,
		ghLink: 'https://github.com/DiegoEDG/calculatorRN'
	},
	{
		name: 'CLI To-Do App',
		description: 'To-Do console app to manage tasks in a CLI environment.',
		image: CliImg,
		ghLink: 'https://github.com/DiegoEDG/task-manager-console-app'
	},
	{
		name: 'Budget Manager',
		description: 'Budget manager where you can track your expenses based on a budget that you can define.',
		image: BudgetImg,
		ghLink: 'https://github.com/DiegoEDG/control-de-gastos',
		demoLink: 'https://romantic-kowalevski-b69217.netlify.app/'
	}
];
