"use client";
import { useSBM } from "@/hooks/manajemen-konten/sbm";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface SBMDataTableProprs {
	tahun: string;
	sbm: string;
}

export default function SBMDataTable({ tahun, sbm }: SBMDataTableProprs) {
	const sb = useSBM();
	const { data } = sb.getDetail(sbm || "", tahun);

	const sbmData = data?.data.data;

	// console.log(sbmData);

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
			<CardContent>{tahun}</CardContent>
		</Card>
	);
}
