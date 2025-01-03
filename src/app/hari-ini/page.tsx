import Loader from "@/components/loader";
import { Suspense } from "react";

const apiUrl = process.env.API_URL;

const getHariIniData = async () => {
	const res = await fetch(`${apiUrl}/hari-libur/hari-ini`);
	const data = await res.json();
	return data.data;
};

// export const dynamic = "force-dynamic";

export const revalidate = 3600 // invalidate every hour

export default async function Page() {
	const data = await getHariIniData();
	const isWork = !data.libur;
	return (
		<Suspense fallback={<Loading />}>
			<h2 className="text-xl text-gray-600 text-center">{data.hari_ini}</h2>
			<h1
				className={`text-5xl ${isWork ? "text-orange-600" : "text-red-600"} text-center`}
			>
				{isWork ? "Hari Kerja" : `Libur ${data.hari_libur}`}
			</h1>
			<h2 className="text-xl text-gray-600 text-center">{data.pesan}</h2>
		</Suspense>
	);
}

function Loading() {
	return (
		<div className="mx-auto min-h-[70vh] max-w-6xl p-4 md:p-8">
			<Loader />
		</div>
	);
}
