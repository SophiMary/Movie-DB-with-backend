import React, { useEffect, useState } from "react";
import {
    FeaturedTVShows, SearchTVShows
} from "./../API"
import ShowsList from "./ShowsList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#124A60",
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        boxShadow: "none",
    },
    header: {
        borderBottom: "2px solid #124A60"
    },
    searchSection: {
        margin: "20px 10px",
    },
    search: {
        width: "95%",
        padding: "12px",
        border: "1px solid #DAA520",
        borderRadius: "15px",
        outline: "none",
    }
}));

const TVShows = () => {
    const [tvShows, setTVShows] = useState([]);
    const [inputValue, setInputValue] = useState("")
    const classes = useStyles();

    useEffect(() => {
        fetch(FeaturedTVShows)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTVShows(data.results);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            fetch(SearchTVShows + inputValue)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setTVShows(data.results);
                });
            setInputValue('');
        }
    };

    return (
        <>
            <div className={classes.heading}>
                <Typography className={classes.header} variant="h4"> Popular TV Shows </Typography>
            </div>
            <div className={classes.searchSection}>
                <form onSubmit={handleSubmit}>
                    <input className={classes.search} value={inputValue}
                        type="text" placeholder="Search Your TV Shows ..."
                        onChange={(e) => setInputValue(e.target.value)} />
                </form>
            </div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {tvShows.length > 0 && tvShows.map((tvShow) =>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <ShowsList key={tvShow.id} {...tvShow} />
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </div>
        </>
    )
}

export default TVShows