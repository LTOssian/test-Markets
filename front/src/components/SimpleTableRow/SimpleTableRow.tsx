import {
    Tr,
    Td, ButtonGroup,
} from '@chakra-ui/react'
import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import UpdateButton from "../UpdateButton/UpdateButton";

interface MarketProps {
    id: number,
    name: string,
    type: string,
    city: string,
    address: string,
    mail: string
}

function SimpleTableRow ({id, name, type, city, address, mail}: MarketProps) {
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{type}</Td>
            <Td>{city}</Td>
            <Td>{address}</Td>
            {/* <Td>{mail}</Td> */}
            <Td>
                <ButtonGroup gap={1}>
                    <UpdateButton

                    />
                    <DeleteButton
                        rowId={id}
                    />
                </ButtonGroup>
            </Td>
        </Tr>
    )
}

export default SimpleTableRow;