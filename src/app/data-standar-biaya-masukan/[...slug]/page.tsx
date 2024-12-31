import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

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
					<div className="max-w-5xl mx-auto py-4 my-auto text-gray-500">
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
				<div className="max-w-5xl mx-auto py-4 my-auto" />
			</div>
		</div>
	);
}
