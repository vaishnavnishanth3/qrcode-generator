# QR Code Generator for URLs

A simple web application that allows users to input a URL and instantly generates a QR code image for it. Use this project to create shareable QR codes for any link.

## Features

- Enter a URL to generate its QR code image instantly
- QR code images
- Node.js/Express backend for QR creation API

## Table of Contents

- Features
- Installation
- Usage
- Tech Stack
- Example
- License

## Installation

1. Clone the repository:

```
git clone https://github.com/rsdevian/qrcode-generator
cd qrcode-generator
```

2. Install dependencies:

```
npm install
```

3. Start development servers:

```
cd server
node server.js # Start backend (Express)

cd client
npm run dev # Start frontend (React)
```

4. Visit the local host in your browser with your chosen port.

## Usage

- Enter the desired URL in the input field
- Click 'Generate QR Code'
- The QR image will appear instantly
- Download or save the QR image as needed

## Tech Stack

- React (frontend)
- Node.js/Express (backend)
- QR code generator library - `qrcode`
