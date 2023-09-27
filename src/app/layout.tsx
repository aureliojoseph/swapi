import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Nav from '@/components/navBar/NavBar'
import Providers from '@/utils/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Star Wars Characters',
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
			<body className={inter.className}>
				<Providers>
					<Nav />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
