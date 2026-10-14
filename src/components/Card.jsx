const Card = ({ title, image, rate, category, price }) => {
  return (
    <div className="bg-white rounded p-4">
                <div className="relative bg-[#2f256b]">
                    <img src={image} alt="" className="w-full h-55 object-contain" />
                    <div className="p-2 bg-[#f42e1f] text-white font-bold absolute top-3 right-3 rounded">{rate}</div>
                </div>
                <div className="pt-4">
                <h2 className="font-semibold text-xl line-clamp-1">{title}</h2>
                <h6 className="font bold">{category.toUpperCase()}</h6>
                <h6 className="text-right text-2xl">{price.toFixed(2)}</h6>
                </div>
            </div>
  )
}

export default Card;