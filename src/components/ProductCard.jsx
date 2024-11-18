
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-blue-600 font-bold mt-1">₹{price}</p>
      <button className="bg-blue-600 text-white w-full mt-2 py-1 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
