const apiUrl = process.env.API_URL;

const getHariIniData = async () => {
	const res = await fetch(`${apiUrl}/hari-libur/hari-ini`);
	const data = await res.json();
	return data.data;
};

export default async function Page() {
	const data = await getHariIniData();
	const isWork = !data.libur;
	return (
		<>
			<h2 className="text-xl text-gray-600 text-center">{data.hari_ini}</h2>
			<h1
				className={`text-5xl ${isWork ? "text-orange-600" : "text-red-600"} text-center`}
			>
				{isWork ? "Hari Kerja" : `Libur ${data.hari_libur}`}
			</h1>
			<h2 className="text-xl text-gray-600 text-center">{data.pesan}</h2>
		</>
	);
}
