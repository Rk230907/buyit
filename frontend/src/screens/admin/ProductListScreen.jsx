import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productApiSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate";

const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  });

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const deleteHandler = async (orderId) => {
    if (
      window.confirm(
        "Are You Sure? Once the product is deleted cannot be retrived back!"
      )
    ) {
      try {
        await deleteProduct(orderId);
        refetch();
        toast.success("Product Deleted Successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct();
        refetch();
        toast.success("Product created successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="m-3 btn-sm" onClick={createProductHandler}>
            <FaEdit />
            Create Product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button
                        type="button"
                        variant="light"
                        className="btn-sm mx-2"
                      >
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      type="button"
                      variant="danger"
                      className="btn-sm mx-2"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash color="white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
