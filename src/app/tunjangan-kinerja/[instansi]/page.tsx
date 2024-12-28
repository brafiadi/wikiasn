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
import { Suspense } from "react";

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
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto pt-8">
				<div className="text-red-600 font-medium mb-2">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<Link href="/tunjangan-kinerja">
					<h1 className="text-5xl font-medium tracking-tight ">
						Tunjangan Kinerja
					</h1>
				</Link>
				<h2 className="text-3xl font-medium tracking-tight mb-8">
					{data.instansi.nama}
				</h2>
			</div>
			<div className="bg-white px-20 py-4">
				<div className="grid grid-cols-1 md:grid-cols-8">
					<div className="col-span-5 mb-8 rounded-lg bg-white px-8 m-4">
						<Suspense fallback={<SuspenseLoading />}>
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
												<TableCell className="text-gray-500">
													{index + 1}
												</TableCell>
												<TableCell>{item.kelas_jabatan}</TableCell>
												<TableCell>{formatRupiah(item.besaran)}</TableCell>
											</TableRow>
										),
									)}
								</TableBody>
							</Table>
						</Suspense>
					</div>
					<div className="col-span-3 mb-8 rounded-lg bg-gray-100 p-4 m-4 h-fit">
						<p className="text-sm font-semibold">Sumber:</p>

						<Link href={data.instansi.tautan} target="_blank">
							<p className="text-sm hover:text-red-500">
								{data.instansi.dasar_hukum}
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function SuspenseLoading() {
	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<TableSkeleton rows={17} columns={3} />
		</div>
	);
}
