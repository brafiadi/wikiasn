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

export const dynamic = "force-dynamic";

export default function TunjangnaKinerjaPage() {
	return (
		<>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<h1 className="text-center text-xl font-bold text-neutral-700 md:text-2xl">
					TUNJANGAN KINERJA
				</h1>
			</div>

			<div className="m-4">
				<Tabs defaultValue="tabel">
					<TabsList>
						<TabsTrigger value="tabel">Tabel</TabsTrigger>
						<TabsTrigger value="grafik">Grafik</TabsTrigger>
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
		</>
	);
}

export function Loading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton />
		</div>
	);
}
