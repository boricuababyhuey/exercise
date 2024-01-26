// src/functions/proxy.js
export function handler(event) {
    const { anything } = event.params;
    const proxyUrl = `https://www.google.com/search?q=${anything}`;
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ proxyUrl }),
    };
  }
  