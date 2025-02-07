"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { atom, useAtom } from "jotai";
import { useSBM } from "@/hooks/manajemen-konten/sbm";
import SBMPenjelasanSection from "./sbm-penjelasan.section";
import SBMDataTable from "./sbm-data.table";

const tahunAtom = atom("2025");

export default function Page() {
	const router = useRouter();

	const searchParams = useSearchParams();
	const sbmParams = searchParams.get("data");

	const [tahun, setTahun] = useAtom(tahunAtom);

	// console.log(sbm, tahun);

	const sbm = useSBM();

	const { data, isLoading } = sbm.getDetail(sbmParams || "", tahun);
	const sbmInfo = data?.data.info;

	// console.log(sbmInfo)

	const handleNavigation = () => {
		router.push("/dashboard/manajemen-konten/standar-biaya-masukan"); // Navigasi ke halaman lain tanpa reload server
	};

	// const judul = data.info.judul;

	if (isLoading) {
		return <></>;
	}

	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center space-x-2">
				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8 font-bold"
					onClick={handleNavigation}
				>
					<ArrowLeft />
				</Button>
				<h3 className="text-xl font-bold">
					Standar Biaya Masukan: {sbmInfo.judul} Tahun {tahun}
				</h3>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="penjelasan">
					<TabsList className="mb-4">
						<TabsTrigger value="penjelasan">Penjelasan</TabsTrigger>
						<TabsTrigger value="data">Data</TabsTrigger>
					</TabsList>

					<TabsContent value="penjelasan">
						<SBMPenjelasanSection tahun={tahun} sbm={sbmParams || ""} />
					</TabsContent>
					<TabsContent value="data">
						<SBMDataTable tahun={tahun} sbm={sbmParams || ""} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
