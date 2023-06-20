import './SimpleTable.css';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer
} from '@chakra-ui/react'
import {MarketDto} from "../../fetchers/market.dto";
import SimpleTableRow from "../SimpleTableRow/SimpleTableRow";
import {usePagination} from "../../contexts/PaginationContext";
import SimplePagination from "../SimplePagination/SimplePagination";
import React from "react";
interface SimpleTableProps {
    data: MarketDto | undefined
}
function SimpleTable({ data }: SimpleTableProps) {
    const { currentPage, } = usePagination();

    const rowQuantity = data?.data.length;
    const pageQuantity = rowQuantity ? Math.round(rowQuantity / 15) : 1
    return (
        <div >
            <p className={"resultText"}>
                {rowQuantity} results <span>({pageQuantity == 1 ? pageQuantity + " page" : pageQuantity + " pages"})</span>
            </p>
            <SimplePagination
                maxPage={pageQuantity}
            />
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
                            data?.data.slice((currentPage-1)*20,currentPage*20).map(market => (
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