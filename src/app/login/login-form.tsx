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
		<div>
			<h2 className="text-md text-gray-500 text-center mb-4">
				Akses Kontributor
			</h2>

			<div className="mt-4 text-center text-sm">
				<div className="grid gap-6">
					<div className="flex flex-col gap-4">
						<GoogleSignInButton />
						<INApasButton />
					</div>
				</div>
			</div>
		</div>
	);
}

import { signIn } from "../../../auth";

function GoogleSignInButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google", { redirectTo: "/kontributor" });
			}}
		>
			<Button variant="outline" className="w-full shadow-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="120"
					height="120"
					viewBox="0 0 48 48"
				>
					<title>Google Logo</title>
					<path
						fill="#FFC107"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					/>
					<path
						fill="#FF3D00"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					/>
					<path
						fill="#4CAF50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					/>
					<path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					/>
				</svg>
				Masuk dengan Google
			</Button>
		</form>
	);
}

function INApasButton() {
	return (
		<>
			<Button variant="outline" className="w-full shadow-sm" disabled>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>INApas Logo</title>
					<g clip-path="url(#clip0_2075_20983)">
						<path d="M32 0H0V32H32V0Z" fill="#CC1515" />
						<path
							d="M8.02867 16.3744C7.72147 16.2912 7.41426 16.2432 7.11346 16.2432H7.10706C7.07186 16.2432 7.03987 16.2368 7.01107 16.2272C7.00467 16.2272 7.00466 16.224 7.00146 16.2208V23.3632H11.6383V20.9248C11.6383 18.8096 10.2271 16.928 8.17906 16.4096C8.13106 16.3968 8.07987 16.384 8.02867 16.3744Z"
							fill="white"
						/>
						<path
							d="M7.00146 15.6448L7.00786 15.6416C7.46546 15.632 7.90707 15.5616 8.32947 15.44C10.3039 14.8704 11.6383 13.024 11.6383 10.9664V4H7.00146V15.6448Z"
							fill="white"
						/>
						<path
							d="M21.7214 8.9088C19.4846 8.9088 17.955 10.192 17.3566 11.5008L17.2222 9.264H13.1582V10.9792C13.1582 13.1072 14.5854 14.9952 16.6526 15.504C16.9054 15.5648 17.1646 15.6096 17.427 15.632C17.555 13.36 18.5342 12.1792 20.4126 12.1792C22.4318 12.1792 23.4142 13.5424 23.4142 16.16V16.432C23.4142 19.0208 22.4318 20.4128 20.4126 20.4128C18.3934 20.4128 17.411 19.0208 17.411 16.432V16.2528C17.235 16.2688 17.0558 16.3008 16.8766 16.3424C16.8574 16.3456 16.8382 16.3488 16.819 16.3552C16.8158 16.3552 16.8094 16.3552 16.8062 16.3584C16.7518 16.3712 16.7006 16.3808 16.6494 16.3936C14.5854 16.9056 13.1582 18.7904 13.1582 20.9184V27.9936H17.5486V21.4208C18.2846 22.7296 19.7854 23.712 21.747 23.712C25.539 23.712 27.8302 20.6016 27.8302 16.4288V16.1568C27.8302 12.0128 25.539 8.9024 21.7214 8.9024V8.9088Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2075_20983">
							<rect width="32" height="32" fill="white" />
						</clipPath>
					</defs>
				</svg>
				Masuk dengan INApas
			</Button>
		</>
	);
}
