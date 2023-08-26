import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {

  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/editProfile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
            <Route path="/createPost" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="/videoconferencing" element={<LobbyScreen />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;