import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { scrollToNavHash } from "@/lib/scroll-to-section";

export type AppView = "home" | "rodo" | "privacy";

type HashContextValue = {
  view: AppView;
  section: string | null;
};

const HashContext = createContext<HashContextValue>({
  view: "home",
  section: null,
});

function parseHash(hash: string): HashContextValue {
  const raw = hash.replace(/^#/, "");
  if (raw === "/rodo" || raw === "rodo") return { view: "rodo", section: null };
  if (raw === "/polityka" || raw === "polityka" || raw === "/privacy") {
    return { view: "privacy", section: null };
  }
  return { view: "home", section: raw || null };
}

export function HashViewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<HashContextValue>(() =>
    parseHash(window.location.hash),
  );

  useEffect(() => {
    const onChange = () => setState(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    if (state.view !== "home") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    if (!state.section) return;
    const frame = window.requestAnimationFrame(() => {
      scrollToNavHash(`#${state.section}`);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [state]);

  const value = useMemo(() => state, [state]);

  return <HashContext.Provider value={value}>{children}</HashContext.Provider>;
}

export function useHashView() {
  return useContext(HashContext);
}
