function ProductList({ products, onProductSelect }) {
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <input type="checkbox" onChange={() => onProductSelect(product.id)} />
            {product.name}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ProductList;
  