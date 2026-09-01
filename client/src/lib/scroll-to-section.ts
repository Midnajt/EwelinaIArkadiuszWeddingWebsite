const CARD_BREAKPOINT = "(min-width: 768px)";

/** Maps a nav hash to the element that should sit under the sticky bar. */
export function resolveScrollTargetId(hash: string): string {
  const id = hash.replace(/^#/, "");
  if (id === "slub" || id === "wesele") {
    const twoColumns = window.matchMedia(CARD_BREAKPOINT).matches;
    if (twoColumns) return "slub-tresc";
    return id === "wesele" ? "wesele" : "karta-slub";
  }
  return id;
}

export function scrollToNavHash(hash: string) {
  if (!hash.startsWith("#") || hash.startsWith("#/")) return;
  const el = document.getElementById(resolveScrollTargetId(hash));
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function goToNavHash(hash: string) {
  if (!hash.startsWith("#") || hash.startsWith("#/")) return;
  scrollToNavHash(hash);
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
