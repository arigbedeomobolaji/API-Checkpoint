/* eslint-disable react/prop-types */
export default function User({
	name,
	email,
	address,
	website,
	phone,
	company,
}) {
	const { street, city, suite } = address;
	return (
		<div className="max-w-[400px] h-[330px] bg-white shadow-2xl rounded-xl overflow-hidden m-5 relative">
			<div className="flex justify-between h-full">
				<div className="w-full flex items-center justify-evenly z-10 gap-10">
					<div className="text-black mr-5">
						<img
							src="https://img.freepik.com/premium-vector/branding-identity-corporate-s-logo-vector-design_460848-13952.jpg?size=626&ext=jpg&ga=GA1.1.567223693.1687376094&semt=ais"
							alt="Logo"
							className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-full"
						/>
						<p className="rotate-45 text-center md:rotate-0 font-mono font-bold text-[18px] whitespace-pre-wrap">
							{company.name.split("-")[0]}
						</p>
					</div>
					<div className="text-white text-center mr-5">
						<h1 className="font-extrabold text-[20px]">{name}</h1>
						<p className="text-[13px] text-medium">{website}</p>
						<br />
						<br />
						<p className="text-gray-400">{phone.split(" ")[0]}</p>
						<p className="text-gray-400">{email}</p>
						<p className="text-gray-400 text-xs">
							{street}, {suite}
						</p>
						<p className="text-gray-400">{city}</p>
					</div>
				</div>
				<div className="w-0 h-full border-l-[50px] border-l-transparent border-t-[30px] border-t-transparent border-r-[300px] border-r-black border-b-[300px] border-b-black absolute top-0 bottom-0 -right-20"></div>
			</div>
		</div>
	);
}
// l
