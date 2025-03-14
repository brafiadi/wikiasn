"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "@/components/table-skeleton";
import { useRouter } from "next/navigation";
import { useSBM } from "@/hooks/manajemen-konten/sbm";

interface StandarBiayaMasukan {
	id: number;
	judul: string;
	jenis: string;
	link: string;
}

export default function StandarBiayaMasukanTable() {
	const sbm = useSBM();
	const { data, isLoading } = sbm.getList();
	const router = useRouter();

	// const tahun = 2025;

	if (isLoading) {
		return <Loading />;
	}

	const sbmData = data?.data.data;

	// console.log(sbmData)

	const handleNavigation = (link: string) => {
		router.push(`standar-biaya-masukan/edit?data=${link}`); // Navigasi ke halaman lain tanpa reload server
	};

	return (
		<div className="rounded-lg bg-white ">
			<Table>
				<TableHeader className="sticky top-0 z-10 w-full bg-background border-b">
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Standar Biaya Masukan</TableHead>
						<TableHead className="w-[200px]">Tipe</TableHead>
					</TableRow>
				</TableHeader>
			</Table>
			<ScrollArea className="h-[65vh] w-full">
				<Table>
					<TableBody>
						{sbmData?.map((item: StandarBiayaMasukan, index: number) => (
							<TableRow key={item.id}>
								<TableCell className="text-gray-500 w-[50px]">
									{index + 1}
								</TableCell>
								<TableCell>
									<button type="button" className="text-left">
										<p
											onClick={() => handleNavigation(item.link)}
											onKeyUp={(e) =>
												e.key === "Enter" && handleNavigation(item.link)
											}
											className="hover:text-red-600"
										>
											{item.judul}
										</p>
									</button>
								</TableCell>
								<TableCell className="w-[200px]">{item.jenis}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</ScrollArea>
		</div>
	);
}

function Loading() {
	return (
		<>
			<TableSkeleton rows={10} columns={3} />
		</>
	);
}
