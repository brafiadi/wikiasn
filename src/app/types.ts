export type SearchParams = {
	[key: string]: string | string[] | undefined;
};

export interface SearchResult {
	id: number;
	title: string;
}
