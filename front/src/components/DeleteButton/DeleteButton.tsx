import {Button} from "@chakra-ui/react";
import trash from '../../assets/trash.svg';
import { useMutation } from "react-query";
import {marketService} from "../../fetchers/market/market.service";
import {queryClient} from "../../App";

interface DeleteButtonProps {
    rowId: number;
}


function DeleteButton ({ rowId }: DeleteButtonProps) {
    const {mutate: rowDeletion} = useMutation(() => {
        return marketService.useDelete(rowId)
    });

    return (
        <Button colorScheme={"red"} size={"sm"} onClick={async () => {
            rowDeletion()
            await queryClient.invalidateQueries('yourDataKey');
        }}>
            <img src={trash} alt={"TrashCan Icon"} />
        </Button>
    )
}