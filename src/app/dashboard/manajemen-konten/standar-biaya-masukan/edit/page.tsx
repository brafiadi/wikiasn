'use client'
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useGetDetailSBM } from "@/hooks/manajemen-konten/sbm";
import { atom, useAtom } from 'jotai'

// const apiUrl = process.env.API_URL;

// const getDetailSBMData = async (sbm: string, tahun: string) => {
// 	const res = await fetch(
// 		`${apiUrl}/standar-biaya-masukan/data?sbm=${sbm}&tahun=${tahun}`,
// 	);
// 	const data = await res.json();
// 	return data;
// };

const tahunAtom = atom('2025')

export default function Page() {
	const searchParams = useSearchParams();
  	const sbm = searchParams.get('data')
	
	const [tahun, setTahun] = useAtom(tahunAtom	)

	console.log(sbm, tahun)

	 const router = useRouter();

	const handleNavigation = () => {
    router.push('/dashboard/manajemen-konten/standar-biaya-masukan'); // Navigasi ke halaman lain tanpa reload server
  };

	

	// const judul = data.info.judul;

	return (
		<div className="flex-1 space-y-4 px-8 py-4">
			<div className="flex items-center space-x-2">
					<Button variant="ghost" size="icon" className="h-8 w-8 font-bold" onClick={handleNavigation}>
						<ArrowLeft />
					</Button>
				<h3 className="text-2xl font-bold">Standar Biaya Masukan: {tahun}</h3>
			</div>
			<div className="pt-2">
				<Tabs defaultValue="penjelasan">
					<TabsList className="">
						<TabsTrigger value="penjelasan">Penjelasan</TabsTrigger>
						<TabsTrigger value="data">Data</TabsTrigger>
					</TabsList>

					<TabsContent value="penjelasan">1</TabsContent>
					<TabsContent value="data">2</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
