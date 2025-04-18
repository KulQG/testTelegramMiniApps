import "./App.css";

function App() {
  return (
    <div style={{ whiteSpace: "pre" }}>
      initData: {window.Telegram.WebApp.initData || "not found"}
    </div>
  );
}

export default App;
