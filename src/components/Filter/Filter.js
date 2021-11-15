import React, {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';



const Filter = ({searchName , setRating}) => {
console.log(searchName)

const [text, setText] = useState('')


const handleSubmit=(e)=>{
    e.preventDefault()
    searchName(text)

}
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <input type='text' name='' value={text}  placeholder='filter name' onChange={(e)=> setText(e.target.value)} />
            <button  > search </button>
            </form>
            <StarRatingComponent  editing={true} name={'rate'} onStarClick={(nextValue, prevValue, name) => setRating(nextValue)}  />
        </div>
    )
}

export default Filter
