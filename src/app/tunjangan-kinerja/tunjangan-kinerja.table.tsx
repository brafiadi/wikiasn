import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { formatRupiah } from "@/utils/currency";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const apiUrl = process.env.API_URL;

const getListTunjanganKinerjaData = async () => {
	const res = await fetch(`${apiUrl}/tunjangan-kinerja`);
	const data = await res.json();
	return data.data;
};

interface TunjanganKinerja {
	instansi_id: number;
	nama: string;
	median: number;
	min: number;
	max: number;
	mean: number;
	tautan: string;
	dasar_hukum: string;
	slug: string;
}

export default async function TunjanganKinerjaTable() {
	const data = await getListTunjanganKinerjaData();

	return (
		<div className="min-h-[400px] rounded-lg bg-white p-8 ">
			<Table>
				<TableCaption className="bg-gray-100">
					Sumber: Peraturan Presiden tentang Tunjangan Kinerja dari beberapa
					instansi
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Instansi</TableHead>
						<TableHead>Median</TableHead>
						<TableHead>Terendah</TableHead>
						<TableHead>Tertinggi</TableHead>
						<TableHead>Rata-rata</TableHead>
						<TableHead>Peraturan</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item: TunjanganKinerja, index: number) => (
						<TableRow key={item.instansi_id}>
							<TableCell className="text-gray-500">{index + 1}</TableCell>
							<TableCell>
								<Link
									href={`tunjangan-kinerja/${item.slug}`}
									className="hover:text-red-600"
								>
									{item.nama}
								</Link>
							</TableCell>
							<TableCell className="text-left">
								{formatRupiah(item.median)}
							</TableCell>
							<TableCell className="text-left">
								{formatRupiah(item.min)}
							</TableCell>
							<TableCell className="text-left">
								{formatRupiah(item.max)}
							</TableCell>
							<TableCell className="text-left">
								{formatRupiah(item.mean)}
							</TableCell>
							<TableCell>
								<TooltipProvider>
									<Tooltip delayDuration={50}>
										<TooltipTrigger>
											<Link href={item.tautan} target="_blank">
												<Badge variant="secondary">
													<FileText className="text-gray-600 hover:text-gray-800 h-4 w-4" />
												</Badge>
											</Link>
										</TooltipTrigger>
										<TooltipContent>
											<p className="max-w-[600px] text-gray-800">
												{item.dasar_hukum}
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
