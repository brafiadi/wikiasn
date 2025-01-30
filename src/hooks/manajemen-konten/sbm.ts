import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { sbmApi } from "@/api/endpoints/manajemen-konten/sbm";
import { useToast } from "../use-toast";

interface AddPenjelasanPayload {
	tahun: string;
	id: number;
	penjelasan: string;
}

export const useSBM = () => {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	const getList = () => {
		return useQuery({
			queryKey: ["list-sbm"],
			queryFn: () => sbmApi.getAll(),
		});
	};

	const getDetail = (sbm: string, tahun: string) => {
		return useQuery({
			queryKey: [`sbm-${sbm}-${tahun}`],
			queryFn: () => sbmApi.getDetail(sbm, tahun),
		});
	};

	const addPenjelasan = () => {
		return useMutation({
			mutationKey: ["add-penjelasan-sbm"],
			mutationFn: (payload: AddPenjelasanPayload) =>
				sbmApi.addPenjelasan(payload),
			onSuccess: () => {
				toast({
					title: "Sukses",
					description: "Data penjelasan berhasil ditambahkan",
				});
				queryClient.invalidateQueries({
					predicate: (query) => {
						return query.queryKey.some((key) => String(key).includes("sbm"));
					},
				});
			},
			onError: (error) => {
				toast({
					title: "Gagal",
					description: "Gagal menambahkan data penjelasan",
				});
				console.error(error);
			},
		});
	};

	return {
		getList,
		getDetail,
		addPenjelasan,
	};
};
