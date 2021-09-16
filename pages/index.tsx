import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			<Navbar/>

			<ul className="container md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-auto ">
				<li className="">
					<img className="" src="/images/portafolio/_MG_0050.jpg" alt="" />
				</li>
			</ul>
	
		</>
	);
}
