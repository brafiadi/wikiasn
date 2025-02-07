import { peraturanApi } from "@/api/endpoints/manajemen-konten/peraturan";
import { useQuery } from "@tanstack/react-query";

export const usePeraturan = () => {
	const getList = () => {
		return useQuery({
			queryKey: ["ilst-peraturan"],
			queryFn: () => peraturanApi.getAll(),
		});
	};

	return {
		getList,
	};
};
