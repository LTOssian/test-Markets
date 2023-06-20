import {Button} from "@chakra-ui/react";
import penIcon from '../../assets/pen.svg';

function UpdateButton () {
    return (
        <Button colorScheme='yellow'>
            <img src={penIcon} alt={"Pen Icon"} className={"penIcon"}/>
        </Button>
    )
}

export default UpdateButton;