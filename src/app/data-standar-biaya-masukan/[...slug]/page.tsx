import Link from "next/link";
import { Suspense } from "react";
import DataSBMTableClient from "./data-sbm.table";

// export const dynamic = "force-dynamic";

export const revalidate = 3600; // invalidate every hour

const apiUrl = process.env.API_URL;

export async function generateStaticParams() {
	const tahun = ["2025"];
	const res = await fetch(`${apiUrl}/standar-biaya-masukan`);
	const resData = await res.json();
	const data = resData.data;
	const params = tahun.flatMap((tahun) =>
		data.map((item: { link: string }) => ({
			slug: [item.link, tahun],
		})),
	);
	return params;
}

const getDetailSBMData = async (sbm: string, tahun: string) => {
	const res = await fetch(
		`${apiUrl}/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`,
	);
	const data = await res.json();
	return data;
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const sbm = (await params).slug[0];
	const tahun = (await params).slug[1];

	if (!sbm || !tahun) {
		return {
			title: "Data Standar Biaya Masukan - WikiASN",
		};
	}

	const data = await getDetailSBMData(sbm, tahun);

	if (!data || !data.data || data.data.length === 0) {
		return {
			title: "Data Standar Biaya Masukan - WikiASN",
		};
	}

	const judul = data.data[0].judul;

	return {
		title: `Standar Biaya Masukan ${judul} Tahun Anggaran ${tahun} - WikiASN`,
	};
}

interface DataSBMTableProps {
	tahun: string;
	sbm: string;
}

interface DataRow {
	nama_kategori: string;
}

function getUniqueCategories(data: DataRow[]): string[] {
	const uniqueCategories = [...new Set(data.map((item) => item.nama_kategori))];
	return uniqueCategories;
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	if (!params) {
		return <div>Parameter tidak valid</div>;
	}

	const sbm = (await params).slug[0];
	const tahun = (await params).slug[1];

	// Tambahkan pengecekan parameter
	if (!sbm || !tahun) {
		return <div>Parameter sbm dan tahun diperlukan</div>;
	}

	const data = await getDetailSBMData(sbm, tahun);

	const kategori = getUniqueCategories(data.data);

	// console.log(data)

	// Tambahkan pengecekan data
	if (!data || !data.data || data.data.length === 0) {
		return (
			<div className="container space-y-8 ">
				<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
					<div className="text-red-600 font-medium mb-2">
						<Link href="/standar-biaya-masukan">Standar Biaya Masukan</Link>
					</div>
					<h1 className="text-xl md:text-3xl font-medium tracking-tight mb-2 md:mb-2 italic">
						.....
					</h1>
				</div>

				<div className="bg-white px-0 md:px-20 py-4">
					<div className="max-w-5xl mx-6 md:mx-auto py-4 my-auto text-gray-500">
						<p>Data tidak ditemukan</p>
					</div>
				</div>
			</div>
		);
	}

	const judul = data.data[0].judul;

	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					<Link href="/standar-biaya-masukan">Standar Biaya Masukan</Link>
				</div>
				<Suspense fallback={<p>...</p>}>
					<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-2">
						{judul}
					</h1>
					<h2 className="text-xl md:text-3xl font-medium tracking-tight mb-2 md:mb-2">
						Tahun Anggaran {tahun}
					</h2>
				</Suspense>
			</div>

			<div className="bg-white px-0 md:px-20 py-4">
				<div className="max-w-5xl mx-6 md:mx-auto py-4 my-auto">
					<DataSBMTableClient data={data} kategori={kategori} />
				</div>
			</div>
		</div>
	);
}
