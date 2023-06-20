import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './SimpleFilter.css';
import {PlaceType} from "../../utils/place_type.enum";
import {CloseButton, filter, Select} from '@chakra-ui/react'

interface SimpleFilterProps {
    onChange: Dispatch<SetStateAction<string>>;
    filterValue: string;
}
function SimpleFilter({onChange, filterValue}: SimpleFilterProps) {
    return (
        <div className={"simpleFilter"}>
            <Select
                placeholder='Filtrer par domaine'
                size='lg'
                value={filterValue}
                onChange={(e) => {
                    onChange(e.target.value)
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
                filterValue ? (
                    <CloseButton size='lg' onClick={() => {
                        onChange("");
                    }}/>
                ) : null
            }
        </div>
    )
}

export default SimpleFilter;