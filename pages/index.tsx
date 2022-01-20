import Navbar from '../components/Navbar';
import {getImages} from '../lib/images';

export default function Home({Images}) {

	return (
		<>
			<Navbar/>

			<ul className="container md:mx-auto md:masonry">
				{Images.map((id) => (
					<li key={id} className="m-2 md:m-0 md:item">
						<img className="" src={`images/portfolio/${id}.jpg`} alt="" />
					</li>
				))}
			</ul>

		</>
	);
}

export async function getStaticProps() {
	const Images = getImages()
	return {
		props: {
			Images
		}
	}
};
