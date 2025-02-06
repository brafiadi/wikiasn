"use client";

import { useState, useEffect } from "react";

interface PdfViewerProps {
	pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<div className="text-center text-xl font-semibold">
				Memuat dokumen ...
			</div>
		);
	}

	return (
		<div className="w-full h-screen">
			<iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
		</div>
	);
}
