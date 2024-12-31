import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const apiUrl = process.env.API_URL;

const getListStandarBiayaMasukanData = async () => {
	const res = await fetch(`${apiUrl}/standar-biaya-masukan`);
	const data = await res.json();
	return data.data;
};

interface StandarBiayaMasukan {
	id: number;
	judul: string;
	jenis: string;
	link: string;
}

export default async function StandarBiayaMasukanTable() {
	const data = await getListStandarBiayaMasukanData();

	// const tahun = new Date().getFullYear();
	const tahun = 2025;

	return (
		<div className="min-h-[400px] rounded-lg bg-white  py-8">
			<Table>
				<TableCaption className="bg-gray-100">
					Sumber: Peraturan Menteri Keuangan tentang Standar Biaya Masukan
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Standar Biaya Masukan</TableHead>
						<TableHead className="w-[200px]">Tipe</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item: StandarBiayaMasukan, index: number) => (
						<TableRow key={item.id}>
							<TableCell className="text-gray-500">{index + 1}</TableCell>
							<TableCell>
								<Link
									href={`data-standar-biaya-masukan/${item.link}/${tahun}`}
									className="hover:text-red-600"
								>
									{item.judul}
								</Link>
							</TableCell>
							<TableCell>{item.jenis}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
