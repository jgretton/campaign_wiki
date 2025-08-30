import PageLayout from "@/app/components/layouts/PageLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleCharacterPage({
  params, searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const id = (await params).id;
  const search = await searchParams;
  const view = search.view;
  const queryString = view ? `?view=${view}` : ''
  const data = await fetch(`${process.env.APP_URL}/api/characters/${id}${queryString}`);
  if (data.status === 404) { return notFound() }
  const character = await data.json();
  // console.log(characters);
  console.log(character)
  return (
    <PageLayout title="Character name" description="Character description">
      <div className="grid gap-4">
        {character.public.name}

        {character.public.location && (
          <div>Location: {character.public.location.name}</div>
        )}

        {character.public.related_characters?.map((char: { public: { name: string }, _id: string }) => {
          console.log('this is the map chat', char)
          return (
            <Link href={`/characters/${char._id}`}>Link to {char.public.name}</Link>
          )
        })}
      </div>
    </PageLayout>
  );
}
