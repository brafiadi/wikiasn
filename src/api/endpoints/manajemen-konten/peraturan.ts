import api from "@/api/axios";

interface AdddPeraturanPayload {
	nama: string;
	tautan: string;
	tahun: string;
	kata_kunci: string[];
	slug: string;
	kategori: string;
	tanggal_pengesahan: Date | string;
}

export const peraturanApi = {
	getAll: () => api.get("/peraturan"),
	addPeraturan: (data: AdddPeraturanPayload) => api.post("/peraturan", data),
};
