import React from 'react';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

export default function Contactame() {
	const form = React.useRef();
	
	const  onSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(process.env.EMAIL_SERVICE, process.env.EMAIL_TEMPLATE, form.current, process.env.EMAIL_USER)
		.then((response) => {
			console.log(response.status,response.text);
		}, (error) =>  {
			console.log(error.text);
		})
	}
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
				<form 
					className="p-4 space-y-5" 
					name="contact" 
					ref={form}
					onSubmit={onSubmit}
				>
					<div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
						<input
							className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
							type="text"
							placeholder="Nombre"
							name="user_name"
							id="user_name"

						/>
						<input
							className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-xl"
							type="email"
							placeholder="correo"
							name="user_email"
							id="user_email"
						/>
					</div>
					<textarea
						className="border-2 w-full p-2 border-gray-700 rounded-lg focus:outline-none focus:border-red-400 shadow-2xl"
						name="message"
						id="message"
						cols={30}
						rows={15}
						placeholder="En que te puedo ayudar"
					/>
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
