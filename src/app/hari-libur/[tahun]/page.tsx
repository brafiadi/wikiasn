import type { Metadata } from "next";
import HariLibur from "./hari-libur";
import { Suspense } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/loader";

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

	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<Link href="/tunjangan-kinerja">
					<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-2">
						Hari Libur Nasional dan Cuti Bersama
					</h1>
				</Link>
				<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
					Tahun {tahun}
				</h2>
			</div>
			<div className="bg-white px-0 md:px-20 py-4">
				<Suspense fallback={<Loading />}>
					<HariLibur tahun={tahun} />
				</Suspense>
			</div>
		</div>
	);
}

function Loading() {
	return (
		<div className="mx-auto min-h-[70vh] max-w-6xl p-4 md:p-8">
			<Loader />
		</div>
	);
}
