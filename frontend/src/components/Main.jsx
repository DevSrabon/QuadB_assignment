import React, { useEffect, useState } from "react";

export const Main = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
  const interval = setInterval(() => {
    fetch("https://quad-b-assignment.vercel.app/tickers")
			.then((res) => res.json())
			.then((data) => {
				setData(data[0].tickers);
			});
    }, 100);
    return () => clearInterval(interval);
}, [])
  
  return (
		<div className="bg-dark" style={{ fontFamily: "sans-serif" }}>
			<div className="table-responsive">
				<table className="table text-white fw-bold fs-4 ">
					<thead className="text-secondary">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Platform</th>
							<th scope="col">Last</th>
							<th scope="col">Buy / Sell Price</th>
							<th scope="col">Volume</th>
							<th scope="col">base_unit</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data?.map((item, i) => (
								<tr
									key={item._id}
                  style={{
										backgroundColor: "#2e3241",
                    borderSpacing: "0 1em",
                    borderCollapse: "separate"
									}}>
									<td className="align-middle">{i + 1}</td>
									<td className="align-middle">{item.name}</td>
									<td className="align-middle">
										₹
										{item.last
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
											.split(".0")
											.join("")}
									</td>
									<td className="align-middle">
										₹
										{item.buy
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
											.split(".0")
											.join("")}{" "}
										/ ₹
										{item.sell
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
											.split(".0")
											.join("")}
									</td>
									<td className="align-middle">{item.volume}</td>
									<td className="align-middle">{item.base_unit}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
