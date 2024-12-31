import Link from "next/link";

export default async function Page({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const judul = (await params).slug;
	//   console.log(judul)
	return (
		<div className="container space-y-8 ">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					<Link href="/standar-biaya-masukan">Standar Biaya Masukan</Link>
				</div>

				<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 md:mb-2">
					{judul}
				</h1>
			</div>

			<div className="bg-white px-0 md:px-20 py-4">
				<div className="max-w-5xl mx-auto py-4 my-auto" />
			</div>
		</div>
	);
}
