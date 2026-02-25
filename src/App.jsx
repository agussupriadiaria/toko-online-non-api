import { useState } from "react";
import ModalTest from "./components/ModalTest";
import { PRODUCT_DATA } from "./data/products";

function App() {
  const [products] = useState(PRODUCT_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = () => setSearchQuery(searchTerm);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Katalog Produk</h1>
      </header>

      {/* Search Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 d-flex gap-2">
          <input
            className="form-control"
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Cari
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.images[0].src}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-success">
                  Rp {parseInt(product.price).toLocaleString("id-ID")}
                </p>
                <button
                  className="btn btn-info w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#modaltesting1"
                  onClick={() => setSelectedProduct(product)}
                >
                  Detail Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalTest data={selectedProduct} />
    </div>
  );
}

export default App;
