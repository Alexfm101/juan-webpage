import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="p-10 mt-20 bg-gray-200 xl:mx-auto">
				<div className="flex flex-row justify-center space-x-5">
					<Link href="#">
						<a href="" className="w-10 h-6 relative lg:h-7">
							<Image
								src="/svgs/instagram.svg"
								width={25}
								height={25}
								layout="fill"
							/>
						</a>
					</Link>
					<Link href="#">
						<a href="" className="w-10 h-6 relative lg:h-7">
							<Image
								src="/svgs/begance.svg"
								width={25}
								height={25}
								layout="fill"
							/>
						</a>
					</Link>
				</div>
				<div className="text-center mt-2 lg:text-lg">
					<small className="font-medium text-gray-700">
						&copy; {currentYear} All rights reserved, Fraum
					</small>
				</div>
			</footer>
		</>
	);
}
