"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Esta data simula lo que vendrá de Sanity CMS cuando conectemos la base de datos
const mockProducts = [
  { id: 1, name: "Porsche 911 GT3 RS", price: 35.00, stock: 1, category: "basic", img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Nissan Skyline GT-R R34", price: 65.00, stock: 2, category: "premium", img: "https://images.unsplash.com/photo-1590362891991-f200c659c403?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Lamborghini Aventador SVJ", price: 90.00, stock: 0, category: "minigt", img: "https://images.unsplash.com/photo-1616423641403-68d74bf0800b?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Garage Diorama 1:64", price: 120.00, stock: 3, category: "diorama", img: "https://images.unsplash.com/photo-1610444315264-b586d34b4c73?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Ford Mustang Boss 302", price: 25.00, stock: 4, category: "basic", img: "https://images.unsplash.com/photo-1594921919864-16a7516d2109?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Bugatti Chiron Pur Sport", price: 95.00, stock: 1, category: "minigt", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=600&auto=format&fit=crop" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = "51929150727";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = filter === "all" ? mockProducts : mockProducts.filter(p => p.category === filter);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar glass" style={{
          background: scrolled ? 'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.75)',
          boxShadow: scrolled ? '0 4px 15px rgba(0,0,0,0.6)' : 'none'
      }}>
        <a href="#inicio" className="nav-brand">
          {/* Al copiar logo.png dentro de la carpeta 'public' de next.js, funcionará aquí */}
          <img src="/logo.png" alt="RonWheels Logo" className="nav-logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#politicas">Políticas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <header id="inicio" className="hero">
        <h1>Colecciona tu pasión.<br />Acelera tu colección.</h1>
        <p>Pasión por los autos a escala. Llevamos el automovilismo a tus manos. Ejemplares en su máxima expresión de detalle y realismo.</p>
        <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
      </header>

      {/* Propuesta de Valor */}
      <section id="propuesta" className="propuesta-valor">
        <div className="propuesta-container">
          <h2 className="propuesta-title">Propuesta de valor</h2>
          <div className="propuesta-content">
            <div className="propuesta-image">
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop" alt="Auto Porsche en carrera" />
            </div>
            <div className="propuesta-text">
              <p>Hace poco más de un año, RonWheels nació como un simple hobby, impulsado por la pasión y la emoción que se siente al encontrar una pieza única. Con el tiempo, ese hobby se transformó en algo mucho más grande. Hoy, RonWheels busca transmitir esa misma pasión a cada persona que ama coleccionar, descubrir y apreciar el significado detrás de cada pieza.</p>
              <p className="propuesta-subtitle"><strong>Nuestra propuesta es simple...</strong></p>
              <div className="propuesta-box">
                Acompañarte en esa búsqueda, haciendo que cada colección crezca con identidad y sentimiento.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="catalog">
        <h2 className="section-title">Nuestro Catálogo</h2>
        
        <div className="filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todos</button>
          <button className={`filter-btn ${filter === 'basic' ? 'active' : ''}`} onClick={() => setFilter('basic')}>Hot Wheels Básicos</button>
          <button className={`filter-btn ${filter === 'premium' ? 'active' : ''}`} onClick={() => setFilter('premium')}>Hot Wheels Premium</button>
          <button className={`filter-btn ${filter === 'minigt' ? 'active' : ''}`} onClick={() => setFilter('minigt')}>Mini GT / Marcas Premium</button>
          <button className={`filter-btn ${filter === 'diorama' ? 'active' : ''}`} onClick={() => setFilter('diorama')}>Dioramas</button>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => {
            const message = `Hola, estoy interesado en el modelo ${product.name} que cuesta S/ ${product.price.toFixed(2)}.`;
            const encodedMessage = encodeURIComponent(message);
            const wppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            return (
              <article key={product.id} className="product-card" style={{ animation: 'fadeIn 0.5s ease forwards' }}>
                <img src={product.img} alt={product.name} className="product-img" />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <span className="product-price">S/ {product.price.toFixed(2)}</span>
                  {product.stock > 0 ? (
                    <span className="product-stock">Stock: {product.stock}</span>
                  ) : (
                    <span className="product-stock agotado">Agotado</span>
                  )}
                  <a href={wppUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> Comprar
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Políticas */}
      <section id="politicas" className="policies">
        <h2 className="section-title">POLÍTICAS DE VENTA</h2>
        <div className="policies-grid">
          <div className="policy-card">
            <h3>Separación de piezas</h3>
            <p>Separar con <strong>S/.5</strong> para compradores nuevos. Si no se concreta la compra, NO hay reclamos NI devoluciones.</p>
          </div>
          <div className="policy-card">
            <h3>Entrega inmediata</h3>
            <p>Toda pieza en este catálogo está lista para la <strong>entrega inmediata</strong>. Queda en la responsabilidad de la persona el día de recojo.</p>
          </div>
          <div className="policy-card">
            <h3>Ventas a pedido /<br/>Preventas</h3>
            <p>Todo pedido en preventa está sujeta a <strong>variabilidad</strong> en la fecha de entrega <em>(puede tardar 1 mes o más)</em>.<br/><br/><strong>PROHIBIDO</strong> <em>cancelar pedidos de preventas.</em></p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <footer id="contacto" className="footer">
        <div className="contact-container">
          <h2>Ronald<br/>Yopla</h2>
          <div className="role">Administrador</div>
          
          <div className="contact-info">
            <a href="https://instagram.com/Ron.wheels" target="_blank" rel="noreferrer" className="contact-item">
              <i className="fab fa-instagram"></i> <u>Ron.wheels</u>
            </a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" className="contact-item">
              <i className="fab fa-whatsapp"></i> <u>929 150 727</u>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
