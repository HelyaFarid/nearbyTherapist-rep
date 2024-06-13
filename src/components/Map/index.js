import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import clsx from "clsx";
import MapGL, { Marker } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import List from "../List";

export default function Map(props) {
  const theme = useTheme();

  const style = {
    padding: "10px",
    color: "#fff",
    cursor: "default",
    background: "#1978c8",
    borderRadius: "50%"
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    },
    fixedHeight: {
      height: 500
    }
  }));

  const classes = useStyles(theme);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [viewport, setViewport] = useState({
    latitude: -33.8688,
    longitude: 151.2093,
    zoom: 10
  });

  const [currentTherapist, setCurrentTherapist] = useState(props.properties[0]);

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={fixedHeightPaper}>
            <MapGL
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/light-v9"
              accessToken="pk.eyJ1IjoiaGVseWFmZmFyaWQiLCJhIjoiY2wyZTFwNmZzMHdscjNrbDZ3NDc2ZWo5NyJ9.KtfgmR6Gn30gNYRd4Vnf4A"
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={setViewport}
            >
              {props.properties.map((p, i) => {
                return (
                  <Marker
                    key={i}
                    latitude={p.geometry.location.lat}
                    longitude={p.geometry.location.lng}
                  >
                    <div
                      onClick={() => setCurrentTherapist(p)}
                      style={style}
                    ></div>
                  </Marker>
                );
              })}
            </MapGL>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <Paper className={fixedHeightPaper}>
            <List {...props} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
