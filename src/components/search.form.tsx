"use client";

import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchForm() {
	const searchParams = useSearchParams();
	const query = searchParams.get("cari") || "";

	return (
		<Form action="/">
			<div className="w-full max-w-2xl relative">
				<Input
					type="text"
					name="cari"
					placeholder="Cari apa yang ingin kamu ketahui"
					className="w-full pl-4 pr-12 py-6 text-sm md:text-md rounded-full border-gray-200 shadow-sm"
					defaultValue={query}
				/>
				<Button
					size="icon"
					className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
					type="submit"
				>
					<Search className="h-5 w-5" />
				</Button>
			</div>
		</Form>
	);
}
