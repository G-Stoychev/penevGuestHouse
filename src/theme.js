const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");

if (
    storedTheme === "dark" ||
    (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    root.classList.add("dark");
}

export function toggleTheme() {
    root.classList.toggle("dark");

    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}
