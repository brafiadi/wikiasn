import api from "@/api/axios";

interface AdddPeraturanPayload {
	nama: string;
}

export const peraturanApi = {
	getAll: () => api.get("/peraturan"),
};
