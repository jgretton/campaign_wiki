import Link from "next/link";

const Links: Link[] = [
	{ name: "Items", href: "/items" },
	{ name: "Characters", href: "/characters" },
	{ name: "Locations", href: "/locations" },
];

export default function Navigation() {
	return (
		<nav className="w-auto h-screen flex flex-col gap-3 items-center justify-center">
			<Link href="/" className="font-semibold text-lg">
				The Veiled Realm
			</Link>
			{Links.map((link) => (
				<Link
					href={link.href}
					key={link.name}
					className="hover:underline text-gray-600 hover:text-gray-900 transition-colors"
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
}

interface Link {
	name: string;
	href: string;
}
