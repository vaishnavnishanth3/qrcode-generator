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
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "2rem",
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    minWidth: "320px",
                    textAlign: "center",
                }}
            >
                <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>
                    QR Code Generator
                </h2>
                <label
                    htmlFor='url-input'
                    style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                    }}
                >
                    Enter the URL:
                </label>
                <input
                    id='url-input'
                    type='text'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder='https://example.com'
                    style={{
                        width: "100%",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        marginBottom: "1rem",
                    }}
                />
                <button
                    onClick={handleGetQR}
                    style={{
                        padding: "0.5rem 1.5rem",
                        borderRadius: "6px",
                        border: "none",
                        background: "#007bff",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: "1.5rem",
                    }}
                >
                    Get QR
                </button>
                <div id='qr-space' style={{ marginTop: "1.5rem" }} />
            </div>
        </div>
    );
}

export default App;
