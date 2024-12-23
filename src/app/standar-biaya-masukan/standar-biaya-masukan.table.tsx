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

	return (
		<div className="min-h-[400px] rounded-lg bg-white my-8 p-8">
			<Table>
				<TableCaption>
					Sumber: Peraturan Presiden tentang Tunjangan Kinerja dari beberapa
					instansi
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
									href={`standar-biaya-masukan/${item.link}`}
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
