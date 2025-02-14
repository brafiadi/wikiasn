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
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import {
	Form,
	FormItem,
	FormLabel,
	FormField,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import slugify from "slugify";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { usePeraturan } from "@/hooks/manajemen-konten/peraturan";

const kategoriEnum = [
	"Ketetapan Majelis Permusyawaratan Rakyat",
	"Undang-Undang",
	"Undang-Undang Darurat",
	"Peraturan Pemerintah Pengganti Undang-Undang",
	"Peraturan Pemerintah",
	"Peraturan Presiden",
	"Penetapan Presiden",
	"Keputusan Presiden",
	"Instruksi Presiden",
	"Peraturan Menteri",
	"Keputusan Menteri",
	"Peraturan Badan/Lembaga",
	"Peraturan Daerah",
] as const;

const formSchema = z.object({
	nama: z.string().min(1, {
		message: "Nama peraturan wajib diisi",
	}),
	tautan: z.string().url({
		message: "Tautan peraturan wajib diisi",
	}),
	tahun: z.string().min(4).max(4, {
		message: "Tahun harus 4 digit",
	}),
	kata_kunci: z
		.array(z.string())
		.min(1, { message: "Minimal satu kata kunci harus diisi" }),
	slug: z.string().optional(),
	kategori: z.enum(kategoriEnum),
	tanggal_pengesahan: z.date({
		required_error: "Tangga; pengesahan wajib diisi",
	}),
});

type FormValues = z.infer<typeof formSchema>;

export default function TambahPeraturan() {
	const [open, setOpen] = useState(false);
	const [newKeyword, setNewKeyword] = useState("");

	const { mutate: addPeraturan, isPending } = usePeraturan().addPeraturan();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nama: "",
			tautan: "",
			tahun: "",
			kata_kunci: [],
			kategori: "Undang-Undang",
			slug: "",
		},
	});

	const { watch, setValue } = form;

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "nama") {
				setValue("slug", slugify(value.nama || "", { lower: true }));
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, setValue]);

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "tanggal_pengesahan" && value.tanggal_pengesahan) {
				const tahun = value.tanggal_pengesahan.getFullYear().toString();
				setValue("tahun", tahun);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, setValue]);

	const onSubmit = (values: FormValues) => {
		// Convert tanggal_pengesahan to ISO format
		const formattedValues = {
			...values,
			tanggal_pengesahan: values.tanggal_pengesahan
				? new Date(values.tanggal_pengesahan).toISOString()
				: null,
		};

		// console.log(formattedValues);
		addPeraturan(formattedValues);
		form.reset();
		setOpen(false);
	};

	const addKeyword = () => {
		if (newKeyword.trim() !== "") {
			const currentKeywords = form.getValues("kata_kunci");
			setValue("kata_kunci", [...currentKeywords, newKeyword.trim()]);
			setNewKeyword("");
		}
	};

	const removeKeyword = (index: number) => {
		const currentKeywords = form.getValues("kata_kunci");
		setValue(
			"kata_kunci",
			currentKeywords.filter((_, i) => i !== index),
		);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"sm"} className="shadow-md">
					<Tooltip>
						<TooltipTrigger asChild>
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
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="nama"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Peraturan</FormLabel>
									<FormControl>
										<Input placeholder="Nama peraturan" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tautan"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tautan Peraturan</FormLabel>
									<FormControl>
										<Input
											placeholder="https://contoh.com/peraturan"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="kata_kunci"
							render={() => (
								<FormItem>
									<FormLabel>Kata Kunci</FormLabel>
									<FormControl>
										<div className="space-y-2">
											<div className="flex items-center space-x-2">
												<div className="relative flex-grow">
													<Input
														placeholder="Tambah kata kunci"
														value={newKeyword}
														onChange={(e) => setNewKeyword(e.target.value)}
														onKeyPress={(e) => {
															if (e.key === "Enter") {
																e.preventDefault();
																addKeyword();
															}
														}}
														className="pr-10"
													/>
													<button
														type="button"
														onClick={addKeyword}
														className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
													>
														<Plus size={20} />
													</button>
												</div>
											</div>
											<div className="flex flex-wrap gap-2">
												{form.watch("kata_kunci").map((keyword, index) => (
													<div
														key={index}
														className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
													>
														{keyword}
														<button
															type="button"
															onClick={() => removeKeyword(index)}
															className="ml-2 text-secondary-foreground/50 hover:text-secondary-foreground focus:outline-none"
														>
															<X size={14} />
														</button>
													</div>
												))}
											</div>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="kategori"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Kategori</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Pilih kategori" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{kategoriEnum.map((kategori) => (
												<SelectItem key={kategori} value={kategori}>
													{kategori}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tanggal_pengesahan"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Tanggal Pengesahan</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pilih tanggal</span>
													)}
													<Calendar className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<CalendarComponent
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date("1900-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="slug"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Slug</FormLabel>
									<FormControl>
										<Input {...field} disabled />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end">
							<Button type="submit">Simpan</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
