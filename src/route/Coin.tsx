import {Link, useParams} from "react-router-dom";
import {Container} from "@mantine/core";

function Coin() {
    const coinId = useParams();
    console.log(coinId)
    return (<Container style={{marginBottom: 10, paddingTop: 15, display: "inline-block", margin: 20}} sx={(theme) => ({
        fontFamily: 'Titan One',
        color: theme.colors.indigo[5],
        height: 50,
        borderRadius: 20,
        width: 250,
        fontSize: 30,

    })}>{coinId.id}</Container>)
}

export default Coin