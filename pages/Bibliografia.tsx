import Navbar from '../components/Navbar';

export default function Bibliografia() {
	return (
		<div>
			<Navbar />
			<section className="mt-10">
				<div className="flex justify-center">
					<h1 className="text-center font-Comfortaa font-bold text-gray-800 text-3xl">
						Bibliografia
					</h1>
				</div>
			</section>
			<section className="mt-10 flex flex-col md:flex-row md: max-w-2xl md:mx-auto">
				<div className="shadow-lg mt-10 p-2 max-w-2xl mx-auto">
					<div className="flex flex-col items-center text-center px-4 mt-5 font-semibold text-gray-500 xl:text-xl">
						<p className="font-Comfortaa">Hey! mi nombre es Juan.</p>
						<p className="font-Comfortaa">
							Soy Fotografo y Artista Digital.
						</p>
						<p className="font-Comfortaa">Vivo en Venezuela.</p>
						<p className="font-Comfortaa">
							Mientras estudio una licenciatura en artes, me dedico al
							arte digital y fotografiar momentos iconicos dentro de
							la fotografia de moda y retratos.
					</p>
				</div>
			</div>
				<div className="">
					<div className="w-full">
						<div className="relative h-72 w-72 flex justify-center mx-auto">
							<div className="absolute z-0 mt-4 border-2 border-gray-900 w-52 h-72 lg:h-80 rounded-xl " />
							<img
								className="absolute rounded-xl h-72 lg:h-80 shadow-xl transform translate-x-5"
								src="/images/test.jpg"
								alt="juan foto"
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mt-20 flex flex-col justify-center ">
					<p className="text-center font-Comfortaa text-xl font-bold text-red-400">
						Sigueme en mis redes sociales
					</p>
					<img className="h-14 mt-10" src="/svgs/flecha.svg" alt="" />
				</div>
			</section>
		</div>
	);
}
