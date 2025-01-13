const http = require('http');

// Define the domain to forward to
const TARGET_DOMAIN = 'https://epsilon.arcisai.io'; // Replace with the actual target domain

// Create the server
const server = http.createServer((req, res) => {
  // Log the incoming request
  console.log(`Incoming request: ${req.method} ${req.url}`);

  // Forward the request to the target domain
  const forwardUrl = `${TARGET_DOMAIN}${req.url}`;
  console.log(`Forwarding to: ${forwardUrl}`);

  res.writeHead(301, { Location: forwardUrl });
  res.end();
});

// Define the port to listen on
const PORT = 80; // Change to 443 for HTTPS (or use 3000 for local testing)

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running and forwarding requests to ${TARGET_DOMAIN} on port ${PORT}`);
});
