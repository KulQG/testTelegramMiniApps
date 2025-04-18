import "./App.css";

function App() {
  return (
    <div style={{ whiteSpace: "pre" }}>
      initData: {window.Telegram.WebApp.initDataUnsafe.id || "not found"}
    </div>
  );
}

export default App;
