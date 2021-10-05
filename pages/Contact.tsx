import Navbar from '../components/Navbar';
a
export default function Contactame() {
	return (
		<>
			<Navbar />
			<section className="mt-10">
				<div className="flex justify-center flex-col space-y-10">
					<h1 className="text-center font-Comfortaa font-bold text-3xl">
						Contactame
					</h1>
				</div>
			</section>

			{/* formulario */}
			<section className="mt-10 md:max-w-xl md:flex md:mx-auto">
				<form className="p-4 space-y-5">
					<div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
						<input
							className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
							type="text"
							placeholder="Nombre"
							name="email"
							id="name"
						/>
						<input
							className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
							type="email"
							placeholder="correo"
							name="email"
							id="email"
						/>
					</div>
					<textarea
						className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-2xl"
						name=""
						id=""
						cols={30}
						rows={15}
						placeholder="En que te puedo ayudar"
					/>
					<div className="flex justify-center">
						<button
							className=" bg-gray-800 px-6 py-2 rounded-xl text-xl text-white font-Comfortaa font-bold focus:outline-none focus:bg-red-400"
							type="submit"
						>
							Enviar
						</button>
					</div>
				</form>
			</section>
		</>
	);
}
