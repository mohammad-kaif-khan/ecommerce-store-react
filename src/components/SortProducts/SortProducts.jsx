import "./SortProducts.css";

function SortProducts({ sort, setSort }) {
  return (
    <select
      className="sort-products"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="">Sort By</option>

      <option value="low">
        Price : Low to High
      </option>

      <option value="high">
        Price : High to Low
      </option>

    </select>
  );
}

export default SortProducts;