import {Title} from '@mantine/core';
import { Container } from '@mantine/core';
const data = [{
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
},
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "hex-hex",
        name: "HEX",
        symbol: "HEX",
        rank: 3,
        is_new: false,
        is_active: true,
        type: "token",
    },]
function Coins() {
    return (<div><Title order={1}style={{margin:20}} sx={(theme) => ({
            fontFamily:'Titan One',
            color: theme.colors.indigo[5],
            '&:hover': {
                backgroundColor: theme.colors.gray[1],
            },
        })} >Coin</Title>

            {data.map(data=> {
              return  <Container key={data.id} style={{marginBottom:10}} sx={(theme) => ({
                  fontFamily:'Titan One',
                  color: theme.colors.indigo[5],
                  height:50,
                  borderRadius:20,
                  width:250,
                  backgroundColor: "white",
                  '&:hover': {
                      backgroundColor: theme.colors.gray[1],
                  },
              })}>{"-> "}{data.name}</Container>
            })}</div>

    )
}

export default Coins