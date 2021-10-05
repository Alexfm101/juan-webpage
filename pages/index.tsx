import Navbar from '../components/Navbar';
import {getImages} from '../lib/images';

export default function Home({Images}) {
	
	return (
		<>
			<Navbar/>

			<ul className="container md:grid md:grid-cols-3 md:gap-2 md:mx-auto lg:masonry">
				{Images.map((id) => (
					<li key={id} className="m-2 md:m-0 break-inside">
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
