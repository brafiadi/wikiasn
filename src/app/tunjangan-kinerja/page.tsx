import TunjanganKinerjaChart from "./tunjangan-kinerja.chart";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TunjanganKinerjaTable from "./tunjangan-kinerja.table";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tunjangan Kinerja - WikiASN",
};

export default function TunjangnaKinerjaPage() {
	return (
		<div className="container mx-auto bg-gray-50/50 w-full">
			<div className="min-h-screen max-w-6xl mx-auto bg-orange-200/50 p-4 md:p-8">
				<div className="text-center mb-8">
					<Link href="/">
						<h1 className="text-xl font-bold font-serif text-gray-800 mb-1">
							WikiASN
						</h1>
					</Link>
					<p className="text-sm text-gray-600">
						Ensikolpedia Aparatur Sipil Negara
					</p>
				</div>
				<div className="mb-8 rounded-lg bg-white p-4 m-4">
					<h1 className="text-center text-2xl font-bold text-navy-900 md:text-4xl">
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
			</div>
		</div>
	);
}
