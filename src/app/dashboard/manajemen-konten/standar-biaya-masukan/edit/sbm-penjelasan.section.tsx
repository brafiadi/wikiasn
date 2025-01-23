"use client";
import { atom, useAtom } from "jotai";
import { useGetDetailSBM } from "@/hooks/manajemen-konten/sbm";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface SBMPenjelasanSectionProps {
	tahun: string;
	sbm: string;
}

export default function SBMPenjelasanSection({
	tahun,
	sbm,
}: SBMPenjelasanSectionProps) {
	const { data, isLoading } = useGetDetailSBM(sbm || "", tahun);

	const sbmInfo = data?.data.info;

	// console.log(sbmInfo);

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
			<CardContent>
				<h5 className="font-semibold">Penjelasan SBM</h5>
				<PenjelasanSBM penjelasan={sbmInfo.penjelasan} />
			</CardContent>
		</Card>
	);
}

function PenjelasanSBM({ penjelasan }: { penjelasan: string }) {
	const renderPenjelasan = () => {
		return penjelasan.split("\n").map((line, index) => {
			const trimmedLine = line.trim();
			if (!trimmedLine) return null; // Abaikan baris kosong
			if (trimmedLine.startsWith("-")) {
				// Render elemen daftar
				return <li key={index}>{trimmedLine.substring(1).trim()}</li>;
			} else {
				// Render paragraf biasa
				return <p key={index}>{trimmedLine}</p>;
			}
		});
	};

	return (
		<div className="mt-4">
			<div className="text-neutral-700 text-md">{renderPenjelasan()}</div>
		</div>
	);
}
