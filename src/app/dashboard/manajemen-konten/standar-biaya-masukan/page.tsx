"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StandarBiayaMasukanTable from "./standar-biaya-masukan.table";

export default function Page() {
	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center justify-between space-y-2">
				<h3 className="text-2xl font-bold">Standar Biaya Masukan</h3>
			</div>
			<Card className="shadow-md">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
				<CardContent>
					<StandarBiayaMasukanTable />
				</CardContent>
			</Card>
		</div>
	);
}
