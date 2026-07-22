const params = new URLSearchParams(window.location.search);
const PLAYER_TAG = params.get("tag") || "LQ0J0G028";

let updating = false;
let calls = 0;

async function updateElo() {
    if (updating) {
        console.log("Skipped: update already in progress");
        return;
    }

    updating = true;
    calls++;

    console.log(`updateElo #${calls}`);

    try {
        const response = await fetch(
            `https://brawl-stars-elo-fetcher-production.up.railway.app/elo/${PLAYER_TAG}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("currentElo").textContent =
            data.current ?? "N/A";

        document.getElementById("highestElo").textContent =
            data.highest ?? "N/A";

        document.getElementById("currentRank").textContent =
            data.currentRank ?? "UNKNOWN";

        document.getElementById("highestRank").textContent =
            data.highestRank ?? "UNKNOWN";

        document.getElementById("currentBadge").src =
            data.currentBadgeUrl ?? "";

        document.getElementById("highestBadge").src =
            data.highestBadgeUrl ?? "";

    } catch (err) {
        console.error("Fetch failed:", err);

        document.getElementById("currentElo").textContent = "ERR";
        document.getElementById("highestElo").textContent = "ERR";

        document.getElementById("currentRank").textContent = "ERROR";
        document.getElementById("highestRank").textContent = "ERROR";
    } finally {
        updating = false;
    }
}

// One request immediately.
updateElo();

// Then exactly one request every 30 seconds.
setInterval(updateElo, 30000);
