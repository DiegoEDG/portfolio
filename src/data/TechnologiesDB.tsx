import {
	CLIIcon,
	CssIcon,
	DockerIcon,
	FigmaIcon,
	GitIcon,
	GraphqlIcon,
	HtmlIcon,
	JestIcon,
	JsIcon,
	MongoIcon,
	NestIcon,
	NextIcon,
	NodeIcon,
	PostgressIcon,
	ReactIcon,
	SassIcon,
	TsIcon
} from '@/icons';

export interface ITechStack {
	techName: string;
	icon: JSX.Element;
}

export const FrontEndStack: ITechStack[] = [
	{
		techName: 'HTML',
		icon: <HtmlIcon />
	},
	{
		techName: 'CSS',
		icon: <CssIcon />
	},
	{
		techName: 'JavaScript',
		icon: <JsIcon />
	},
	{
		techName: 'TypeScript',
		icon: <TsIcon />
	},
	{
		techName: 'ReactJS',
		icon: <ReactIcon />
	},
	{
		techName: 'NextJS',
		icon: <NextIcon />
	},
	{
		techName: 'React Native',
		icon: <ReactIcon />
	}
];

export const BackEndStack: ITechStack[] = [
	{
		techName: 'NodeJS',
		icon: <NodeIcon />
	},
	{
		techName: 'NestJS',
		icon: <NestIcon />
	},

	{
		techName: 'MongoDB',
		icon: <MongoIcon />
	},
	{
		techName: 'PostgreSQL',
		icon: <PostgressIcon />
	}
];

export const ComplementaryStack: ITechStack[] = [
	{
		techName: 'Git',
		icon: <GitIcon />
	},
	{
		techName: 'JestJS',
		icon: <JestIcon />
	},
	{
		techName: 'Docker',
		icon: <DockerIcon />
	},
	{
		techName: 'CLI',
		icon: <CLIIcon />
	},
	{
		techName: 'Figma',
		icon: <FigmaIcon />
	},
	{
		techName: 'GraphQL',
		icon: <GraphqlIcon />
	}
];
