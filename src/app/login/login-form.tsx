import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
	return (
		<Card className="mx-auto max-w-sm min-w-[250px] md:min-w-[400px]">
			<CardHeader>
				<CardTitle className="text-xl">WikiASN Kontributor</CardTitle>
				<CardDescription>Silahkan masukkan menggunakan akun</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					{/* <div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link href="#" className="ml-auto inline-block text-sm underline">
								Forgot your password?
							</Link>
						</div>
						<Input id="password" type="password" required />
					</div> */}
					<Button className="w-full">Masuk dengan INApas</Button>
					<Button className="w-full">Masuk dengan Google</Button>
				</div>
				<div className="mt-4 text-center text-sm">
					{/* Don&apos;t have an account?{" "}
					<Link href="#" className="underline">
						Sign up
					</Link> */}
				</div>
			</CardContent>
		</Card>
	);
}
