import React from 'react';
import Navbar from '../components/Navbar';
import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
    cloud: {
        cloudName: 'aleale'
    }
})

export default function Contactame() {
	const picture = cld.image("juanPhotos/7");

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
			<section className="mt-10 md:flex md:justify-center md:mx-auto">
				<div className=" md:max-w-lg">
					<AdvancedImage cldImg={picture} />
				</div>

				<form 
					className="px-4 space-y-5" 
					name="contact" 
				>
					<div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
						<div>
							<label>Nombre Completo</label>
							<input
								className="border w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-lg"
								type="text"
								placeholder="Nombre"
								name="user_name"
								id="user_name"

							/>
						</div>
						<div>
							<label>Correo Electrónico</label>
							<input
								className="border w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-lg"
								type="email"
								placeholder="correo"
								name="user_email"
								id="user_email"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="">Mensaje</label>
						<textarea
							className="border w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-lg"
							name="message"
							id="message"
							cols={50}
							rows={20}
							placeholder="En que te puedo ayudar"
						/>
					</div>
					<div className="flex justify-center">
						<button
							className=" bg-gray-800 px-6 py-2 rounded-xl text-xl text-white font-Comfortaa font-bold focus:outline-none focus:bg-red-400"
							type="submit"
							value="send"
						>
							Enviar
						</button>
					</div>
				</form>
			</section>
		</>
	);
}
