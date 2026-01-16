export default {
  async fetch(request) {
    try {
      // fetch your JSON file from Worker assets
      const res = await fetch(new URL("/index.json", request.url));
      return new Response(res.body, {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      // fallback for errors
      return new Response(JSON.stringify({ error: "JSON not found or Worker failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
