import type React from "react";

const Loader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-[60vh]">
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white" />
		</div>
	);
};

export default Loader;
