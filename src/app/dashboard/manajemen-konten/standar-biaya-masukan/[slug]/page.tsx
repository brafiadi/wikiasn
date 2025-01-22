import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const apiUrl = process.env.API_URL;

const getDetailSBMData = async (sbm: string, tahun: string) => {
	const res = await fetch(
		`${apiUrl}/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`,
	);
	const data = await res.json();
	return data;
};

export default async function Page({
	params,
}: { params: Promise<{ slug: string }> }) {
	const tahun = "2025";
	const sbm = (await params).slug;

	const data = await getDetailSBMData(sbm, tahun);

	const judul = data.info.judul;

	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center space-x-2">
				<Link href="/dashboard/manajemen-konten/standar-biaya-masukan">
					<Button variant="ghost" size="icon" className="h-8 w-8 font-bold">
						<ArrowLeft />
					</Button>
				</Link>
				<h3 className="text-2xl font-bold">Standar Biaya Masukan: {judul}</h3>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="penjelasan">
					<TabsList className="">
						<TabsTrigger value="penjelasan">Penjelasan</TabsTrigger>
						<TabsTrigger value="data">Data</TabsTrigger>
					</TabsList>

					<TabsContent value="penjelasan">1</TabsContent>
					<TabsContent value="data">2</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
