import Navbar from '../components/Navbar';
import {getImages} from '../lib/images';

export default function Home({Images}) {
	
	return (
		<>
			<Navbar/>

			<ul className="container md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-auto ">
				{Images.map((id) => (
					<li key={id}>
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
