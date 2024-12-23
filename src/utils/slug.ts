export function createSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "") // Hapus karakter spesial
		.replace(/\s+/g, "-") // Ganti spasi dengan dash
		.replace(/-+/g, "-") // Hindari multiple dashes
		.trim();
}

export function decodeSlug(slug: string): string {
	return slug
		.replace(/-/g, " ") // Ganti dash dengan spasi
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}
