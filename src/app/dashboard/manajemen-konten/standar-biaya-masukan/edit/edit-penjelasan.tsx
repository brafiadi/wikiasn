import TipTapEditor from "@/components/tiptap-editor";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSBM } from "@/hooks/manajemen-konten/sbm";
import { SquarePenIcon } from "lucide-react";
import { useState } from "react";

interface EditPenjelasanProps {
	id: number;
	penjelasan: string;
}

export default function EditPenjelasan({
	id,
	penjelasan,
}: EditPenjelasanProps) {
	const [open, setOpen] = useState(false);

	// console.log(id, penjelasan);
	//
	const { mutate: updatePenjelasan } = useSBM().updatePenjelasan(id);

	const handleSave = async (content: string): Promise<void> => {
		const data = {
			penjelasan: content,
		};
		updatePenjelasan(data);
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"sm"}>
					<Tooltip>
						<TooltipTrigger>
							<SquarePenIcon />
						</TooltipTrigger>
						<TooltipContent>Edit data penjelasan</TooltipContent>
					</Tooltip>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[1000px] w-[90vw] max-h-[90vh] flex flex-col">
				<DialogHeader>
					<DialogTitle>Edit Penjelasan</DialogTitle>
				</DialogHeader>
				<div className="flex-1 min-h-0">
					{" "}
					<TipTapEditor onSave={handleSave} initialContent={penjelasan} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
