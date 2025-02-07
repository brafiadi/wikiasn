import api from "@/api/axios";

export const peraturanApi = {
	getAll: () => api.get("/peraturan"),
};
