import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className=" max-w-screen-xl mx-auto">
				<nav className="w-full px-4 py-7">
					<div className="flex justify-between">
						<Link href="/">
							<a href="" className="relative w-12 h-10 md:w-14 md:h-12 lg:w-16" >
								<Image
									className={`${isOpen ? 'invisible md:visible' : ''
										} `}
									src="/svgs/logo.svg"
									layout='fill'
								/>
							</a>
						</Link>
						<button
							className="focus:outline-none md:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							<svg
								className={`${isOpen ? 'hidden' : ''}`}
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#202536"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
							</svg>

							<svg
								className={`  ${isOpen ? '' : 'hidden'}`}
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#202536"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							</svg>

						</button>

						{/* desktop style */}
						<div className="hidden md:flex">
							<ul className="md:flex md:flex-row md:my-auto md:space-x-5">
								<li>
									<Link href="/Me">
										<a
											className="text-black  lg:text-lg font-medium font-Confortaa hover:text-red-400"
											href=""
										>
											Sobre mi
										</a>
									</Link>
								</li>
								<li>
									<Link href="/Contact">
										<a
											className=" text-black  lg:text-lg font-medium font-Confortaa hover:text-red-400"
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
						className={`flex justify-center text-center md:hidden px-4 py-5 rounded-sm border bg-gray-50 shadow-lg  ${isOpen ? '' : 'hidden'
							}`}
					>
						<ul className="space-y-3">
							<li>
								<Link href="/Me">
									<a
										className="text-black  text-lg font-medium font-Confortaa"
										href=""
									>
										Sobre mi
									</a>
								</Link>
							</li>
							<li>
								<Link href="/Contact">
									<a
										className="text-black text-lg font-medium font-Confortaa"
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
