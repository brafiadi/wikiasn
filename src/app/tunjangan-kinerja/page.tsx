import TunjanganKinerjaChart from "./tunjangan-kinerja.chart";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TunjanganKinerjaTable from "./tunjangan-kinerja.table";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tunjangan Kinerja - WikiASN",
};

export const dynamic = "force-dynamic";

export default function TunjangnaKinerjaPage() {
	return (
		<>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<h1 className="text-center text-2xl font-bold text-neutral-700 md:text-4xl">
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
						<TunjanganKinerjaChart />
					</TabsContent>
					<TabsContent value="tabel">
						<TunjanganKinerjaTable />
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}
