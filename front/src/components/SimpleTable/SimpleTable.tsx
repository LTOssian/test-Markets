import './SimpleTable.css';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer
} from '@chakra-ui/react'
import {useQuery} from "react-query";
import {marketService} from "../../fetchers/market/market.service";
import {MarketDto} from "../../fetchers/market.dto";
import SimpleTableRow from "../SimpleTableRow/SimpleTableRow";
import {usePagination} from "../../contexts/PaginationContext";
interface SimpleTableProps {
    data: MarketDto | undefined
}
function SimpleTable({ data }: SimpleTableProps) {
    const { currentPage, setCurrentPage } = usePagination();

    return (
        <div >
            <p className={"resultText"}>
                {data?.data.length} results
            </p>
            <TableContainer className={"tableLayout"}>
                <Table variant={"simple"} size={"sm"}>
                    <TableCaption className={"tableDarkText"}> </TableCaption>
                    <Thead>
                        <Tr className={"TrLayout"}>
                            <Th>Nom</Th>
                            <Th>Type de commerce</Th>
                            <Th>Ville</Th>
                            <Th>Adresse</Th>
                             <Th>Mail</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody className={"tableDarkText"}>
                        {
                            data?.data.slice(currentPage-1,currentPage*20).map(market => (
                                    <SimpleTableRow
                                        key={market.id}
                                        id={market.id}
                                        name={market.etablissement}
                                        type={market.etablissement_type}
                                        city={market.location}
                                        address={market.address}
                                        mail={market.mail}
                                    />
                                )
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SimpleTable;