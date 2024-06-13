import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Divider
} from "@material-ui/core";
import { Rating } from "react-simple-star-rating";

export default function Item({
  name,
  address,
  city,
  state,
  zipcode,
  subtypes,
  photos_sample,
  rating
}) {
  console.log("ListItem-", zipcode);
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={photos_sample[0].photo_url} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {subtypes}
              </Typography>
              <Typography>
                Address:{address}, {city} {state} {zipcode}
              </Typography>
              <Typography>
                <Rating initialValue={rating} size="15" readonly="true" />
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
