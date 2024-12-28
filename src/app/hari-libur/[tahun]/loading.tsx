import Loader from "@/components/loader";

export default function Loading() {
	return (
		<div className="mx-auto min-h-screen max-w-6xl bg-sky-200 p-4 md:p-8">
			<Loader />
		</div>
	);
}
