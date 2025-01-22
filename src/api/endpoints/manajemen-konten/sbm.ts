import api from "@/api/axios";

interface StandarBiayaMasukan {
	id: number;
	judul: string;
	jenis: string;
	link: string;
}

export const sbmApi = {
	getAll: () => api.get("/standar-biaya-masukan"),
};
