import React, { useState } from "react"
import { Images } from "../API"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import screen from "./images/screen.png"

const useStyles = makeStyles({
    root: {
        height: "700px",
    },
    media: {
        height: "620px",
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        position: "relative"
    },
    showtitle: {
        textAlign: "start",
        fontSize: "18px",
        marginRight: "30px",
        color: "#124A60"
    },
    stars: {
        fontSize: "18px",
        padding: "8px",
        border: "1px solid #DAA520",
        borderRadius: "12px",
        color: "#124A60"
    },
    hideOverview: {
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        textAlign: "justify",
        transform: "translateY(100%)",
    },
    showOverview: {
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        textAlign: "justify",
        transform: "translateY(0%)",
    },

});

const ShowsList = ({
    name, poster_path, overview, vote_average
}) => {
    const [selected, setSelected] = useState(false)
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => { setSelected(!selected) }}>
                <CardMedia
                    className={classes.media}
                    image={ poster_path ? Images + poster_path : screen }
                    title="Poster"
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.showtitle} variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.stars} variant="h5" component="h2">
                        {vote_average}
                    </Typography>
                    <div className={selected ? classes.showOverview : classes.hideOverview}>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ShowsList
