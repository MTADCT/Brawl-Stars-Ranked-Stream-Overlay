# Brawl Stars Ranked Stream Overlay

A clean, lightweight OBS browser overlay that displays a player's **Current Ranked Elo**, **Highest Ranked Elo**, **Rank Names**, and **Rank Badges** in real time.

Designed for streamers who want to show their ranked progress live without manually updating anything.

---

## Features

- 🎯 Live Current Ranked Elo
- 🏆 Live Highest Ranked Elo
- 🛡️ Current & Highest Rank Badges
- 📈 Current & Highest Rank Names
- 🔄 Automatically updates every 30 seconds
- 🖥️ OBS Browser Source compatible
- 🌐 Works directly from GitHub Pages
- ⚡ Lightweight (HTML/CSS/JavaScript only)

---

## Usage

Simply open the overlay using your Brawl Stars player tag:

```
https://mtadct.github.io/Brawl-Stars-Ranked-Stream-Overlay/?tag=YOUR_PLAYER_TAG
```

Example:

```
https://mtadct.github.io/Brawl-Stars-Ranked-Stream-Overlay/?tag=LQ0J0G028
```

Do **not** include the `#` in your player tag.
I REPEAT DO **NOT** INCLUDE `#` IN YOUR PLAYER TAG I WILL PERSONALLY CATCH YOU AND TURN YOU INTO STEW!!!

---

## OBS Setup

1. Open **OBS Studio**
2. Add a **Browser Source**
3. Paste your overlay URL:
   ```
   https://mtadct.github.io/Brawl-Stars-Ranked-Stream-Overlay/?tag=YOUR_PLAYER_TAG
   ```
4. Set the Browser Source size (recommended):

| Width | Height |
|-------:|-------:|
| 650 | 180 |

5. Edit the Browser Source size if that one doesn't fit (heh)

6. Enable **Refresh browser when scene becomes active** (optional if you DON'T have that option, otherwise just enable it...trust me)

The overlay updates automatically every 30 seconds (do let me know if I should decrease that).

---

## Data Source

This overlay retrieves player data through a custom backend that parses publicly available ranked information from Brawlace.

Displayed information includes:

- Current Ranked Elo
- Highest Ranked Elo

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/MTADCT/Brawl-Stars-Ranked-Stream-Overlay.git
```

Open `index.html` in your browser.

No build tools or dependencies are required, yeah I'm that nice.

---

## Customization

Feel free to modify:

- Colors
- Fonts
- Border radius
- Badge sizes
- Update interval
- Layout

Everything is written in plain HTML, CSS and JavaScript.

---

## Roadmap

- [ ] Animated elo changes
- [ ] Multiple overlay themes
- [ ] Transparent background theme
- [ ] Automatic badge sizing
- [ ] Better error handling (seriously it's bad lol)

---

## Contributing

Pull requests and suggestions are welcome...greatly appreciated actually.

If you encounter a bug or have a feature request, feel free to open an issue, or DM me on my socials (@mtadct on all socials)

---

## Disclaimer

This project is a fan-made tool and is **not affiliated with, endorsed by, or sponsored by Supercell**.

Brawl Stars and all related assets are trademarks of Supercell.

---

## License

MIT License or whatever lmao

Feel free to use, modify, and share this project, if you claim it as your own I will leak your IP address.
