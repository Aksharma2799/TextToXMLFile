const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

// Read the text file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    // Process the text data
    const lines = data.split('\n');
    
    // Create XML structure
    const root = xmlbuilder.create('root');
    
    lines.forEach((line, index) => {
        root.ele('line', { number: index + 1 }, line);
    });
    
    const xmlString = root.end({ pretty: true });
    
    // Write XML to file
    fs.writeFile('output.xml', xmlString, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('XML file has been saved!');
    });
});
