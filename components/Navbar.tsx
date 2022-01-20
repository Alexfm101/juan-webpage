import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="max-w-screen-xl mx-auto ">
				<nav className=" w-full p-4 md:p-6">
					<div className="flex justify-between">
						<Link href="/">
							<a href="">
								<img
									className={` h-10 md:h-14 lg:h-16 ${
										isOpen ? 'invisible md:visible' : ''
									} `}
									src="/svgs/logo.svg"
									alt=""
								/>
							</a>
						</Link>
						<button
							className="focus:outline-none md:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							<img
								className={`  ${isOpen ? 'hidden' : ''}`}
								src="/svgs/menu.svg"
								alt=""
							/>
							<img
								className={`  ${isOpen ? '' : 'hidden'}`}
								src="/svgs/close.svg"
								alt=""
							/>
						</button>

						{/* desktop style */}
						<div className="hidden md:flex">
							<ul className="md:flex md:flex-row md:my-auto md:space-x-5">
								<li>
									<Link href="/Me">
										<a
											className="font-bold md:hover:text-red-500"
											href=""
										>
											¿Quien soy?
										</a>
									</Link>
								</li>
								<li>
									<Link href="/Contact">
										<a
											className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-red-500 to-gray-800 md:hover:text-red-500"
											href=""
										>
											Contactame
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* mobile style */}
					<div
						className={`flex justify-center text-center md:hidden p-4 rounded-lg shadow-2xl bg-gray-100 ${
							isOpen ? '' : 'hidden'
						}`}
					>
						<ul className="space-y-3">
							<li>
								<Link href="/Me">
									<a
										className="font-bold md:hover:text-red-500"
										href=""
									>
										¿Quien soy?
									</a>
								</Link>
							</li>
							<li>
								<Link href="/Contact">
									<a
										className=" bg-clip-text text-transparent font-bold text-xl bg-gradient-to-r from-gray-600 to-red-500 md:hover:text-red-500"
										href=""
									>
										Contactame
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}
