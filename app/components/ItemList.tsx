import { Item } from "../types/mongoose";

export default function ItemList({ items }: { items: Item[] }) {
	return (
		<div className="grid gap-2 mt-5">
			{items.map((item: Item) => (
				<span key={item.name}>{item.name}</span>
			))}
		</div>
	);
}
