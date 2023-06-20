import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './SimpleFilter.css';
import {PlaceType} from "../../utils/place_type.enum";
import {CloseButton, filter, Select} from '@chakra-ui/react'
import {queryClient} from "../../App";
import {useSelectFilter} from "../../contexts/FilterContext";

function SimpleFilter() {

    const { selectedValue, setSelectedValue } = useSelectFilter();


    return (
        <div className={"simpleFilter"}>
            <Select
                placeholder='Filtrer par domaine'
                size='lg'
                value={selectedValue}
                onChange={async (e) => {
                    setSelectedValue(e.target.value)
                }}
            >
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
                    <CloseButton size='lg' onClick={async () => {
                        setSelectedValue("");
                        await queryClient.invalidateQueries('markets');
                    }}/>
                ) : null
            }
        </div>
    )
}

export default SimpleFilter;