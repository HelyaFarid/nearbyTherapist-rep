import * as React from "react";
import { List } from "@material-ui/core";
import Item from "./ListItem";

export default function ItemsList(props) {
  console.log("List-", props);
  const Items = props.properties.map((p, i) => {
    return <Item {...p} key={i} />;
  });
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Items}
    </List>
  );
}
