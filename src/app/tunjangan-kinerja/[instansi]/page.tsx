import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatRupiah } from "@/utils/currency";
import Link from "next/link";
import type { Metadata } from "next";
import { TableSkeleton } from "@/components/table-skeleton";

interface TunjanganKinerja {
	id: number;
	kelas_jabatan: string;
	besaran: number;
}

export const dynamic = "force-dynamic";

// or Dynamic metadata
export async function generateMetadata({
	params,
}: {
	params: Promise<{ instansi: string }>;
}) {
	const instansi = (await params).instansi;
	const apiUrl = process.env.API_URL;
	const res = await fetch(
		`${apiUrl}/tunjangan-kinerja/instansi?nama=${instansi}`,
	);

	const resData = await res.json();
	const data = resData.data;
	return {
		title: `Tunjangan Kinerja ${data.instansi.nama} - WikiASN`,
	};
}

export default async function Page({
	params,
}: {
	params: Promise<{ instansi: string }>;
}) {
	const instansi = (await params).instansi;
	const apiUrl = process.env.API_URL;
	const res = await fetch(
		`${apiUrl}/tunjangan-kinerja/instansi?nama=${instansi}`,
	);

	if (!res.ok) {
		return {
			notFound: true, // This will render the 404 page
		};
	}

	const resData = await res.json();
	const data = resData.data;
	// console.log(data);

	return (
		<div>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<Link href="/tunjangan-kinerja">
					<h2 className="text-center text-2xl font-bold text-neutral-800 md:text-2xl">
						TUNJANGAN KINERJA
					</h2>
				</Link>
				<h2 className="text-center text-2xl font-bold text-neutral-900 md:text-2xl">
					{data.instansi.nama.toUpperCase()}
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-8">
				<div className="col-span-5 mb-8 rounded-lg bg-white p-4 m-4">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[50px]">#</TableHead>
								<TableHead>Kelas Jabatan</TableHead>
								<TableHead>Tunjangan Kinerja Per Kelas Jabatan</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.tunjangan_kinerja.map(
								(item: TunjanganKinerja, index: number) => (
									<TableRow key={item.id}>
										<TableCell className="text-gray-500">{index + 1}</TableCell>
										<TableCell>{item.kelas_jabatan}</TableCell>
										<TableCell>{formatRupiah(item.besaran)}</TableCell>
									</TableRow>
								),
							)}
						</TableBody>
					</Table>
				</div>
				<div className="col-span-3 mb-8 rounded-lg bg-white p-4 m-4 h-fit">
					<p className="text-sm font-semibold">Sumber:</p>

					<Link href={data.instansi.tautan} target="_blank">
						<p className="text-sm hover:text-red-500">
							{data.instansi.dasar_hukum}
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export function Loading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton rows={17} columns={3}/>
		</div>
	);
}
