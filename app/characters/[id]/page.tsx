import PageLayout from "@/app/components/layouts/PageLayout";

export default async function SingleCharacterPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const data = await fetch(`${process.env.APP_URL}/api/characters/${id}`);

	const characters = await data.json();

	// console.log(characters);
	return (
		<PageLayout title="Character name" description="Character description">
			<div className=""></div>
		</PageLayout>
	);
}
