"use client";

import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchHeader() {
	return (
		<Form action="/">
				<div className="relative">
					<input
						type="search"
						name="cari"
						placeholder=""
						className="w-full border-b outline-0 px-8 py-2 md:pr-10"
					/>
					<Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
				</div>
		</Form>
	);
}
