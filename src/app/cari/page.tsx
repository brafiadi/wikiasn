import Loader from "@/components/loader";
import { Suspense, useEffect } from "react";
import { searchItems } from "./actions";
import SearchForm from "@/components/search.form";
import SearchResults from "@/components/search-result";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const dynamic = "force-dynamic";

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const query = (await searchParams).q as string;
	const results = query
		? (await searchItems(query)).map(
				(item: { id: number; title: string; link: string }) => ({
					...item,
					query,
				}),
			)
		: [];

	return (
		<Suspense fallback={<Loading />}>
			<div className="w-full max-w-2xl relative">
				<SearchForm />
			</div>
			{query ? (
				<div className="w-full max-w-2xl mt-2">
					<h2 className="text-gray-500 mx-2 mb-4">Hasil pencarian: {query}</h2>
					<Alert variant="destructive" className="my-6 bg-red-200">
						<AlertCircle className="h-4 w-4" />
						{/* <AlertTitle>Development Notice</AlertTitle> */}
						<AlertDescription>
							Fitur pencarian masih dalam pengembangan
						</AlertDescription>
					</Alert>
					<SearchResults results={results} />
				</div>
			) : (
				<Loading />
			)}
		</Suspense>
	);
}

function Loading() {
	return (
		<div className="mx-auto min-h-[70vh] max-w-6xl p-4 md:p-8">
			<Loader />
		</div>
	);
}
