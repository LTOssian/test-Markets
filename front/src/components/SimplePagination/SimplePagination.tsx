import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import {usePagination} from "../../contexts/PaginationContext";
import "./SimplePagination.css";
interface SimplePaginationProps {
    maxPage: number | undefined
}
function SimplePagination ({maxPage}: SimplePaginationProps) {
    const { currentPage, setCurrentPage} = usePagination();

    return (
        <div className={"simplePagination"}>
            <NumberInput defaultValue={1}
                         size='sm'
                         value={currentPage}
                         onChange={(value) => {
                             setCurrentPage(Number(value))
                         }}
                         min={1}
                         max={maxPage}
                         clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </div>
    )
}

export default SimplePagination