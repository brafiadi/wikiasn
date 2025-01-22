import { useQuery } from "@tanstack/react-query";
import { sbmApi } from "@/api/endpoints/manajemen-konten/sbm";

export const useGetListSBM = () => {
	return useQuery({
		queryKey: ["list-sbm"],
		queryFn: () => sbmApi.getAll(),
	});
};

export const useGetDetailSBM = (sbm: string, tahun: string) => {
	return useQuery({
		queryKey: [`sbm-${sbm}-${tahun}`],
		queryFn: () => sbmApi.getDetail(sbm, tahun)
	})
}