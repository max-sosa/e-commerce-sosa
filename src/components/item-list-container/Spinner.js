import { Spinner,Button } from "react-bootstrap"

const Bspinner = () =>{
    return(
        <Button variant="success" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    )
}

export default Bspinner;
