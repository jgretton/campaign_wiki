import PageLayout from "../components/layouts/PageLayout";

export default function Loading() {
  return (<PageLayout
    title="Characters"
    description="A list of all characters that have been encountered in the Veiled Realm"
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
