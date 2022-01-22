import Navbar from '../components/Navbar';
import { getPictures } from './api/pictures';

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
						<img className="" src={picture.large} alt="" />
					</li>
				))}
			</ul>

		</>
	);
}

export async function getStaticProps() {
	const pictures = await getPictures("juanPhotos");

	return {
		props: { pictures },
	};
};
