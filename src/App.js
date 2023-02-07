import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Scenes/Global/Topbar";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import Sidebar from "./Scenes/Global/Sidebar";
import Team from "./Scenes/Team/Team";
import Contacts from "./Scenes/Contacts/Contacts";
import Invoices from "./Scenes/Invoices/Invoices";
import Form from "./Scenes/Form/Form";
import Calendar from "./Scenes/Calendar/Calendar";
import Faq from "./Scenes/FAQ/Faq";
import Bar from "./Scenes/Bar/Bar";
import Pie from "./Scenes/Pie/Pie";
import Line from "./Scenes/Line/Line";
import Geography from "./Scenes/Geography/Geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
