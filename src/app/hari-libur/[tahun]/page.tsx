import type { Metadata } from "next";
import HariLibur from "./hari-libur";

// export const metadata: Metadata = {
// 	title: "Hari Libur Nasional dan Cuti Bersama - WikiASN",
// };

// or Dynamic metadata
export async function generateMetadata({
	params,
}: {
	params: Promise<{ tahun: string }>;
}) {
	const tahun = (await params).tahun;
	// const apiUrl = process.env.API_URL;
	// const res = await fetch(
	// 	`${apiUrl}/hari-libur?tahun=${tahun}`,
	// );

	// const resData = await res.json();
	// const data = resData.data;
	// console.log(data)
	return {
		title: `Hari Libur Nasional dan Cuti Bersama Tahun ${tahun} - WikiASN`,
	};
}
// export const dynamic = "force-dynamic";

export default async function Page({
	params,
}: {
	params: Promise<{ tahun: string }>;
}) {
	const paramTahun = (await params).tahun;
	const tahun = Number.parseInt(paramTahun);
	// const apiUrl = process.env.API_URL;
	// const res = await fetch(
	// 	`${apiUrl}/hari-libur?tahun=${tahun}`,
	// );

	// const resData = await res.json();
	// const data = resData.data;
	// console.log(data)
	return (
		<div className=" bg-gray-50/50 w-full">
			<HariLibur tahun={tahun} />
		</div>
	);
}
