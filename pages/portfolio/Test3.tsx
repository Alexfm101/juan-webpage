import Navbar from '../../components/Navbar';
import { getPictures } from '../api/pictures';
import { AdvancedImage } from '@cloudinary/react';

export default function Test3() {

	const pictures = getPictures("juanPhotos", 40)

	return (
		<>
			<Navbar />

			<ul className=" mt-10 container md:mx-auto md:max-w-7xl md:masonry">
				{pictures.map((picture, id) => (
					<li key={id} className="m-2 md:m-0 md:item">
						<AdvancedImage cldImg={picture} />
					</li>
				))}
			</ul>
		</>
	);
}
