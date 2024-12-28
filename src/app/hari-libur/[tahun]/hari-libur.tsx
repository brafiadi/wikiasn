import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

const apiUrl = process.env.API_URL;

interface HariLibur {
	id: number;
	nama: string;
	tanggal_mulai: string;
	tanggal_akhir: string;
	bulan: number;
	kategori: string;
}

interface NewHariLibur {
	id: number;
	nama: string;
	tanggal: string;
	bulan: number;
	kategori: string;
}

const getData = async (tahun: number) => {
	const res = await fetch(`${apiUrl}/hari-libur?tahun=${tahun}`);
	const data = await res.json();
	return data.data;
};

// Define a function to convert month numbers to names
function getMonthName(monthNumber: number) {
	const monthNames = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];
	return monthNames[monthNumber - 1];
}

export default async function HariLibur({ tahun }: { tahun: number }) {
	const data = await getData(tahun);
	if (!data) {
		return <div>Loading...</div>;
	}

	// Convert the data to the desired format
	const formattedData = data.map((item: HariLibur) => {
		const tanggalMulai = new Date(item.tanggal_mulai);
		const tanggalAkhir = new Date(item.tanggal_akhir);
		let dateString = "";

		if (
			tanggalMulai.getDate() === tanggalAkhir.getDate() &&
			tanggalMulai.getMonth() === tanggalAkhir.getMonth()
		) {
			dateString = `${tanggalMulai.getDate()} ${getMonthName(tanggalMulai.getMonth() + 1)}`;
		} else {
			dateString = `${tanggalMulai.getDate()} ${getMonthName(tanggalMulai.getMonth() + 1)} - ${tanggalAkhir.getDate()} ${getMonthName(tanggalAkhir.getMonth() + 1)}`;
		}

		return {
			id: item.id,
			nama: item.nama,
			tanggal: dateString,
			kategori: item.kategori,
			bulan: getMonthName(item.bulan),
			// created_at: item.created_at,
			// updated_at: item.updated_at
		};
	});

	// console.log(formattedData);

	return (
		<div className="mx-auto max-w-6xl">
			{/* Header */}
			<div className="mb-8 rounded-lg bg-white/90 p-4">
				<h1 className="text-center text-2xl font-bold text-navy-900 md:text-4xl">
					HARI LIBUR NASIONAL
				</h1>
				<h2 className="text-center text-xl font-bold text-navy-900 md:text-3xl">
					DAN CUTI BERSAMA TAHUN {tahun}
				</h2>
			</div>

			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				<Suspense fallback={<>....</>}>
					{formattedData
						.filter((item: NewHariLibur) => item.kategori === "Libur Nasional")
						.map((item: NewHariLibur) => (
							<Card
								key={item.id}
								className="flex flex-col overflow-hidden border-2 border-gray-200 bg-white"
							>
								<div className="bg-red-600 p-2">
									<h3 className="text-center text-sm font-semibold text-white md:text-base">
										{item.bulan}
									</h3>
								</div>
								<div className="flex flex-1 flex-col items-center p-2 text-center">
									<span className="text-2xl font-bold text-red-600 md:text-3xl">
										{item.tanggal}
									</span>
									<span className="mt-1 text-xs text-red-600 md:text-sm">
										{item.nama}
									</span>
								</div>
							</Card>
						))}
				</Suspense>
			</div>

			<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				<Suspense fallback={<>....</>}>
					{formattedData
						.filter((item: NewHariLibur) => item.kategori === "Cuti Bersama")
						.map((item: NewHariLibur) => (
							<Card
								key={item.id}
								className="flex flex-col overflow-hidden border-2 border-gray-200 bg-white"
							>
								<div className="bg-gray-600 p-2">
									<h3 className="text-center text-sm font-semibold text-white md:text-base">
										{item.bulan}
									</h3>
								</div>
								<div className="flex flex-1 flex-col items-center p-2 text-center">
									<span className="text-2xl font-bold text-gray-600 md:text-3xl">
										{item.tanggal}
									</span>
									<span className="mt-1 text-xs text-gray-600 md:text-sm">
										{item.nama}
									</span>
								</div>
							</Card>
						))}
				</Suspense>
			</div>
		</div>
	);
}
