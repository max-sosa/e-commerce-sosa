import { Spinner,Button } from "react-bootstrap"

const Bspinner = () =>{
    return(
        <div className="m-5">
        <Button className="fs-1" variant="success" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="lg"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
        </div>
    )
}

export default Bspinner;
