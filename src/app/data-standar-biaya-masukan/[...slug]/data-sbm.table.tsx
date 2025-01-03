"use client";

import type React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { formatRupiah } from "@/utils/currency";
import { Button } from "@/components/ui/button";
import { atom, useAtom } from "jotai";

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

interface DataSBMTableClientProps {
	data: {
		data: SBMDataRow[];
		table: Record<string, string | null>;
	};
	kategori: string[];
}

const selectedCategoryAtom = atom<string | null>(null);

const DataSBMTableClient: React.FC<DataSBMTableClientProps> = ({
	data,
	kategori,
}) => {
	const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

	const tableHeaders = Object.entries(data.table)
		.filter(([key, value]) => value !== null)
		.map(([key, value]) => ({ key, label: value }));

	const filteredData = selectedCategory
		? data.data
				.filter((row: SBMDataRow) => row.nama_kategori === selectedCategory)
				.sort((a, b) => a.id - b.id)
		: data.data.sort((a, b) => a.id - b.id);

	// console.log("filteredData", filteredData);

	return (
		<div className="space-y-4">
			<div className="flex space-x-2 mx-4">
				<div className="hidden md:flex flex-wrap  ">
					{kategori.map((item) => (
						<Button
							key={item}
							className={`h-6 m-1 ${selectedCategory === item ? "bg-red-600" : "bg-red-300"}`}
							onClick={() =>
								setSelectedCategory(selectedCategory === item ? null : item)
							}
						>
							{item}
						</Button>
					))}
				</div>
				<div className="md:hidden ">
					<Select onValueChange={(value) => setSelectedCategory(value)}>
						<SelectTrigger className="min-w-[300px] text-gray-500">
							<SelectValue placeholder="Pilih Kategori" />
						</SelectTrigger>
						<SelectContent>
							{kategori.map((item) => (
								<SelectItem key={item} value={item}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<Table>
				<TableCaption>...</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">No</TableHead>
						{tableHeaders.map((header) => (
							<TableHead key={header.key} className="max-w-[250px]">
								{" "}
								{String(header.label)}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredData.map((row: SBMDataRow, index: number) => (
						<TableRow key={row.id}>
							<TableCell>{index + 1}</TableCell>
							{tableHeaders.map((header) => (
								<TableCell
									key={header.key}
									className="min-w-[150px] max-w-[250px]"
								>
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
};

export default DataSBMTableClient;
