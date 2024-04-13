// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";
// import LoginPage from "../pages/Login";

// function ProtectedRoute({ children }) {
//   const [session, setSession] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//       console.log(session, 
//         "From Protected Route")
//     });
//   }, []);

//   if (!session) { 
//     console.log("no session")
    
//     // navigate("/login");
//     return <LoginPage />;
//     // return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;
