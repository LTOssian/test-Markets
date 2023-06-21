import React from 'react';
import './SimpleFilter.css';
import {PlaceType} from "../../utils/place_type.enum";
import {CloseButton, Select} from '@chakra-ui/react'
import {useSelectFilter} from "../../contexts/FilterContext";
import {QueryObserverResult, RefetchOptions, RefetchQueryFilters} from "react-query";
import {MarketDto} from "../../fetchers/market.dto";
import {usePagination} from "../../contexts/PaginationContext";

interface SimpleFitler {
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<MarketDto, unknown>>
}
function SimpleFilter({refetch}: SimpleFitler) {

    const { selectedValue, setSelectedValue } = useSelectFilter();
    const { setCurrentPage} = usePagination();
    return (
        <div className={"simpleFilter"}>
            <Select
                placeholder='Type de commerce'
                size='lg'
                value={selectedValue}
                onChange={ async (e) => {
                    await setSelectedValue(e.target.value);
                    await refetch()
                    setCurrentPage(1);
                }
            }>
                {
                    Object.values(PlaceType).map((type) => {
                        return (
                            <option value={type} key={type}>{type}</option>
                        )
                    })
                }
            </Select>
            {
                selectedValue ? (
                    <CloseButton
                        className={"closeBtn"}
                        size='lg'
                        onClick={ async () => {
                            await setSelectedValue("");
                            await refetch()
                        }
                    }/>
                ) : null
            }
        </div>
    )
}

export default SimpleFilter;