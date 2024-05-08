import "./App.css";
import Landing from "./components/Landing";
import { Navigate, Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";
import JoinCommunity from "./pages/JoinCommunity";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import DashboardLayout from "./components/DashboardLayout";
import Donations from "./pages/Donations";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import Test from "./components/Test";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className='min-h-screen w-full'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/test' element={<Test />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/join' element={<JoinCommunity />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path="/login" element={session !== null ? <LoginPage /> : <Navigate to="/dashboard" replace />} /> */}

        <Route
          path='/dashboard'
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path='/donations'
          element={
            <DashboardLayout>
              <Donations />
            </DashboardLayout>
          }
        />
        <Route
          path='/members'
          element={
            <DashboardLayout>
              <Members />
            </DashboardLayout>
          }
        />
        <Route
          path='/reports'
          element={
            <DashboardLayout>
              <Reports />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
