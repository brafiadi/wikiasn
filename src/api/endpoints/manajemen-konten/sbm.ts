import api from "@/api/axios";

interface AddPenjelasanPayload {
	tahun: string;
	id: number;
	penjelasan: string;
}

export const sbmApi = {
	getAll: () => api.get("/standar-biaya-masukan"),
	getDetail: (sbm: string, tahun: string) =>
		api.get(`/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`),
	addPenjelasan: (data: AddPenjelasanPayload) =>
		api.post("/standar-biaya-masukan/penjelasan", data),
};
