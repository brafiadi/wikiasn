import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const apiUrl = process.env.API_URL;

const getListDaftarPeraturanData = async () => {
	const res = await fetch(`${apiUrl}/peraturan`);
	const data = await res.json();
	return data.data;
};

export default async function DaftarPeraturanTable() {
	const data = await getListDaftarPeraturanData();
	console.log(data);
	return (
		<div className="min-h-[400px] rounded-lg bg-white py-8">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50px]">#</TableHead>
						<TableHead>Judul Peraturan</TableHead>
						<TableHead>Kategori</TableHead>
						<TableHead>Dokumen</TableHead>
					</TableRow>
				</TableHeader>
			</Table>
		</div>
	);
}
