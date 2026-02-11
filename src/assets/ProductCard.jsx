export const ProductCard = ({item})=>{
    return(
        <>
            <div className="border p-4 rounded-lg shadow-md w-64">
                <img src={item.image} alt=""/>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h4>${item.price}</h4>
            </div>
        </>
    )
}