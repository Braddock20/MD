export default {
  async fetch() {
    return new Response(
      JSON.stringify(
        await (await fetch(
          "https://raw.githubusercontent.com/Braddock20/MD/main/index.json"
        )).json()
      ),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
