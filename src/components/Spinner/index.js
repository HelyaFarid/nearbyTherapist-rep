import './style.css'
import { Spinner } from "reactstrap";

const GrowSpinner = () => {
    return (
        <Spinner
            color="success"
            size=""
            className="loader"
        >
            Loading...
        </Spinner>
    )
}
export default GrowSpinner;