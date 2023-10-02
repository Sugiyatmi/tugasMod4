import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function App() {
  // State untuk menyimpan daftar item
  const [items, setItems] = useState([]);

  // State untuk menyimpan item baru yang akan ditambahkan
  const [newItem, setNewItem] = useState("");

  // Fungsi untuk menambah item baru ke dalam daftar
  const addItem = () => {
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Fungsi untuk menghapus item dari daftar
  const deleteItem = () => {
    setItems([]);
  };

  return (
    <div className="d-flex flex-column">
      <h1 className="h1 mb-4">Daftar Anggota Kelompok 5</h1>
      <div className="d-flex flex-column align-items-center">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Tambah Anggota"
          className="form-control mt-2 w-75"
        />
        <button
          onClick={addItem}
          className="btn btn-secondary w-25 mt-3"
          style={{
            fontFamily:
              "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          }}
        >
          Tambah
        </button>
        <button
          onClick={deleteItem}
          className="btn btn-danger w-25 mt-3"
          style={{
            fontFamily:
              "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          }}
        >
          Hapus
        </button>
      </div>
      <ol className="mt-5 h3 d-flex flex-column align-items-center">
        {items.map((item, index) => (
          <li key={index} className="h4">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
