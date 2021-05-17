import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className="flex flex-wrap space-x-10 w-full justify-center items-center p-4">
				<Link href="#">
					<a href="">
						<img
							className="w-auto h-10"
							src="/svgs/instagram.svg"
							alt=""
						/>
					</a>
				</Link>
				<Link href="#">
					<a href="">
						<img
							className="w-auto h-10"
							src="/svgs/begance.svg"
							alt=""
						/>
					</a>
				</Link>
			</footer>
		</>
	);
}
