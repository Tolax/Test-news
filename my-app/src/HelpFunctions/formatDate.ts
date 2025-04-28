export function formatDate(dateString: any): { day: string; month: string; year: number } {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en", { month: "short" });
    const year = date.getFullYear();
  
    return { day, month, year };
  }
  
  export function capitalize(word: string): string {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  export function highlightKeywordsInText(text: string, keywords: string[]) {
    if (!keywords.length) return text;
  
    const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")})`, "gi");
  
    return text.replace(regex, (match) => {
      return `<span style="background-color: #1e90ff; padding: 2px 4px; border-radius: 4px; color: white; margin: 0 2px;">${match}</span>`;
    });
  }
  
  export function getDisplayedText(highlights: string[], showFullText: boolean) {
    if (showFullText) {
      return highlights.join(" "); 
    }
    return highlights.slice(0, 1).join(" ") + "...";
  }