export const CourseCard = ({item})=>{
    return(
        <>
            <div className="border p-4 rounded-lg shadow-md w-64 m-8">
                <img src={item.image} alt=""/>
                <h2 className="font-bold bg-gray-300">{item.name}</h2>
                <p>{item.description}</p>
                <h3>Total Weeks:{item.totaWeeks}</h3>
                <h3 className="font-bold bg-green-100">Lessons:{item.lessons}</h3>
                <h2 className="font-bold bg-green-100">Instructor:{item.instructor}</h2>
            </div>
        </>
    )
}