import StandarBiayaMasukanTable from "./standar-biaya-masukan.table";

export default function StandarBiayaMasukanPage() {
	return (
		<>
			<div className="mb-8 rounded-lg bg-white p-4 m-4">
				<h1 className="text-center text-xl font-bold text-neutral-700 md:text-2xl">
					STANDAR BIAYA MASUKAN
				</h1>
			</div>

			<div className="m-4">
				<StandarBiayaMasukanTable />
			</div>
		</>
	);
}
