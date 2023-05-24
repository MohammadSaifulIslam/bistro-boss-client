const FoodCard = ({food}) => {
    const { image, name, price, recipe }= food;


    return (
        <div className="text-center relative">
            <img src={image} alt="food image" className="w-full object-contain" />
            <p className="absolute top-5 right-5 bg-slate-900 py-1 px-3 text-white font-semibold">{price}</p>
            <div className="py-8 px-10 bg-slate-50">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="mb-5 text-gray-600">{recipe}</p>
            <button className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;