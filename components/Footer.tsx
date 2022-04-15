import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="p-10 mt-20 xl:mx-auto">
				<div className="flex flex-row justify-center space-x-5">
					<Link href="https://www.instagram.com/_fraum_/">
						<a href="https://www.instagram.com/_fraum_/" className="relative w-10 h-6 lg:h-7">
							<Image src="/svgs/instagram.svg" layout="fill" alt="instagram"/>
						</a>
					</Link>
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
