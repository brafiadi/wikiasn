"use client";
import { atom, useAtom } from "jotai";
import { useGetDetailSBM } from "@/hooks/manajemen-konten/sbm";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface SBMDataTableProprs {
	tahun: string;
	sbm: string;
}

export default function SBMDataTable({ tahun, sbm }: SBMDataTableProprs) {
	const { data, isLoading } = useGetDetailSBM(sbm || "", tahun);

	const sbmData = data?.data.data;

	// console.log(sbmData);

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
			<CardContent>{tahun}</CardContent>
		</Card>
	);
}
