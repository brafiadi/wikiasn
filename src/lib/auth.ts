const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(email: string) {
	try {
		const response = await fetch(`${apiUrl}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});
		const data = await response.json();
		// localStorage.setItem("token", data.data.token);
		return data;
	} catch (error) {
		console.error("Login error", error);
		throw error;
	}
}
