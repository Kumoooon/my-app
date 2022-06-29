import {Link, useLocation, useParams} from "react-router-dom";
import {Container, Loader} from "@mantine/core";
import {useEffect, useState} from "react";
import coins from "./Coins";

interface Iname {
    name: string;
}
interface InfoData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}
interface PriceData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}
function Coin() {
    const location = useLocation();
    const name = location.state as Iname;
    const coinId = useParams();

    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState<InfoData>();
    const [price, setPrice] = useState<PriceData>();
    useEffect(() => {
        (async () => {
                const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId.id}`)).json();
                const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId.id}`)).json();
                console.log(priceData)
                console.log(infoData)
                setPrice(priceData)
                setInfo(infoData)
                // const priceData = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId.id}`);
                // const Price = await priceData.json();
                // const value = Price.quotes.USD.price
                setLoading(false)

            }


        )()
    }, [coinId])
    return (
        <Container style={{marginBottom: 10, paddingTop: 15, display: "inline-block", margin: 20}} sx={(theme) => ({
            fontFamily: 'Titan One',
            color: theme.colors.indigo[5],
            height: 50,
            borderRadius: 20,
            width: 250,
            fontSize: 30,
        })}><>{name.name}{loading ? <Loader size="lg" style={{marginLeft: 0, display: "block", marginTop: 30}}
                                            variant="dots"/> : <span>1</span>}</>
        </Container>)
}

export default Coin