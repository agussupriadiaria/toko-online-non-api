import { PRODUCT_DATA } from "./data/products";
import "./AppFont.css";
import { useState } from "react";
import ModalTest1 from "./components/ModalTest";

function App() {
  const products = PRODUCT_DATA;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="font-katalog display-4 fw-bold text-center">
          Katalog Product Shopee
        </h1>
      </header>

      <search className="row justify-content-center mb-4">
        <div className="col-md-6 d-flex gap-1">
          <input
            className="form-control shadow-lg"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-success" onClick={handleSearch}>
            Cari
          </button>
        </div>
        <div>
          {searchQuery && (
            <p>
              Berikut hasil pencarian dari: <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>
      </search>

      <div className="row g-4">
        {filteredProduct.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card h-100 shadow-lg">
              <img
                className="card-img-top"
                src={product.images[0].src}
                alt={product.name}
              />
              <div className="card-body text-center">
                <h4>{product.name}</h4>
                <h5 className="text-success">
                  Rp {parseInt(product.price).toLocaleString("id-ID")}
                </h5>
                <button
                  className="btn btn-info w-100 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modaltesting1"
                  onClick={() => setSelectedProduct(product)}
                >
                  Detail Produk
                </button>
                <a
                  className="btn btn-success w-100"
                  href={product.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Order Sekarang
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalTest1 data={selectedProduct} />
    </div>
  );
}

export default App;
