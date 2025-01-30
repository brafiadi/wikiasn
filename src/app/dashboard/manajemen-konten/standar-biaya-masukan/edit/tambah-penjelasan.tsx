"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormLabel,
	FormControl,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useSBM } from "@/hooks/manajemen-konten/sbm";

interface TambahPenjelasanProps {
	tahun: string;
	sbmId: number;
}

const formSchema = z.object({
	penjelasan: z.string().min(10, {
		message: "Penjelasan SBM paling sedikit mengandung 10 karakter",
	}),
});

export default function TambahPenjelasan({
	tahun,
	sbmId,
}: TambahPenjelasanProps) {
	const [open, setOpen] = useState(false);

	const { mutate: addPenjelasan, isPending } = useSBM().addPenjelasan();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			penjelasan: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const data = {
			tahun: tahun,
			id: sbmId,
			penjelasan: values.penjelasan,
		};
		addPenjelasan(data);
		console.log("save", data);
		form.reset();
		setOpen(false);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" size="sm">
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Tambah Penjelasan</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="penjelasan"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Penjelasan</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Penjelasan standar biaya masukan"
											className="min-h-[200px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end">
							<Button type="submit" disabled={isPending}>
								{isPending ? "Menyimpan..." : "Simpan"}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
