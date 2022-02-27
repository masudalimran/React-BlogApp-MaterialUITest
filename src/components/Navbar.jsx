import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Badge,
  Grid,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DrawerComponent from "./DrawerComponent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Styles ============================================================================================================================================================
const styles = {
  menus: { mx: 3, cursor: "pointer", textTransform: "uppercase" },
};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const openMenu = Boolean(anchorEl);

  const handleCategoryDropdown = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCategoryDropdownClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "navy" }}>
        <Toolbar>
          {matches && (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          )}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton>
                <CardGiftcardIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
            {!matches && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography sx={styles.menus}>Home</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.menus}>Brand</Typography>
                  </Grid>

                  {/* Modal Usage */}
                  <Grid item>
                    <Button
                      variant="outlined"
                      sx={
                        (styles.menus,
                        {
                          backgroundColor: "white",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "orange",
                          },
                        })
                      }
                      aria-controls="category-menu"
                      aria-haspopup="true"
                      aria-expanded={openMenu ? "true" : undefined}
                      onClick={handleCategoryDropdown}
                    >
                      Categories
                    </Button>
                    <Menu
                      id="category-menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleCategoryDropdownClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleCategoryDropdownClose}>
                        Men
                      </MenuItem>
                      <MenuItem onClick={handleCategoryDropdownClose}>
                        Women
                      </MenuItem>
                      <MenuItem onClick={handleCategoryDropdownClose}>
                        Phone
                      </MenuItem>
                      <MenuItem onClick={handleCategoryDropdownClose}>
                        Laptops
                      </MenuItem>
                      <MenuItem onClick={handleCategoryDropdownClose}>
                        Accessories
                      </MenuItem>
                    </Menu>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.menus}>Contact</Typography>
                  </Grid>
                  <Grid item>
                    <Link href="data-grid" underline="none" color="inherit">
                      <Typography sx={styles.menus}>DataGrid</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid item>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  backgroundColor: "purple",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Account
              </Button>
              <IconButton>
                <Badge badgeContent={4} color="error">
                  <ShoppingBagIcon fontSize="medium" sx={{ color: "white" }} />
                </Badge>
              </IconButton>
              {matches && (
                <IconButton>
                  <MenuIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                    onClick={() => setOpenDrawer(true)}
                  />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
