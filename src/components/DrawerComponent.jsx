import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function DrawerComponent({ openDrawer, setOpenDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Brand</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem
          divider
          button
          onClick={() => setOpenDrawer(false)}
          sx={{ backgroundColor: "orange" }}
        >
          <ListItemIcon>
            <ListItemText>Categeries</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <Link href="data-grid" color="inherit" underline="none">
                Data Grid
              </Link>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}
