import Link from "next/link";

export default async function Page({
	params,
}: { params: Promise<{ judul: string }> }) {
	const judul = (await params).judul;

	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto pt-8">
				<div className="text-red-600 font-medium mb-2">
					Ensiklopedia Aparatur Sipil Negara
				</div>
				<Link href="/standar-biaya-masukan">
					<h1 className="text-5xl font-medium tracking-tight ">
						Standar Biaya Masukan
					</h1>
				</Link>
				<h2 className="text-3xl font-medium tracking-tight mb-8">{judul}</h2>
			</div>

			<div className="bg-white">
				<div className="max-w-5xl mx-auto py-4 my-auto"></div>
			</div>
		</div>
	);
}
