import Link from "next/link";

export default async function Page({
	params,
}: { params: Promise<{ judul: string }> }) {
	const judul = (await params).judul;

	return (
		<div>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<Link href="/tunjangan-kinerja">
					<h2 className="text-center text-2xl font-bold text-neutral-800 md:text-2xl">
						STANDAR BIAYA MASUKAN
					</h2>
				</Link>
				<h2 className="text-center text-2xl font-bold text-neutral-900 md:text-2xl">
					{judul}
				</h2>
			</div>
		</div>
	);
}
