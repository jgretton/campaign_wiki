import type { Metadata } from "next";

import "./globals.css";

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
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
