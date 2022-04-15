import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { getPictures } from './api/pictures';
import { AdvancedImage } from '@cloudinary/react';

export default function Home() {

  	const [pictures, setPictures] = React.useState([]);
	const [open, setOpen] = React.useState(false);
	const [image, setImage] = React.useState();

	React.useEffect(() => {
		const fetchdata = async () => {
			const data = await getPictures("home", 20);
			setPictures(data);
		}

		fetchdata().catch(console.error);
	}, []);

	const handleOnClick = (e) => {
		setImage(e.target.src);
		setOpen(true);
	};

	return (
		<>
			<Head>
				<title>Home | Fraum</title>
				<meta name="description" property="og:description" content="Juan Fraudita - Fotografía" />
				<meta property="og:title" content="Home | Fraum" />
				<meta property="og:url" content="https://fraum.vercel.app/" />
				<meta property="og:type" content="website" />
			</Head>

			<div className='relative overflow-hidden'>
				<Navbar />
				<ul className=" mt-10 container md:mx-auto md:max-w-7xl md:masonry">
					{pictures.map((picture, id) => (
						<li onClick={handleOnClick} key={id} className="m-2 md:m-0 md:item">
							<AdvancedImage cldImg={picture} className="hover:opacity-50" />
						</li>
					))}
				</ul>
				{open && (
					<div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80">
						<button onClick={() => setOpen(false)} className='p-4 focus:outline-none' >
							<svg
								className=""
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"

								fill="#FFFFFF"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							</svg>
						</button>

						<img src={image} className="relative px-5 md:py-5 md:px-60" alt="portfolio" />
					</div>
				)}
			</div>
		</>
	);
}




