import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { usePeraturan } from "@/hooks/manajemen-konten/peraturan";
import { TableSkeleton } from "@/components/table-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

interface Peraturan {
	id: number;
	nama: string;
	kata_kunci: string;
	slug: string;
	tahun: string;
	tautan: string;
	kategori: string;
}

export default function PeraturanTable() {
	const peraturan = usePeraturan();
	const { data, isLoading } = peraturan.getList();
	const router = useRouter();

	if (isLoading) {
		return <Loading />;
	}

	const peraturanData = data?.data.data;

	const handleNavigation = (link: string) => {
		router.push(`peraturan/edit?data=${link}`);
	};

	return (
		<div className="rounden-lg bg-white">
			<Table>
				<TableHeader className="sticky top-0 z-10 w-full bg-background border-b">
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Peraturan</TableHead>
						<TableHead className="w-[150px]">Kategori</TableHead>
						<TableHead className="w-[150px]">Tahun</TableHead>
						<TableHead className="w-[200px]">Kata Kunci</TableHead>
						<TableHead className="w-[200px]">Dokumen</TableHead>
					</TableRow>
				</TableHeader>
			</Table>
			<ScrollArea className="h-[65vh] w-full">
				<Table>
					<TableBody>
						{peraturanData?.map((item: Peraturan, index: number) => (
							<TableRow key={item.id}>
								<TableCell className="text-gray-500 w-[50px]">
									{index + 1}
								</TableCell>
								<TableCell>
									<button type="button" className="text-left">
										<p
											onClick={() => handleNavigation(item.slug)}
											onKeyUp={(e) =>
												e.key === "Enter" && handleNavigation(item.slug)
											}
											className="hover:text-red-600"
										>
											{item.nama}
										</p>
									</button>
								</TableCell>
								<TableCell className="w-[150px]">{item.kategori}</TableCell>
								<TableCell className="w-[150px]">{item.tahun}</TableCell>
								<TableCell className="w-[200px]">
									<div className="flex flex-wrap gap-2">
										{(typeof item.kata_kunci === "string"
											? item.kata_kunci.split(",")
											: item.kata_kunci
										).map((kataKunci: string) => (
											<Badge
												key={kataKunci}
												className="bg-red-600/50 font-extralight capitalize"
											>
												{kataKunci}
											</Badge>
										))}
									</div>
								</TableCell>
								<TableCell className="w-[200px]">
									<Link href={item.tautan} target="_blank">
										<Badge variant={"secondary"}>
											<FileText className="text-gray-600 hover:text-gray-800 h-4 w-4" />
										</Badge>
									</Link>
								</TableCell>
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
