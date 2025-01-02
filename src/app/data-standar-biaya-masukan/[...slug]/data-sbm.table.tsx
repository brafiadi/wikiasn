"use client";

import React from "react";
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
		? data.data.filter(
				(row: SBMDataRow) => row.nama_kategori === selectedCategory,
			)
		: data.data;

	return (
		<div className="space-y-4">
			<div className="flex space-x-2 mx-4">
				{kategori.map((item) => (
					<Button
						key={item}
						className={`h-6 ${selectedCategory === item ? "bg-red-600" : "bg-red-300"}`}
						onClick={() =>
							setSelectedCategory(selectedCategory === item ? null : item)
						}
					>
						{item}
					</Button>
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
					{filteredData.map((row: SBMDataRow, index: number) => (
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
	)
}

export default DataSBMTableClient
