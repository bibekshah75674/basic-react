import { useParams } from "react-router-dom"

export const CourseDetailPage = ()=>{
    const {id} = useParams();
    console.log(id);
    return(
        <>
        <h1>This is detail page of course no {id}</h1>
        </>
    )
}