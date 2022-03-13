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


	const [status, setStatus] = React.useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const [inputs, setInputs] = React.useState({
		name: '',
        email: '',
        message: '',
    });

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
				name: '',
                email: '',
                message: '',
            });
        } else {
            setStatus({
				submitted: false,
				submitting: false,
                info: { error: true, msg: msg },
            });
        }
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        });
        const text = await res.text();
        handleResponse(res.status, text);
    };


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
					onSubmit={handleOnSubmit}
				>
					<div className="space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-2">
						<div>
							<label htmlFor='name'>Nombre Completo</label>
							<input
								className="border border-gray-900 w-full p-2 focus:outline-none focus:border-red-400 rounded-sm"
								type="text"
								placeholder="Juan Augusto"
								name="name"
								id="name"
								onChange={handleOnChange}
								required
								value={inputs.name}
							/>
						</div>
						<div>
							<label htmlFor='email'>Correo Electrónico</label>
							<input
								className="border w-full p-2 border-gray-900 rounded-sm focus:outline-none focus:border-red-400"
								type="email"
								placeholder="correo@gmail.com"
								name="email"
								id="email"
								onChange={handleOnChange}
								required
								value={inputs.email}
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
							onChange={handleOnChange}
							required
							value={inputs.message}
						/>
					</div>
					<div className="flex justify-center">
						<button
							className=" 
								bg-gray-900 px-6 py-2 rounded-sm text-xl text-white 
								font-Comfortaa font-bold focus:outline-none focus:bg-red-400"
							type="submit"
							value="send"
							disabled={status.submitting}
						>
							{!status.submitting
								? !status.submitted
									? 'Submit'
									: 'Submitted'
								: 'Submitting...'
							}						
						</button>
						<div className="mt-4">
							{status.info.error && (
								<div className="text-red-400">
									Error: {status.info.msg}
								</div>
							)}
							{!status.info.error && status.info.msg && (
								<div className="text-green-500">{status.info.msg}</div>
							)}
						</div>
					</div>
				</form>
			</section>
		</>
	);
}
