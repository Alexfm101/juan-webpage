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

	const [user_name, setUser_name] = React.useState("");
	const [user_email, setUser_email] = React.useState("");
	const [message, setMessage] = React.useState("");

	const handleSubmit = () => {
		
	}

	return (
		<>
			<Navbar />
			<section className="mt-10">
				<div className="flex justify-center flex-col space-y-10">
					<h1 className="text-center font-Comfortaa text-gray-900 font-semibold text-3xl md:text-4xl">
						Contactame
					</h1>
				</div>
			</section>

			{/* formulario */}
			<section className="flex flex-col mt-5 md:flex-row md:max-w-6xl md:mx-auto lg:space-x-5 lg:mt-15">

				<AdvancedImage cldImg={picture} className="p-4 m-4 md:w-96 md:h-96 md:p-0 md:pl-4 lg:h-auto" />

				<form 
					className="px-4 space-y-5 " 
					name="contact" 
					onSubmit={handleSubmit}
				>
					<div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
						<div>
							<label>Nombre Completo</label>
							<input
								className="border border-gray-900 w-full p-2 focus:outline-none focus:border-red-400 rounded-sm"
								type="text"
								placeholder="Juan Augusto"
								name="user_name"
								id="user_name"
								value={user_name}
								onChange={(e) => {
									setUser_name(e.target.value);
								}}

							/>
						</div>
						<div>
							<label>Correo Electrónico</label>
							<input
								className="border w-full p-2 border-gray-900 rounded-sm focus:outline-none focus:border-red-400"
								type="email"
								placeholder="correo@gmail.com"
								name="user_email"
								id="user_email"
								value={user_email}
								onChange={(e) => {
									setUser_email(e.target.value);
								}}

							/>
						</div>
					</div>
					<div>
						<label htmlFor="">Mensaje</label>
						<textarea
							className="border w-full p-2 border-gray-900 rounded-sm focus:outline-none focus:border-red-400 "
							name="message"
							id="message"
							cols={50}
							rows={10}
							placeholder="En que te puedo ayudar"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}

						/>
					</div>
					<div className="flex justify-center">
						<button
							className=" bg-gray-900 px-6 py-2 rounded-sm text-xl text-white font-Comfortaa font-bold focus:outline-none focus:bg-red-400"
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
