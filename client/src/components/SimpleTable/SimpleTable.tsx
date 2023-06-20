import "./SimpleTable.css";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer, Skeleton, AlertDescription, Alert, AlertIcon, AlertTitle
} from '@chakra-ui/react'
import {useQuery} from "react-query";
import TBodyRow from "./components/TBodyRow";
import React, {useState} from "react";
import {marketService} from "../../services/Market/market.service";
interface SimpleTableProps {
    fieldFilter ?: string
    cityFilter ?: string
    description : string

}
const SimpleTable = ({fieldFilter, cityFilter, description}: SimpleTableProps) => {
    const [displayAlert, setDisplayAlert] = useState<boolean>(false);

    const handleAlert = () => {
        setDisplayAlert(true);
        setTimeout(() => {
            setDisplayAlert(false);
        }, 4000)
    }

    const { data, isLoading, isError, isSuccess } = useQuery(
        'markets',
        async () => {
            return await marketService.useMarkets().then(res => {
                handleAlert();
                return res;
            })
        },
        {
            staleTime: 12000000
        });

    if (isLoading) {
        return (
            <Skeleton />
        )
    }
    if (isError) {
        return displayAlert ? (
            <div className={"alertContainer tableDarkText"}>
                <Alert status='error' variant={"solid"}>
                    <AlertIcon/>
                    <AlertTitle>The data could not be loaded</AlertTitle>
                    <AlertDescription>Reload the page or contact support to fix the issue.</AlertDescription>
                </Alert>
            </div>
        ) : null
    }
    if (isSuccess) {
      console.log("ok ca fonctionne,")
    }

    return (
        <div className={"SimpleTable"}>
            {
                displayAlert ? (
                <div className={"alertContainer tableDarkText"}>
                    <Alert status='success' variant={"solid"}>
                        <AlertIcon />
                        <AlertTitle>Data loaded</AlertTitle>
                        <AlertDescription>Navigate through this beautiful data.</AlertDescription>
                    </Alert>
                </div>
                ) : null
            }
            <TableContainer
                
            >
                <Table variant={"simple"} size={"sm"}>
                    <TableCaption className={"tableDarkText"}> { description } </TableCaption>
                    <Thead>
                        <Tr className={"TrLayout"}>
                            <Th>Nom</Th>
                            <Th>Type de commerce</Th>
                            <Th>Ville</Th>
                            <Th>Adresse</Th>
                            {/* <Th>Mail</Th> */}
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody className={"tableDarkText"}>
                        {
                            data?.data.map(market => (
                                    <TBodyRow
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
                    <Tfoot>
                        <Tr>
                            <Th>Nom</Th>
                            <Th>Type de commerce</Th>
                            <Th>Ville</Th>
                            <Th>Adresse</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </div>

    )
}

export default SimpleTable
