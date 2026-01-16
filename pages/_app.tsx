import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div id="top" className="flex min-h-screen flex-col">
			<div className="flex-1">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	)
}

export default MyApp
