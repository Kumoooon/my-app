import {Title} from '@mantine/core';
import {Container, Loader} from '@mantine/core';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

interface Icoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coin, setCoin] = useState<Icoin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoin(json.slice(0, 100)

            )
        })()
    }, [])
    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin');
            const json = await response.json();
            console.log(json)
            setLoading(false)
        })()
    }, [])
    return (<div><Title order={1} style={{margin: 20}} sx={(theme) => ({
            fontFamily: 'Titan One',
            color: theme.colors.indigo[5],

        })}>Coin</Title>

            {loading===true?<Loader size="lg" style={{marginLeft:30}} variant="dots" />
            : <div>{coin.map(coin => {
                 return (<Container key={coin.id} style={{marginBottom: 10, paddingTop: 15}} sx={(theme) => ({
                    fontFamily: 'Titan One',
                    color: theme.colors.indigo[5],
                    height: 50,
                    borderRadius: 20,
                    width: 300,
                    backgroundColor: "white",
                    fontSize: 30,
                    '&:hover': {
                        backgroundColor: theme.colors.gray[1],
                    },
                })}><Link //to={`/${coin.id}`}
                     to={{pathname:`/${coin.id}`}} state={{name:coin.name}}
                          style={{textDecoration: "none", color: "inherit"}}><img style={{height:35, marginRight:15, display:"inline-block"}} src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} /><div style={{fontSize:25,display:"inline-block", position:"absolute", fontFamily:"sans-serif", color:"black", marginTop:5}}>{coin.name}</div></Link></Container>)
            })}</div>}</div>

    )
}

export default Coins