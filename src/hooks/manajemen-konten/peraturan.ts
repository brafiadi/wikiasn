import { peraturanApi } from "@/api/endpoints/manajemen-konten/peraturan";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";

interface AdddPeraturanPayload {
	nama: string;
	tautan: string;
	tahun: string;
	kata_kunci: string[];
	slug: string;
	kategori: string;
	tanggal_pengesahan: Date;
}

export const usePeraturan = () => {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	const getList = () => {
		return useQuery({
			queryKey: ["list-peraturan"],
			queryFn: () => peraturanApi.getAll(),
		});
	};

	const addPeraturan = () => {
		return useMutation({
			mutationKey: ["add-peraturan"],
			mutationFn: (payload: AdddPeraturanPayload) =>
				peraturanApi.addPeraturan(payload),
			onSuccess: () => {
				toast({
					title: "Sukses",
					description: "Data peraturan berhasil ditambahkan",
				});
				queryClient.invalidateQueries({ queryKey: ["list-peraturan"] });
			},
			onError: (error) => {
				toast({
					title: "Gagal",
					description: "Gagal menambahkan data peraturan",
				});
				console.error(error);
			},
		});
	};

	return {
		getList,
		addPeraturan,
	};
};
