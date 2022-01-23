import Navbar from '../components/Navbar';
import { getPictures } from './api/pictures';
import { GetStaticProps, } from 'next';
import Image from 'next/image';

interface IPicture {
	large: string;
}

interface IGallery {
	pictures: IPicture[];
}

export default function Home({ pictures }: IGallery) {

	return (
		<>
			<Navbar/>

			<ul className="container md:mx-auto md:masonry">
				{pictures.map((picture, id) => (
					<li key={id} className="m-2 md:m-0 md:item">
						<Image 
							width={500}
							height={500}
							objectFit="contain"
							src={picture.large} 
							priority
							alt="photos" 
						/>
					</li>
				))}
			</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const pictures = await getPictures("juanPhotos");

	return {
		props: { pictures },
	};
};
