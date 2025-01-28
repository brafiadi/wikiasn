import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface TambahPenjelasanProps {
	tahun: string;
	sbmId: number;
}

export default function TambahPenjelasan({
	tahun,
	sbmId,
}: TambahPenjelasanProps) {
	const handleClick = () => {
		console.log("tambah");
	};
	const handleSave = () => {
		console.log("save");
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"sm"} onClick={handleClick}>
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Tambah Penjelasan</DialogTitle>
				</DialogHeader>
				<Textarea placeholder="Penjelasan standar biaya masukan" />
				<div className="flex justify-end">
					<Button onClick={handleSave}>Save</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
