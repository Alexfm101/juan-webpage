import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			{/* portada */}
			<div className="text-center py-20 px-5">
				<div className="absolute inset-x-0 top-0">
                        <Navbar/>
				</div>
				<div className="lg:grid lg:grid-cols-2 lg:mt-10 lg:p-10 2xl:max-w-6xl 2xl:mx-auto">
					<div className="py-10 lg:relative">
						<div className="lg:absolute lg:inset-x-0">
							<h1 className="text-4xl font-bold font-Comforta lg:text-5xl">
								Hola soy Fraum
							</h1>
							<h2 className="text-base font-medium text-gray-500 font-Comfortaa lg:mt-2 lg:text-lg">
								Artista Digital y Fotografo
							</h2>
						</div>
					</div>
					<div className="">
						<div className="relative h-72 w-72 mx-auto">
							<div className="absolute z-0 mt-4 border-2 border-black w-52 h-80 rounded-xl transform translate-x-5"/>
							<img
								className="absolute rounded-xl h-80 shadow-xl transform translate-x-10"
								src="/images/test.jpg"
								alt="Juan Photo"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* que se hacer */}
		</>
	);
}
