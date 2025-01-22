import { useQuery } from "@tanstack/react-query";
import { sbmApi } from "@/api/endpoints/manajemen-konten/sbm";

export const useGetListSBM = () => {
	return useQuery({
		queryKey: ["list-sbm"],
		queryFn: () => sbmApi.getAll(),
	});
};
