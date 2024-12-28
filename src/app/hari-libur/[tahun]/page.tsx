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
		<div className=" bg-gray-50/50 w-full">
			<div className="mx-auto min-h-screen max-w-6xl bg-sky-200 p-4 md:p-8">
				<div className="text-center mb-8">
					<Link href="/">
						<h1 className="text-xl font-bold font-serif text-gray-800 mb-1">
							WikiASN
						</h1>
					</Link>
					<p className="text-sm text-gray-600">
						Ensikolpedia Aparatur Sipil Negara
					</p>
				</div>
				{/* <Suspense fallback={<Loading />}> */}
				<HariLibur tahun={tahun} />
				{/* </Suspense> */}
			</div>
		</div>
	);
}

// export function Loading() {
// 	return (
// 		<div className="mx-auto min-h-screen max-w-6xl bg-sky-200 p-4 md:p-8">
// 			<Loader />
// 		</div>
// 	);
// }
