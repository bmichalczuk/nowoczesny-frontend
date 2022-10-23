import { StoreApiResponse } from "../pages/products"

export const Product = ({
    title,
    rating, 
    image,
    description
} : StoreApiResponse) => {
    console.log(image)
    return (<li>
        <div className="font-bold text-2xl">{title}</div>
        <img className="border-4 border-orange-700 w-auto" src={image} alt={title} />
        <div>{description}</div>
        <div className="text-red-400">rating: {rating.rate}</div>

    </li>)
}