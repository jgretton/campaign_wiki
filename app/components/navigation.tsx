"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Links: Link[] = [
	{ name: "Items", href: "/items" },
	{ name: "Characters", href: "/characters" },
	{ name: "Locations", href: "/locations" },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="size-full gap-2 items-center md:justify-center flex md:flex-col">
			<button
				className="shrink-0 p-1.5 rounded-md focus:ouline-1 outline-blue-500 block md:hidden"
				onClick={() => setIsOpen(!isOpen)}
			>
				<Bars3Icon className="size-6 text-gray-900 relative" />
			</button>
			<Link href="/" className="font-semibold text-lg">
				The Veiled Realm
			</Link>
			<div className="  md:flex flex-col gap-3 items-center mt-3 hidden ">
				{Links.map((link) => (
					<Link
						href={link.href}
						key={link.name}
						className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
					>
						{link.name}
					</Link>
				))}
			</div>
			<div
				className={` md:hidden bg-white fixed left-0 transition-transform inset-y-0  shadow  ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className=" flex flex-col gap-5 items-center justify-center relative size-full px-20">
					<button
						className="p-3 absolute top-7 right-0 "
						onClick={() => setIsOpen(!isOpen)}
					>
						<XMarkIcon className="size-6 text-gray-900" />
					</button>
					{Links.map((link) => (
						<Link
							href={link.href}
							key={link.name}
							className="hover:underline text-gray-600 hover:text-gray-900 transition-colors text-base"
							onClick={() => setIsOpen(!isOpen)}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	); } interface Link { name: string; href: string; }
