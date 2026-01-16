export default {
  async fetch(request) {
    // serve your JSON file from assets
    const data = await fetch(new URL("/index.json", request.url));
    return new Response(data.body, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
