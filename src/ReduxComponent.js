import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct, editProduct } from "../actions/ReduxAction";

class ReduxComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const { addProduct, removeProduct, editProduct } = this.props;
    var trList = products.map((product) => {
      return (
        <tr key={product.productId}>
          <td>{product.productId}</td>
          <td>
            <input
              type="text"
              onChange={(e) => editProduct(product.productId, e.target.value)}
              value={product.productName}
            />
          </td>
          <td>
            <button onClick={() => removeProduct(product.productId)}>
              Remove
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{trList}</tbody>
        </table>
        <br />
        <button onClick={() => addProduct()}>Create</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: () => dispatch(addProduct()),
  removeProduct: (productId) => dispatch(removeProduct(productId)),
  editProduct: (productId, productName) =>
    dispatch(editProduct(productId, productName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
