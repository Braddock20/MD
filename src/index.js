const jsonData = {
  "name": "My Channels",
  "updated": "2026-01-16",
  "channels": [
    { "id": 1, "name": "Channel One", "url": "https://example.com/stream1.m3u8" },
    { "id": 2, "name": "Channel Two", "url": "https://example.com/stream2.m3u8" }
    // ... your full JSON here
  ]
};

export default {
  async fetch() {
    return new Response(JSON.stringify(jsonData), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
