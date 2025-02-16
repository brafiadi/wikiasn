"use client";
import { useSBM } from "@/hooks/manajemen-konten/sbm";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import TambahPenjelasan from "./tambah-penjelasan";
import EditPenjelasan from "./edit-penjelasan";
import TipTapEditor from "@/components/tiptap-editor";
import { ContentView } from "@/components/content-view";
import { Toaster } from "@/components/ui/toaster";

interface SBMPenjelasanSectionProps {
	tahun: string;
	sbm: string;
}

export default function SBMPenjelasanSection({
	tahun,
	sbm,
}: SBMPenjelasanSectionProps) {
	const sb = useSBM();
	const { data } = sb.getDetail(sbm || "", tahun);

	const sbmInfo = data?.data.info;

	// console.log(sbmInfo);

	return (
		<div className="grid gap-6 md:grid-cols-4">
			<Card className="shadow-md col-span-3 p-2">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
				<CardContent>
					<div className="flex justify-between">
						<h5 className="font-semibold">Penjelasan SBM</h5>
						{sbmInfo.penjelasan.length < 1 ? (
							<TambahPenjelasan tahun={tahun} sbmId={sbmInfo.id} />
						) : (
							<EditPenjelasan id={sbmInfo.id} penjelasan={sbmInfo.penjelasan} />
						)}
					</div>
					{/* <PenjelasanSBM penjelasan={sbmInfo.penjelasan} /> */}
					{/* <TipTapEditor initialContent={sbmInfo.penjelasan} editable={false} /> */}
					<ContentView content={sbmInfo.penjelasan} />
				</CardContent>
			</Card>
			<Card className="shadow-md p-2 h-fit">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0" />
				<CardContent>
					<h5 className="font-semibold">Sumber</h5>
					<p className="text-neutral-700 mt-4">{sbmInfo.peraturan}</p>
				</CardContent>
			</Card>
		</div>
	);
}

function PenjelasanSBM({ penjelasan }: { penjelasan: string }) {
	const renderPenjelasan = () => {
		return penjelasan.split("\n").map((line) => {
			const trimmedLine = line.trim();
			if (!trimmedLine) return null; // Abaikan baris kosong
			const key =
				trimmedLine.substring(0, 10) + Math.random().toString(36).substr(2, 9);
			if (trimmedLine.startsWith("-")) {
				// Render elemen daftar
				return <li key={key}>{trimmedLine.substring(1).trim()}</li>;
			}
			// Render paragraf biasa dengan spasi tambahan
			return (
				<p key={key} className="mb-2">
					{trimmedLine}
				</p>
			);
		});
	};

	return (
		<div className="mt-4">
			<div className="text-neutral-700 text-md">{renderPenjelasan()}</div>
		</div>
	);
}
