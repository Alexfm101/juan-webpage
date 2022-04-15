import Navbar from '../components/Navbar';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Bibliografia() {
	return (

		<>
			<Head>
				<title>Sobre Mi | Fraum</title>
				<meta name="description" property="og:description" content="Juan Fraudita - un poco sobre mi" />
				<meta property="og:title" content="Sobre Mi | Fraum" />
				<meta property="og:url" content="https://fraum.vercel.app/Me" />
				<meta property="og:type" content="website" />
			</Head>

			<div>
				<Navbar />
				<section className="mt-10">
					<div className="flex justify-center">
						<h1 className="text-center font-Comfortaa text-gray-900 font-semibold text-3xl md:text-4xl">
							Un poco sobre mi
						</h1>
					</div>
				</section>

				<section className="flex flex-col mt-10 md:flex-row md:max-w-2xl md:mx-auto lg:space-x-5 lg:mt-15">
					<div className="">
						<div className="w-full">
							<div className="relative h-72 w-72 flex justify-center mx-auto lg:h-80">
								<div className="absolute z-0 mt-4 border-2 border-black w-52 h-72 md:max-w-2xl lg:h-80" />
								<Image
									layout="fill"
									objectFit="contain"
									className="transform translate-x-5"
									src="/images/juan.jpg"
									alt="juan foto"
								/>
							</div>
						</div>
					</div>
					<div className="pt-10 md:pt-0">
						<div className="flex flex-col px-4 font-semibold  xl:text-xl">
							<p className="font-Roboto">Hey! mi nombre es Juan.</p>
							<p className="font-Roboto mt-2">
								Soy Fotografo y Artista Digital.
							</p>
							<p className="font-Roboto mt-2">Vivo en Venezuela.</p>
							<p className="font-Roboto mt-2">
								Mientras estudio una licenciatura en artes, me dedico al
								arte digital y fotografiar momentos icónicos dentro de
								la fotografia callejera y retratos.
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer/>
		</>
	);
}