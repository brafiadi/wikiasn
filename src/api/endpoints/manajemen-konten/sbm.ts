import api from "@/api/axios";

interface StandarBiayaMasukan {
	id: number;
	judul: string;
	jenis: string;
	link: string;
}

export const sbmApi = {
	getAll: () => api.get("/standar-biaya-masukan"),
	getDetail: (sbm: string, tahun: string) =>
		api.get(`/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`),
};
