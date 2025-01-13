"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DelayedRedirect() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push("/dashboard");
		}, 3000);

		return () => clearTimeout(timer);
	}, [router]);

	return null;
}
