export default async function Page({
	params,
}: {
	params: Promise<{ instansi: string }>;
}) {
	const instansi = (await params).instansi;
	return (
		<div>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<h2 className="text-center text-2xl font-bold text-neutral-800 md:text-2xl">
					TUNJANGAN KINERJA
				</h2>
				<h2 className="text-center text-2xl font-bold text-neutral-900 md:text-2xl">
					{instansi.toUpperCase()}
				</h2>
			</div>
		</div>
	);
}
