import { Suspense } from "react";
import type { Metadata } from "next";
import { TableSkeleton } from "@/components/table-skeleton";
import DaftarPeraturanTable from "./daftar-peraturan.table";

export const revalidate = 3600; // invalidate every hour

export const dynamicParams = true;

export const metadata: Metadata = {
	title: "Peraturan - WikiASN",
};

export default function PeraturanPage() {
	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-8">
					Peraturan
				</h1>
			</div>

			<div className="bg-white">
				<div className="max-w-5xl mx-6 md:mx-auto py-4 my-auto">
					<Suspense fallback={<Loading />}>
						<DaftarPeraturanTable />
					</Suspense>
				</div>
			</div>
		</div>
	);
}

function Loading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton columns={3} />
		</div>
	);
}
