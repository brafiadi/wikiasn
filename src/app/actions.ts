"use server";

export async function searchItems(query: string) {
	// Simulating an API call
	await new Promise((resolve) => setTimeout(resolve, 500));

	const mockResults = [
		{ id: 1, title: "Result 1 for " + query, link: query },
		{ id: 2, title: "Result 2 for " + query, link: query },
		{ id: 3, title: "Result 3 for " + query, link: query },
	];

	// Simulate no results for certain queries
	if (query.toLowerCase() === "no results") {
		return [];
	}

	return mockResults;
}
