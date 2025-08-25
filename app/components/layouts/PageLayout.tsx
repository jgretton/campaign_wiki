interface PageLayoutProps {
	children: React.ReactNode;
	title: string;
	description: string;
}

export default function PageLayout({
	children,
	title,
	description,
}: PageLayoutProps) {
	return (
		<div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
			<h1 className="font-medium text-3xl">{title}</h1>
			<p className="mt-2 font-light">{description}</p>

			<div className="mt-10 min-h-screen">{children}</div>
		</div>
	);
}
