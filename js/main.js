import { initAuth } from "./firebase.js";
import { initUi } from "./ui.js";
import { initGame } from "./game.js";

initAuth();
initUi();
initGame();

if (new URLSearchParams(location.search).get("test") === "1") {
  import("./devmode.js").then((mod) => mod.initDevMode());
}
