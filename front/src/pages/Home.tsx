import React from "react";
import SimpleFilter from "../components/SimpleFilter/SimpleFilter";
import './Home.css';
import {useQuery} from "react-query";
import {marketService} from "../fetchers/market/market.service";
import SimpleTable from "../components/SimpleTable/SimpleTable";
import {useSelectFilter} from "../contexts/FilterContext";
import {fieldService} from "../fetchers/field/field.service";
function Home() {
    const { selectedValue } = useSelectFilter();

    const {data, refetch, isLoading} = useQuery("markets",
        () => {
            if (selectedValue) {
                return fieldService.useField(selectedValue);
            } else {
                return marketService.useMarkets();
            }
        }, {
        staleTime: 0
    });

    return (
        <div className={"Home"}>
            <div className={"headerLayout"}>
                <SimpleFilter
                    refetch={refetch}
                />
            </div>
            <SimpleTable
                data={data}
            />
        </div>
    )
}

export default Home