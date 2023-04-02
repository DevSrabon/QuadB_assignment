const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Server is running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sajc8ea.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

async function run() {
	try {
		const collection = client.db("QuadB_Db").collection("tickers");
		setInterval(async () => {
			const response = await fetch("https://api.wazirx.com/api/v2/tickers");
			const json = await response.json();
			const top10 = Object.entries(json)
				.sort(([, a], [, b]) => b.last - a.last)
				.slice(0, 10);
			const collectionData = await collection.find({}).toArray();

			if (collectionData.length < 1 || collectionData.length < 10) {
				await collection.insertMany(
					top10.map(([name, data]) => ({
						name,
						last: data.last,
						buy: data.buy,
						sell: data.sell,
						volume: data.volume,
						base_unit: data.base_unit,
						id: "1",
					}))
				);
			}
		}, 10000);
		setInterval(() => {
			collection.deleteMany({ id: "1" });
		}, 9999);

		app.get("/tickers", async (req, res) => {
			const tickers = await collection.find().toArray();
			res.json(tickers);
		});
	} finally {
	}
}
run();

app.listen(port, () => {
	console.log(`Local server running on ${port}`);
});
