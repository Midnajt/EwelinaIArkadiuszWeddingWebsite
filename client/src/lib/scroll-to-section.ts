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

function stickyBarHeight(): number {
  const bar = document.querySelector("#top .sticky");
  return bar instanceof HTMLElement ? bar.getBoundingClientRect().height : 0;
}

/** Layout position, ignoring the heading's entrance shift. */
function layoutTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent instanceof HTMLElement ? node.offsetParent : null;
  }
  return top;
}

/** Prefer this block's own title so it sits flush under the sticky bar. */
function scrollTarget(el: HTMLElement): HTMLElement {
  const heading = el.querySelector(":scope > [data-section-heading], :scope > * > [data-section-heading]");
  return heading instanceof HTMLElement ? heading : el;
}

export function scrollToNavHash(hash: string) {
  if (!hash.startsWith("#") || hash.startsWith("#/")) return;
  const el = document.getElementById(resolveScrollTargetId(hash));
  if (!el) return;
  const target = scrollTarget(el);
  const top = layoutTop(target) - stickyBarHeight();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
}

export function goToNavHash(hash: string) {
  if (!hash.startsWith("#") || hash.startsWith("#/")) return;
  scrollToNavHash(hash);
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
