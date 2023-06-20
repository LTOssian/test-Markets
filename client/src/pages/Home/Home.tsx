import './Home.css';
// import {useState} from "react";
import SimpleTable from "../../components/SimpleTable/SimpleTable";

const Home = () => {
    // const [cityFilter, setCityFilter] = useState<string>('');
    // const [fieldFilter, setFieldFilter] = useState<string>('');



    return (
        <div className={"Home"}>
            <SimpleTable
                // fieldFilter={fieldFilter}
                // cityFilter={cityFilter}
                description={"Table sourcing every market"}
            />
        </div>
    )
}

export default Home;