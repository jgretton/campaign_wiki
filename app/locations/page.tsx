import PageLayout from "../components/layouts/PageLayout";

export default async function LocationsPage() {
	const data = await fetch(`${process.env.APP_URL}/api/locations`);
	const locations = await data.json();

	console.log(locations);

	return (
		<PageLayout
			title="Locations"
			description="A list of all the locations the players have either visited or know about"
		>
			<div className=""></div>
		</PageLayout>
	);
}
