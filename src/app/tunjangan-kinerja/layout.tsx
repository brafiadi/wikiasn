import Link from "next/link";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="container mx-auto  w-full">
			<div className="min-h-screen max-w-6xl mx-auto bg-orange-200/50 p-4 md:p-8">
				<div className="text-center mb-8">
					<Link href="/">
						<h1 className="text-xl font-bold font-serif text-gray-800 mb-1">
							WikiASN
						</h1>
					</Link>
					<p className="text-sm text-gray-600">
						Ensikolpedia Aparatur Sipil Negara
					</p>
				</div>
				{children}
			</div>
		</section>
	);
}
