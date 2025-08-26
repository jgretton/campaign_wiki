"use client";

export default function Error({ error }: { error: Error }) {
	console.log(error);
	return (
		<div className="font-sans min-h-screen items-center justify-center flex flex-col gap-3 p-8 pb-20 sm:p-20">
			<h1 className="font-medium text-3xl">Something went wrong!</h1>
			<p className="mt-2 font-light">Unable to load items. Please try again.</p>
			<span className=" text-red-600">{error.name}</span>
			<span className=" text-red-600">{error.message}</span>
			<button
				onClick={() => window.location.reload()}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Reload Page
			</button>
		</div>
	);
}
