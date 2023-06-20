import {Button} from "@chakra-ui/react";
import trash from './assets/trash.svg';
import { useMutation } from "react-query";
import { marketService } from "../../../services/Market/market.service";

interface DeleteProps {
    id: number;
}

const DeleteButton = ({id}: DeleteProps) => {

    const {mutate: deleteRow} = useMutation(() => marketService.useDelete(id), {
        onSuccess(data, variables, context) {
            
        },
    })

    return (
        <div className={"deleteButton"}>
            <Button colorScheme={"red"} onClick={() => deleteRow()} size={"sm"}>
                <img className={"trashIcon"} src={trash} alt={"Trash Icon"} />
            </Button>
        </div>
    )
}

export default DeleteButton;