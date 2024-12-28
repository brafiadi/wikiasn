import { Suspense } from "react";
import type { Metadata } from "next";
import StandarBiayaMasukanTable from "./standar-biaya-masukan.table";
import { TableSkeleton } from "@/components/table-skeleton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Standar Biaya Masukan - WikiASN",
};

export default function StandarBiayaMasukanPage() {
	return (
		<>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<h1 className="text-center text-xl font-bold text-neutral-700 md:text-2xl">
					STANDAR BIAYA MASUKAN
				</h1>
			</div>

			<div className="m-4">
				<Suspense fallback={<Loading />}>
					<StandarBiayaMasukanTable />
				</Suspense>
			</div>
		</>
	);
}

function Loading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton columns={3} />
		</div>
	);
}
