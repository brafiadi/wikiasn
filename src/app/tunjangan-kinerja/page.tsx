import TunjanganKinerjaChart from "./tunjangan-kinerja.chart";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TunjanganKinerjaTable from "./tunjangan-kinerja.table";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TableSkeleton } from "@/components/table-skeleton";
import { ChartSkeleton } from "@/components/chart-skeleton";

export const metadata: Metadata = {
	title: "Tunjangan Kinerja - WikiASN",
};

// export const dynamic = "force-dynamic";

export const revalidate = 3600 // invalidate every hour

export const dynamicParams = true 

export default function Page() {
	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2 ">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-8">
					Tunjangan Kinerja
				</h1>
			</div>

			<div className="bg-white">
				<div className="max-w-5xl mx-2 md:mx-auto py-4 my-auto">
					<Tabs defaultValue="tabel">
						<TabsList className="mx-6">
							<TabsTrigger value="tabel">Daftar Instansi</TabsTrigger>
							<TabsTrigger value="grafik">Diagram Perbandingan</TabsTrigger>
						</TabsList>
						<TabsContent value="grafik">
							<Suspense fallback={<ChartSkeleton />}>
								<TunjanganKinerjaChart />
							</Suspense>
						</TabsContent>
						<TabsContent value="tabel">
							<Suspense fallback={<Loading />}>
								<TunjanganKinerjaTable />
							</Suspense>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

function Loading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton />
		</div>
	);
}
