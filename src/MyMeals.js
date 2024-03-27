import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    console.log(text)
    return (
        <div>
            <p> {text} </p>
            <CiEdit onClick={updatingInInput}/>
            <AiFillDelete onClick={deleteMeal}/>
        </div>
    )
} 