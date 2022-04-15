import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="p-10 mt-20 xl:mx-auto">
				<div className="flex flex-row justify-center space-x-5">
					<Link href="https://www.instagram.com/_fraum_/">
						<a href="https://www.instagram.com/_fraum_/" className="w-8 lg:h-7">
							<svg fill='#875159' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.6 112.6">
								<title>Icono 2</title>
								<path className="" d="M843.69,1062.34H770.91A19.94,19.94,0,0,1,751,1042.42V969.65a19.94,19.94,0,0,1,19.91-19.92h72.78a19.94,19.94,0,0,1,19.91,19.92v72.77A19.94,19.94,0,0,1,843.69,1062.34ZM770.91,955.75A13.91,13.91,0,0,0,757,969.65v72.77a13.91,13.91,0,0,0,13.89,13.9h72.78a13.92,13.92,0,0,0,13.9-13.9V969.65a13.92,13.92,0,0,0-13.9-13.9Z" transform="translate(-751 -949.73)" />
								<path className="" d="M807.3,1033.54a27.51,27.51,0,1,1,27.51-27.5A27.53,27.53,0,0,1,807.3,1033.54Zm0-48.13A20.63,20.63,0,1,0,827.93,1006,20.65,20.65,0,0,0,807.3,985.41Z" transform="translate(-751 -949.73)" />
								<path className="" d="M838.68,982.83a9,9,0,1,1,9-9A9,9,0,0,1,838.68,982.83Zm0-16.33a7.31,7.31,0,1,0,7.3,7.3A7.31,7.31,0,0,0,838.68,966.5Z" transform="translate(-751 -949.73)" />
							</svg>
						</a>
					</Link>
					{/* <Link href="#">
					<a href="" className="w-10 h-6 relative lg:h-7">
							<Image
								src="/svgs/begance.svg"
								layout="fill"
							/>
						</a>
					</Link> */}
				</div>
				<div className="text-center mt-2 lg:text-lg">
					<small className="font-medium text-black">
						&copy; {currentYear} All rights reserved, Fraum
					</small>
				</div>
			</footer>
		</>
	);
}
