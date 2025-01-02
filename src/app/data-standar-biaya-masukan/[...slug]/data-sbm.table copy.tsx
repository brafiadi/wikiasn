import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatRupiah } from "@/utils/currency";
import { Button } from "@/components/ui/button";
import { atom, useAtom } from "jotai";

const apiUrl = process.env.API_URL;

const getDetailSBMData = async (sbm: string, tahun: string) => {
	const res = await fetch(
		`${apiUrl}/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`,
	);
	const data = await res.json();
	return data;
};

interface DataSBMTableProps {
	tahun: string;
	sbm: string;
}

interface SBMDataRow {
	id: number;
	judul: string;
	nama_kategori: string;
	uraian: string;
	tahun: string;
	satuan?: string | null;
	nilai_1?: number | null;
	nilai_2?: number | null;
	nilai_3?: number | null;
	nilai_4?: number | null;
	nilai_5?: number | null;
}

interface SBMTableHeader {
	key: string;
	label: string;
}

interface DataRow {
	nama_kategori: string;
}

function getUniqueCategories(data: DataRow[]): string[] {
	// Extract unique categories using Set
	const uniqueCategories = [...new Set(data.map((item) => item.nama_kategori))];
	return uniqueCategories;
}

export default async function DataSBMTable({ tahun, sbm }: DataSBMTableProps) {
	const data = await getDetailSBMData(sbm, tahun);

	// console.log(data);

	const kategori = getUniqueCategories(data.data);

	// Create an atom to manage the selected category state
	const selectedCategoryAtom = atom<string | null>(null);

	// console.log(kategori);

	// Filter header columns based on non-null values in the `table` object
	const tableHeaders = Object.entries(data.table)
		.filter(([key, value]) => value !== null)
		.map(([key, value]) => ({ key, label: value }));

	// console.log(tableHeaders);

	const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

	return (
		<div className="space-y-4">
			<div className="flex space-x-2 mx-4">
				{kategori.map((item) => (
					<Button className="h-6 bg-red-400">{item}</Button>
				))}
			</div>
			<Table>
				<TableCaption>...</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">No</TableHead>
						{tableHeaders.map((header) => (
							<TableHead key={header.key}> {String(header.label)}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.data.map((row: SBMDataRow, index: number) => (
						<TableRow key={row.id}>
							<TableCell>{index + 1}</TableCell>
							{tableHeaders.map((header) => (
								<TableCell key={header.key}>
									{header.key === "kolom_kategori"
										? row.nama_kategori
										: header.key === "kolom_uraian"
											? row.uraian
											: header.key === "kolom_satuan"
												? row.satuan || "-"
												: header.key === "kolom_1"
													? formatRupiah(row.nilai_1 ?? 0) || "-"
													: header.key === "kolom_2"
														? formatRupiah(row.nilai_2 ?? 0) || "-"
														: header.key === "kolom_3"
															? formatRupiah(row.nilai_3 ?? 0) || "-"
															: header.key === "kolom_4"
																? formatRupiah(row.nilai_4 ?? 0) || "-"
																: header.key === "kolom_5"
																	? formatRupiah(row.nilai_5 ?? 0) || "-"
																	: "-"}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
