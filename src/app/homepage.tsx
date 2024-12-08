import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function WikiAsnHomepage() {
	return (
		<div className="min-h-screen bg-gray-50/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white">
			<div className="container mx-auto px-4">
				<nav className="flex justify-end gap-4 py-4 text-sm">
					{/* <select className="bg-transparent">
						<option>Choose Language</option>
						<option>English</option>
						<option>Español</option>
						<option>Français</option>
					</select> */}
					<Link href="#" className="text-gray-600 hover:text-gray-900">
						Kontributor
					</Link>
					<Link href="#" className="text-gray-600 hover:text-gray-900">
						Login
					</Link>
				</nav>

				<main className="mx-auto max-w-4xl py-12">
					<div className="text-center mb-16">
						<h1 className="text-5xl font-serif mb-1">WikiASN</h1>
						<p className="text-gray-600">Ensikolpedia Aparatur Sipil Negara</p>
					</div>

					<div className="flex flex-col items-center gap-8">
						<Image
							src="/garuda.png"
							alt="WikiASN"
							width={200}
							height={200}
							className="mb-4"
						/>

						{/* <div className="text-center mb-4">
							<p className="text-sm text-gray-600 mb-1">
								The Free Encyclopedia that Anyone Can Edit
							</p>
							<p className="text-sm text-blue-600">
								6,146,273 Articles in English
							</p>
						</div> */}

						<div className="w-full max-w-2xl relative">
							<Input
								type="search"
								placeholder="Cari apa yang ingin kamu ketahui"
								className="w-full pl-4 pr-12 py-6 text-lg rounded-full border-gray-200"
							/>
							<Button
								size="icon"
								className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
							>
								<Search className="h-5 w-5" />
							</Button>
						</div>

						<Card className="w-full max-w-2xl p-4 mt-8">
							<div className="flex gap-4">
								<Image
									src="/placeholder.svg?height=80&width=80"
									alt="Featured Article Image"
									width={80}
									height={80}
									className="rounded-lg"
								/>
								<div>
									<h2 className="font-medium mb-2">
										From today's featured article
									</h2>
									<p className="text-sm text-gray-600 mb-2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										diam magna, efficitur in felis sed, eleifend tempor velit
										sed diam...
									</p>
									<Link
										href="#"
										className="text-sm text-blue-600 hover:underline"
									>
										Read more...
									</Link>
								</div>
							</div>
						</Card>
					</div>
				</main>
			</div>
		</div>
	);
}
