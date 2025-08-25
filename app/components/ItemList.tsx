import { Item } from "../types/mongoose";

export default function ItemList({ items }: { items: Item[] }) {
	return (
		<div className="">
			<span>Item List</span>
			<div className="grid">
				{items.map((item: Item) => (
					<span key={item.name}>{item.name}</span>
				))}
			</div>
		</div>
	);
}
