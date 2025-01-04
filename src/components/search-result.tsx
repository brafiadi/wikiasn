import Link from "next/link";

interface SearchResult {
	id: number;
	title: string;
	query: string;
}

export default function SearchResults({
	results,
}: { results: SearchResult[] }) {
	if (results.length === 0) {
		return <p className="text-center text-gray-500">No results found.</p>;
	}

	return (
		<ul className="space-y-4">
			{results.map((result) => (
				<li
					key={result.id}
					className="bg-white p-4 rounded-md shadow hover:text-red-600"
				>
					<Link href={`/cari?q=${result.query}`}>
						<h3 className="text-md font-semibold">{result.title}</h3>
					</Link>
				</li>
			))}
		</ul>
	);
}
