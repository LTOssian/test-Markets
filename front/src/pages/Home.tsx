import React, {useState} from "react";
import SimpleFilter from "../components/SimpleFilter/SimpleFilter";
import './Home.css';
function Home() {
    const [fieldFilter, setFieldFilter] = useState<string>("")

    return (
        <div className={"homeLayout"}>
                <SimpleFilter
                    onChange={setFieldFilter}
                    filterValue={fieldFilter}
                />
            {fieldFilter}
        </div>
    )
}

export default Home