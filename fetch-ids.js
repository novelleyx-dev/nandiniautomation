const https = require('https');

function fetchID(query, name) {
  https.get(`https://unsplash.com/s/photos/${query}`, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      // Look for href="/photos/something-ID"
      const regex = /href="\/photos\/[a-zA-Z0-9-]+-([a-zA-Z0-9]{10,})"/g;
      const matches = [];
      let match;
      while ((match = regex.exec(data)) !== null) {
        matches.push(match[1]);
      }
      console.log(`${name}: ${matches.slice(0, 5).join(', ')}`);
    });
  });
}

fetchID('oil-refinery', 'Oil');
fetchID('water-treatment', 'Water');
fetchID('pharmaceutical', 'Pharma');
fetchID('food-factory', 'Food');
