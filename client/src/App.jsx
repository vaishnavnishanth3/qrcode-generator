import { useState } from "react";
import "./App.css";

import { baseURL } from "./configs/config.js";
function App() {
    const [url, setUrl] = useState("");

    const handleGetQR = async () => {
        try {
            const response = await fetch(`${baseURL}/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url }),
            });
            const data = await response.json();
            if (data.qrCode) {
                document.getElementById(
                    "qr-space"
                ).innerHTML = `<img src="${data.qrCode}" alt="QR Code" />`;
                alert("QR code generated successfully!");
            } else {
                alert("Failed to generate QR code.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while generating the QR code.");
        }
    };
    return (
        <>
            <label>Enter the url: </label>
            <input
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button
                onClick={() => {
                    handleGetQR();
                }}
            >
                Get QR
            </button>
            <div id='qr-space' />
        </>
    );
}

export default App;
