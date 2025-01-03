import { Suspense } from "react";
import type { Metadata } from "next";
import StandarBiayaMasukanTable from "./standar-biaya-masukan.table";
import { TableSkeleton } from "@/components/table-skeleton";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// export const dynamic = "force-dynamic";

export const revalidate = 3600 // invalidate every hour

export const metadata: Metadata = {
	title: "Standar Biaya Masukan - WikiASN",
};

export default function StandarBiayaMasukanPage() {
	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-8">
					Standar Biaya Masukan
				</h1>
			</div>

			<div className="bg-white">
				<div className="max-w-5xl mx-6 md:mx-auto py-4 my-auto">
					{/* <div className="flex ">
						Tahun Anggaran
						<Select>
							<SelectTrigger className="w-[180px] h-[40px]">
								<SelectValue placeholder="2025" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">2024</SelectItem>
								<SelectItem value="dark">2025</SelectItem>
								<SelectItem value="system">2024</SelectItem>
							</SelectContent>
						</Select>
					</div> */}

					<Suspense fallback={<Loading />}>
						<StandarBiayaMasukanTable />
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
