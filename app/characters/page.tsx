import Link from "next/link";
import PageLayout from "../components/layouts/PageLayout";
import { Character } from "../types/mongoose";
interface CharactersPageProps {
  searchParams: {
    view?: string;
  };
}

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const view = searchParams.view;
  const data = await fetch(
    `${process.env.APP_URL}/api/characters?view=${view}`
  );
  const characters = await data.json();

  return (
    <PageLayout
      title="Characters"
      description="A list of all characters that have been encountered in the Veiled Realm"
    >
      <ul className="grid gap-7">
        {characters.map((char: Partial<Character>) => (
          <li className="flex gap-3  rounded-md" key={char.id}>
            <div className="aspect-square h-full rounded-md bg-gray-100"></div>
            <div className="grid gap-1">
              <span className="font-medium text-gray-900 text-lg">
                {char?.public?.name}
              </span>
              <span className="text-gray-500">{char.public?.status}</span>
              <span className="text-gray-500">{char.public?.location}</span>
              <Link href={`/characters/${char._id}`} className="hover:underline"> View Character </Link>

            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
