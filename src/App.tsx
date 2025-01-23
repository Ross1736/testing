function App(): JSX.Element {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Bienvenido a TechVision</h1>
      <p style={styles.description}>
        En <strong>TechVision</strong>, exploramos el futuro de la tecnología y
        la innovación. Únete a nosotros para descubrir las últimas tendencias,
        herramientas y soluciones que están transformando el mundo. ¡El futuro
        está aquí, y comienza contigo!
      </p>
      <button style={styles.button}>Explorar Más</button>
    </div>
  );
}

// Estilos en línea (puedes moverlos a un archivo CSS si lo prefieres)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    color: "#34495e",
    maxWidth: "600px",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default App;
