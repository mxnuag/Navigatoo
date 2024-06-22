// server.js

const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

// Example data: Room codes and their corresponding locations
const roomLocations = {
    L001: 'Ground Floor, CSED Building',
    L002: 'Ground Floor, CSED Building',
    L003: 'Ground Floor, CSED Building',
    L004: 'Ground Floor, CSED Building',
    L005: 'Ground Floor, CSED Building',
    L006: 'Ground Floor, CSED Building',
    L007: 'Ground Floor, CSED Building',
    L008: 'Ground Floor, CSED Building',
    L009: 'Ground Floor, CSED Building',
    L101: 'Level 1, CSED Building',
    L102: 'Level 1, CSED Building',
    L103: 'Level 1, CSED Building',
    L104: 'Level 1, CSED Building',
    L105: 'Level 1, CSED Building',
    L106: 'Level 1, CSED Building',
    L107: 'Level 1, CSED Building',
    L108: 'Level 1, CSED Building',
    L109: 'Level 1, CSED Building',
    L201: 'Level 2, CSED Building',
    L202: 'Level 2, CSED Building',
    L203: 'Level 2, CSED Building',
    L204: 'Level 2, CSED Building',
    L205: 'Level 2, CSED Building',
    L206: 'Level 2, CSED Building',
    L207: 'Level 2, CSED Building',
    L208: 'Level 2, CSED Building',
    L209: 'Level 2, CSED Building',
    L301: 'Level 3, CSED Building',
    L302: 'Level 3, CSED Building',
    L303: 'Level 3, CSED Building',
    L304: 'Level 3, CSED Building',
    L305: 'Level 3, CSED Building',
    L306: 'Level 3, CSED Building',
    L307: 'Level 3, CSED Building',
    L308: 'Level 3, CSED Building',
    L309: 'Level 3, CSED Building',
    L401: 'Level 4, CSED Building',
    L402: 'Level 4, CSED Building',
    L403: 'Level 4, CSED Building',
    L404: 'Level 4, CSED Building',
    L405: 'Level 4, CSED Building',
    L406: 'Level 4, CSED Building',
    L407: 'Level 4, CSED Building',
    L408: 'Level 4, CSED Building',
    L409: 'Level 4, CSED Building',
};

// Middleware to parse JSON request body
app.use(express.json());

// Endpoint to handle GET requests for room locations
app.get('/get-location', (req, res) => {
    const roomCode = req.query.code;

    // Check if the room code exists in the roomLocations object
    if (roomLocations.hasOwnProperty(roomCode)) {
        res.status(200).json({ location: roomLocations[roomCode] });
    } else {
        res.status(404).json({ error: 'Room code not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
