"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PeraturanTable from "./peraturan.table";
import TambahPeraturan from "./tambah-peraturan";

export default function Page() {
	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center justify-between space-y-2">
				<h3 className="text-2xl font-bold">Peraturan</h3>
				<TambahPeraturan />
			</div>
			<Card className="shadow-md">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
				<CardContent>
					<PeraturanTable />
				</CardContent>
			</Card>
		</div>
	);
}
