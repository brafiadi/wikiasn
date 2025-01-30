// app/providers.tsx
"use client";
import { useSession } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { getAndSaveToken } from "@/lib/auth";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
	const { data: session } = useSession();
	const email = session?.user?.email;

	useEffect(() => {
		if (email) {
			getAndSaveToken(email);
		}
	});

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
