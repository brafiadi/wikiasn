"use client";
import type React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Loader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-[60vh]">
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray" />
		</div>
	);
};

export const MiniLoader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-[20px]">
			<div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray" />
		</div>
	);
};

export default Loader;

export function LoaderWithCountdown() {
	// const [countdown, setCountdown] = useState(3);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
	// 	}, 1000);

	// 	return () => clearInterval(timer);
	// }, []);

	return (
		<div className="space-y-2 text-center">
			<p className="text-gray-500">Sedang menyiapkan halaman kontributor</p>
			{/* <p className="text-gray-500">
				Anda akan diarahkan dalam... {countdown} detik
			</p> */}
			<div className="flex flex-col items-center justify-center p-2">
				<div className="relative w-8 h-8">
					{/* Track */}
					{/* <div className="absolute inset-0 border-[16px] border-[#E8EFFF] rounded-full"></div> */}
					{/* Spinner */}
					<div className="absolute inset-0 border-[4px] border-red-500 rounded-full border-t-transparent animate-spin" />
				</div>
			</div>
		</div>
	);
}
