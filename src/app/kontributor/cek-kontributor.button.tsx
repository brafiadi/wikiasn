// CheckContributorButton.tsx
"use client";

import { loginUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckContributorButton = ({ email }: { email: string }) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const checkContributor = async () => {
		setLoading(true);
		try {
			if (email) {
				const response = await loginUser(email);
				// console.log("Login response:", response);

				if (response.success) {
					router.push("/kontributor/dashboard");
				}
			}
		} catch (error) {
			console.error("Error checking contributor:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button onClick={checkContributor} className="shadow-sm">
			{loading ? "Loading..." : "Menuju Dashboard Kontributor"}
		</Button>
	);
};

export default CheckContributorButton;
