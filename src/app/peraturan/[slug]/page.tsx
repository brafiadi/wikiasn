import PdfViewer from "@/components/pdf-viewer";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
	const apiUrl = process.env.API_URL;
	const res = await fetch(`${apiUrl}/peraturan`);
	const resData = await res.json();
	const data = resData.data;
	const params = data.map((item: { slug: string }) => ({ slug: item.slug }));
	return params;
}

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const apiUrl = process.env.API_URL;
	const res = await fetch(`${apiUrl}/peraturan/data?link=${slug}`);
	const resData = await res.json();
	const data = resData.data;
	return {
		title: `${data.nama} - WikiASN`,
	};
}

export default async function Page({
	params,
}: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const apiUrl = process.env.API_URL;
	const res = await fetch(`${apiUrl}/peraturan/data?link=${slug}`);
	if (!res.ok) {
		return {
			notFound: true,
		};
	}
	const resData = await res.json();
	const data = resData.data;
	return (
		<div className="container space-y-8">
			<div className="max-w-5xl mx-auto px-8 md:px-0 pt-8">
				<div className="text-red-600 font-medium mb-2">
					<Link href="/peraturan">Peraturan</Link>
				</div>
				<Suspense fallback={<>...</>}>
					<h1 className="text-2xl md:text-4xl font-medium tracking-tight mb-2 md:mb-2">
						{data.nama}
					</h1>
				</Suspense>
			</div>

			<div className="bg-white px-6 md:px-28 py-4">
				{/* {data.tautan} */}
				<PdfViewer pdfUrl={data.tautan} />
			</div>
		</div>
	);
}
