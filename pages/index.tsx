import Footer from "../components/Footer";
import  Navbar  from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<head>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"/>
			</head>

			<Navbar/>
			{/* portada */}
			<div className="flex flex-col p-10 justify-center items-center">
				<h1 className="text-4xl font-bold  font-Comfortaa text-gray-900">Fraum</h1>
				<h2 className=" text-base font-normal text-gray-500 font-Comfortaa">Artista Digital y Fotografo</h2>
			</div>
			{/* quien soy */}
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-lg font-bold text-gray-600">Quien soy?</h1>
				<div className="flex flex-col justify-center items-center px-4">
					<p className="font-Comfortaa">
						Hey! mi nombre es Juan.
					</p>
					<p className="font-Comfortaa">
						Soy Fotografo y Artista Digital.
					</p>
					<p className="font-Comfortaa">
						Vivo en Venezuela.
					</p>
					<p className="text-justify font-Comfortaa">
						Mientras estudio una licenciatura en artes, me dedico al arte digital y fotografiar  momentos iconicos dentro de la fotografia de moda y retratos.
					</p>
				</div>
				<div className="mt-10">
					<div className="w-full">
						<div className="relative h-72 w-72 flex justify-center">
							<div className="absolute z-0 mt-4 border-2 border-gray-900 w-52 h-72 rounded-xl " />
							<img
								className="absolute rounded-xl h-72 shadow-xl transform translate-x-5"
								src="/images/test.jpg"
								alt="Luis Güette photo"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* que se hacer */}
			<div className="mt-20 flex flex-col justify-center items-center">
				<h1 className="text-lg font-bold text-gray-600">Chequea mi Portafolio</h1>
				<div className="w-full mt-10">
					<div className="flex relative justify-center">
						<div className="absolute z-0 border-2 border-gray-900 shadow-2xl bg-black w-48 h-72 rounded-xl " />
						<img
							className=" rounded-xl h-72 opacity-50  shadow-2xl "
							src="/images/test.jpg"
							alt=""
						/>
						<div className="absolute mt-28 ">
							<h1 className=" font-bold text-gray-100 ">fotografia</h1>
						</div>
					</div>
				</div>
			</div>

			<Footer/>
		</div>
	);
}
