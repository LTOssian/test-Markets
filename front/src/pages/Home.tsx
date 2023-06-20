import React, {useState} from "react";
import SimpleFilter from "../components/SimpleFilter/SimpleFilter";
import './Home.css';
import {useQuery} from "react-query";
import {marketService} from "../fetchers/market/market.service";
import SimpleTable from "../components/SimpleTable/SimpleTable";
import {useSelectFilter} from "../contexts/FilterContext";
import {PaginationProvider} from "../contexts/PaginationContext";
function Home() {
    const { selectedValue, setSelectedValue } = useSelectFilter(); // Access select filter context values and functions

    const {data, isSuccess, isLoading, isError} = useQuery("markets", () => {
            if (selectedValue) {
                console.log("markets within" + selectedValue)
                return undefined
            } else {
                return marketService.useMarkets();
            }
        }, {
        staleTime: 0
    });

    return (
        <div className={"homeLayout"}>
                <SimpleFilter/>
            <div>

            </div>
            {selectedValue}
        <PaginationProvider>
            <SimpleTable
                data={data}
            />
        </PaginationProvider>
        </div>
    )
}

export default Home