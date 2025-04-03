// Asegura que la página se cargue desde arriba
if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual"
  
    // Scroll al inicio cuando la página se carga
    window.onload = () => {
      window.scrollTo(0, 0)
    }
  }
  
  