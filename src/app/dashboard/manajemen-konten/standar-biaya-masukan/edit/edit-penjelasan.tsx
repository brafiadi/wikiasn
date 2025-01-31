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
import { SquarePenIcon } from "lucide-react";
import { useState } from "react";

export default function EditPenjelasan() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog>
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
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Penjelasan</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
