import './globals.css';
import type { Metadata } from 'next';
import { REM } from 'next/font/google';

const rem = REM({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Digudev',
	description: 'Portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={rem.className}>{children}</body>
		</html>
	);
}
