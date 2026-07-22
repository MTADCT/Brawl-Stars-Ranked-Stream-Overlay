const params = new URLSearchParams(window.location.search);
const PLAYER_TAG = params.get("tag") || "LQ0J0G028";

let updating = false;
let calls = 0;

async function updateElo() {
    calls++;
    console.log("updateElo called:", calls, new Date().toISOString());

    if (updating) {
        console.log("Skipped because already updating");
        return;
    }

    updating = true;

    try {
        console.log("Starting fetch...");

        const response = await fetch(
            'https://brawl-stars-elo-fetcher-production.up.railway.app/elo/${PLAYER_TAG}',
            { cache: "no-store" }
        );

        console.log("Fetch finished:", response.status);

    } catch (err) {
        console.error("Fetch failed:", err);
    } finally {
        updating = false;
    }
}

updateElo();

// TEMPORARILY DISABLE THE INTERVAL
// setInterval(updateElo, 30000);
