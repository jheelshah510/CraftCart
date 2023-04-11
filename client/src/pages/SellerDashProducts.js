import React, { useEffect, useState } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import SellerNavigation from "../components/SellerNavigation";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import EditProductModal from "../components/EditProductModal";

const SellerDashProducts = () => {
  const { sellerId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/product/seller/${sellerId}/products`)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [sellerId]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [isLoaded]);

  if (!isLoaded) {
    return <Loading />;
  }

  const modalShow = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p._id === updatedProduct._id ? updatedProduct : p
      )
    );
    setShowModal(false);
  };

  const handleCancelEdit = () => {
    setShowModal(false);
  };

  const handleProductDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:3030/product/delete/${id}`, sellerId)
        .then((response) => alert("Product deleted succesfully"));
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SellerNavigation />
      <div style={{ width: "100%", margin: "0%" }}>
        <table class="table">
          <thead class="table-secondary">
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                Your Products
              </th>
            </tr>
          </thead>
          <br />
          <thead class="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">
                Edit <FontAwesomeIcon icon={faPenToSquare} />
              </th>
              <th scope="col">
                Delete <FontAwesomeIcon icon={faTrash} />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th scope="row">{products.indexOf(product) + 1}</th>
                <td>{product.productName}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    onClick={() => {
                      modalShow(product);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    type="submit"
                    onClick={() => handleProductDelete(product._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div>
            <EditProductModal
              product={editingProduct}
              onCancel={handleCancelEdit}
              onSave={handleSaveProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashProducts;
