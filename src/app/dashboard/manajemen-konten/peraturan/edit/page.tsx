"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const handleNavigation = () => {
		router.push("/dashboard/manajemen-konten/peraturan");
	};

	const searchParams = useSearchParams();
	const peraturanParams = searchParams.get("data");

	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center space-x-2">
				<Button
					variant={"ghost"}
					size={"icon"}
					className="h-8 w-8 font-bold"
					onClick={handleNavigation}
				>
					<ArrowLeft />
				</Button>
				<h3 className="text-xl font-bold">Peraturan: {peraturanParams}</h3>
			</div>
		</div>
	);
}
