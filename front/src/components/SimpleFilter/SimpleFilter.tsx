import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './SimpleFilter.css';
import {PlaceType} from "../../utils/place_type.enum";
import {CloseButton, filter, Select} from '@chakra-ui/react'
import {queryClient} from "../../App";
import {useSelectFilter} from "../../contexts/FilterContext";
import {QueryObserverResult, RefetchOptions, RefetchQueryFilters} from "react-query";
import {MarketDto} from "../../fetchers/market.dto";

interface SimpleFitler {
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<MarketDto, unknown>>
}
function SimpleFilter({refetch}: SimpleFitler) {

    const { selectedValue, setSelectedValue } = useSelectFilter();

    return (
        <div className={"simpleFilter"}>
            <Select
                placeholder='Filtrer par domaine'
                size='lg'
                value={selectedValue}
                onChange={ async (e) => {
                    await setSelectedValue(e.target.value);
                    await refetch()
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