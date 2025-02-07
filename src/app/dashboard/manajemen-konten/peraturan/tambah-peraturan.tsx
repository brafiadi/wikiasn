"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

export default function TambahPeraturan() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button variant={"outline"} size={"sm"} className="shadow-md">
					<Tooltip>
						<TooltipTrigger>
							<Plus />
						</TooltipTrigger>
						<TooltipContent sideOffset={20} align="end">
							Tambah data peraturan
						</TooltipContent>
					</Tooltip>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Tambah Data Peraturan</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
