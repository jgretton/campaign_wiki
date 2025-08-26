import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
	title: "The Veiled Realm",
	description:
		"A personal project providing a wiki style page and API for myself, the DM and my players regarding our ongoing campaign 'The Veiled Realm'.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` antialiased grid md:grid-cols-[auto_1fr]`}>
				<div className=" p-8 md:sticky top-0 md:h-screen">
					<Navigation />
				</div>
				<div className="overflow-y-scroll size-full">{children}</div>
			</body>
		</html>
	);
}
