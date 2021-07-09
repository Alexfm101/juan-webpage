import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();  

	return (
		<>
			<footer className="w-full p-4">
				<div className="flex flex-row justify-center space-x-10">
					<Link href="#">
						<a href="">
							<img
								className="w-auto h-8 lg:h-10"
								src="/svgs/instagram.svg"
								alt=""
							/>
						</a>
					</Link>
					<Link href="#">
						<a href="">
							<img
								className="w-auto h-8 lg:h-10"
								src="/svgs/begance.svg"
								alt=""
							/>
						</a>
					</Link>
				</div>
				<div className="text-center mt-2 lg:text-lg">
                	<small>
						&copy; {currentYear} All rights reserved, Fraum
					</small> 
            	</div>
			</footer>
		</>
	);
}
