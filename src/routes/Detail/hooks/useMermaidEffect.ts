import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    })
    if (!document) return
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid")
    if (!elements) return

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const graphDefinition = element.textContent || "";
      mermaid.render("mermaid" + i, graphDefinition, element);
    }
    
  }, [])

  return
}

export default useMermaidEffect
