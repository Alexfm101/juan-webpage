import Navbar from '../components/Navbar';
// import { getPictures } from './api/pictures';
// import { GetStaticProps, } from 'next';
// import Image from 'next/image';

export default function Home() {

	return (
		<>
			<Navbar/>
			
			hola
			{/* <ul className="container md:mx-auto md:masonry">
				{pictures.map((picture, id) => (
					<li key={id} className="m-2 md:m-0 md:item">
						<Image 
							width={500}
							height={500}
							objectFit="contain"
							src={picture.picture} 
							priority
							alt="photos" 
						/>
					</li>
				))}
			</ul> */}
		</>
	);
}


