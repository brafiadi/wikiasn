import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { FileText } from "lucide-react";
import Link from "next/link";

const apiUrl = process.env.API_URL;

const getListDaftarPeraturanData = async () => {
	const res = await fetch(`${apiUrl}/peraturan`);
	const data = await res.json();
	return data.data;
};

interface Peraturan {
	id: number;
	nama: string;
	tahun: string;
	tautan: string;
	kata_kunci: string;
	slug: string;
	kategori: string;
}

export default async function DaftarPeraturanTable() {
	const data = await getListDaftarPeraturanData();
	// console.log(data);
	return (
		<div className="min-h-[400px] rounded-lg bg-white py-8">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Judul Peraturan</TableHead>
						<TableHead>Kategori</TableHead>
						<TableHead>Tahun</TableHead>
						<TableHead className="w-[200px]">Kata Kunci</TableHead>
						<TableHead>Dokumen</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item: Peraturan, index: number) => (
						<TableRow key={item.id}>
							<TableCell className="text-gray-500">{index + 1}</TableCell>
							<TableCell>
								<Link
									href={`peraturan/${item.slug}`}
									className="hover:text-red-600"
								>
									{item.nama}
								</Link>
							</TableCell>
							<TableCell>{item.kategori}</TableCell>
							<TableCell>{item.tahun}</TableCell>
							<TableCell>
								<div className="flex flex-wrap gap-2">
									{(typeof item.kata_kunci === "string"
										? item.kata_kunci.split(",")
										: item.kata_kunci
									).map((kataKunci: string) => (
										<Badge
											key={kataKunci}
											className="bg-red-600/50 font-extralight capitalize"
										>
											{kataKunci}
										</Badge>
									))}
								</div>
							</TableCell>
							<TableCell>
								<Link href={item.tautan} target="_blank">
									<Badge variant={"secondary"}>
										<FileText className="text-gray-600 hover:text-gray-800 h-4 w-4" />
									</Badge>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
