import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Card, CardMedia, Grid2, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import AppConsts from "../library/AppConsts";
import OMiXSpinner from "../layout/OMiXSpinner";
import CountryViewModel from "../models/CountryViewModel";

const Countries = () => {
    const[isLoading, setIsLoading] = useState<boolean>(false);
    const[countries, setCountries] = useState<CountryViewModel[]>([]);
    const[searchCountries, setSearchCountries] = useState<CountryViewModel[]>([]);

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = async() => {
        setIsLoading(true);
        var url = AppConsts.FlagExplorerAPI + "Countries";
        await axios.get(url)
            .then((respose) => {
                setIsLoading(false);
                setCountries(respose.data);
                setSearchCountries(respose.data);
            }).catch((ex) => {
                setIsLoading(false);
                toast.error(ex);
            });
    }

    const CountrySearch = (value: string) => {
        let filtered = countries.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        setSearchCountries(filtered);
    }

    return (
        <div className="container-fluid px-4">
            {
                isLoading ?
                <OMiXSpinner /> :
                <div style={{textAlign:"center", margin:"2%"}}>
                    <TextField variant="standard" label="Country Search" className="search-textbox" onChange={(event) => CountrySearch(event.target.value)} />
                    <Grid2 container spacing={2}>
                        {searchCountries.map((country => {
                            return (
                                <Grid2 size={3}>
                                    <Link to="/details" state={{name: country.name}}>
                                        <Card>
                                            <CardMedia sx={{height:{lg:260, md:200, sm:140, xs:80}}} image={country.flag} />
                                        </Card>
                                    </Link>
                                    <h3>{country.name}</h3>
                                </Grid2>
                            )
                        }))}
                    </Grid2>
                </div>
            }
        </div>
    )
}

export default Countries