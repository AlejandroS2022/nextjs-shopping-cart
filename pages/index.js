import Head from 'next/head'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import PageHeader from "./components/PageHeader";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import Bienvenida from "./components/Bienvenida";
import Tienda from "./components/Tienda";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito"

export default function Home() {
  return (
    <Router>
      <Head>
        <title>Next JS - Carrito de compras</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <Nav>
        <NavLink to="/">
          <NavItem> Inicio</NavItem>
        </NavLink>
        <NavLink to="/productos">
          <NavItem> Productos</NavItem>
        </NavLink>
        <NavLink to="/carrito">
          <NavItem> Carrito</NavItem>
        </NavLink>
      </Nav>

      <main>
        <Routes>
          <Route exact path="/" element={<Bienvenida />} />
          <Route path="/productos" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
    </Router>
  )
}
