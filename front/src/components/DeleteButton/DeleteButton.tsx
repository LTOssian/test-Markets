import {Button} from "@chakra-ui/react";
import trashIcon from '../../assets/trash.svg';
import { useMutation } from "react-query";
import {marketService} from "../../fetchers/market/market.service";
import {queryClient} from "../../App";

interface DeleteButtonProps {
    rowId: number;
}


function DeleteButton ({ rowId }: DeleteButtonProps) {
    const rowDeletion = useMutation(() => marketService.useDelete(rowId));
    return (
        <Button colorScheme={"red"} onClick={async () => {
            await rowDeletion.mutateAsync();
            await queryClient.invalidateQueries('markets');
        }}>
            <img src={trashIcon} alt={"TrashCan Icon"} className={"trashIcon"}/>
        </Button>
    )
}

export default DeleteButton;