import {
    Tr,
    Td, ButtonGroup,
} from '@chakra-ui/react'
import DeleteButton from "./DeleteButton";

interface TBodyRowProps {
    id: number,
    name: string,
    type: string,
    city: string,
    address: string,
    mail: string
}
const TBodyRow = ({id, name, type, city, address, mail} : TBodyRowProps) => {
//     todo : méthodes modification et suppression
// todo: boutons crayon et poubelle
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{type}</Td>
            <Td>{city}</Td>
            <Td>{address}</Td>
            {/* <Td>{mail}</Td> */}
            <Td>
                <ButtonGroup gap={1}>
                    <button>Modifier</button>
                    <DeleteButton
                        id={id}
                    />
                </ButtonGroup>
            </Td>
        </Tr>
    )
}
export default TBodyRow;