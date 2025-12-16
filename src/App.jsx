import { MainPage } from "./pages/MainPage";
import { LanguageProvider } from "./i18n/LanguageContext";

//css
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <MainPage />
    </LanguageProvider>
  );
}

export default App;
