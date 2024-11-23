import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route element={  //Uso isso para proteger a rota, passando um elemento JSX para verificar se o token é passado para poder ser direcionado para a rota
                <>
                    {/* Componente Header */}
                    <Header />
                    <ProtectedRouters />
                </>
            }>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="*" element={<h1>Página não encontrada (404) </h1>} />
        </Routes>
    )
}

const ProtectedRouters = () => {
    const token = localStorage.getItem('token')
    return token ? <Outlet /> : <Navigate to="/signin" />
}