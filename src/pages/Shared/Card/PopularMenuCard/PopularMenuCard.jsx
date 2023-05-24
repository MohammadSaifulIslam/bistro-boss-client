const PopularMenuCard = ({menu}) => {
    const {image, name,price,recipe} = menu;
    return (
        <div className="flex gap-5 ">
            <img src={image} alt="food image" className="w-[118px] h-[104]" style={{borderRadius:' 0px 100px 100px 100px'}} />
            <div className="flex">
               <div>
               <h4 className="text-xl">{name} ---------------------</h4>
                <p>{recipe}</p>
               </div>
               <p className="text-xl text-secondary">${price}</p>

            </div>
        </div>
    );
};

export default PopularMenuCard;