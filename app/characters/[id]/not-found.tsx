import Link from "next/link";

export default function CharacterNotFound() {
  return (
    <div className="flex size-full gap-3 justify-center items-center flex-col h-screen">
      <h1 className="font-bold text-lg ">This character does not exists</h1>
      <p>Please try again with a different character</p>
      <Link href={'/characters'}>Back to Characters</Link>
    </div>
  )
}
