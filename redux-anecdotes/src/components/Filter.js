import { useDispatch } from "react-redux";
import { change } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const keyword = event.target.value
        dispatch(change(keyword))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter