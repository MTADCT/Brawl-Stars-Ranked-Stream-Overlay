const params = new URLSearchParams(window.location.search);

const PLAYER_TAG = params.get("tag") || "LQ0J0G028";

let updating = false;

async function updateElo() {
    if (updating) return;
    updating = true;

    try {
        const response = await fetch(
            `https://brawl-stars-elo-fetcher-czynf0wsyfds.mtadct.deno.net/elo/${PLAYER_TAG}`,
            { cache: "no-store" }
        );

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

    } catch (error) {
        console.error(error);

        document.getElementById("currentElo").textContent = "ERR";
        document.getElementById("highestElo").textContent = "ERR";

        document.getElementById("currentRank").textContent = "ERROR";
        document.getElementById("highestRank").textContent = "ERROR";
    } finally {
        updating = false;
    }
}

updateElo();

setInterval(updateElo, 30000);
