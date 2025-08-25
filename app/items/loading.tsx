import PageLayout from "../components/layouts/PageLayout";

export default function Loading() {
	return (
		<PageLayout
			title="Items"
			description="Listed here are all the items added to the Veiled Realm campaign."
		>
			<div className="grid gap-4">
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
				<div className="animate-pulse w-full h-20 bg-gray-300 rounded-lg"></div>
			</div>
		</PageLayout>
	);
}
