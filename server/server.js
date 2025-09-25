import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import qrcode from "qrcode";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.post("/generate", async (req, res) => {
    const { url } = req.body;
    try {
        const qrCode = await qrcode.toDataURL(url);
        res.json({ qrCode });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
