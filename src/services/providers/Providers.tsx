'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import Fallback from '@/utils/fallback/Fallback'

export default function Providers({ children }: any) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <Fallback />
	}

	return <ThemeProvider>{children}</ThemeProvider>
}
