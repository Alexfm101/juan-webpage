// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
			</head>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}	

export default MyApp;
