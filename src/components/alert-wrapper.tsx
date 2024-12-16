"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertWrapperProps {
	children: React.ReactNode;
}

export function AlertWrapper({ children }: AlertWrapperProps) {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return <></>;
	}

	return (
		<div className="relative max-w-4xl">
			<button
				onClick={() => setIsVisible(false)}
				className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
				aria-label="Close alert"
				type="button"
			>
				<X className="h-4 w-4" />
			</button>
			{children}
		</div>
	);
}
