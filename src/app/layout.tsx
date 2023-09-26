import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Star Wars Finder',
	description:
		"All the Star Wars data you've ever wanted: Planets, Spaceships, Vehicles, People, Films and Species, From all SEVEN Star Wars films, Now with The Force Awakens data!"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
