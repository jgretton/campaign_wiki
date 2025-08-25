import ItemList from "../components/ItemList";
import PageLayout from "../components/layouts/PageLayout";

export default async function ItemsPage() {
	const data = await fetch(`${process.env.APP_URL}/api/items`);
	const items = await data.json();

	return (
		<PageLayout
			title="Items"
			description="Listed here are all the items added to the Veiled Realm campaign."
		>
			<ItemList items={items} />
		</PageLayout>
	);
}
