import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto px-4">
				<main className="mx-auto max-w-4xl p-4">
					<div className="mt-4 mb-12">
						<div className="w-full h-[80px]" />
					</div>
					<div className="text-center mb-8">
						<Link href="/">
							<h1 className="text-5xl font-serif mb-1">WikiASN</h1>
						</Link>
						<p className="text-gray-600">Ensiklopedia Aparatur Sipil Negara</p>
					</div>

					<div className="flex flex-col items-center gap-8">
						<Image
							src="/garuda.png"
							alt="WikiASN"
							width={200}
							height={200}
							className="mb-4"
						/>

						<div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-2xl">
							<div className="text-center">
								<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
								<h2 className="text-3xl font-semibold text-gray-700 mb-6">
									Halaman tidak ditemukan
								</h2>
								<p className="text-xl text-gray-600 mb-8">
									Halaman yang Anda cari tidak ditemukan. Silakan cek kembali URL yang Anda masukkan.
								</p>
								<Link href="/">
									<Button>Kembali</Button>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
