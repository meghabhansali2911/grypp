import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Link,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
  FavoriteBorder as FavoriteIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "white",
      }}
    >
      {/* Top Bar */}
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 0,
          py: 0,
          minHeight: "auto",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" title="CarDekho.com">
            <img
              src="/travel-logo.png"
              alt="CarDekho.com"
              width="174"
              height="42"
              loading="eager"
            />
          </Link>
        </Box>

        {/* Search Area */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            mx: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search or Ask a Question"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "20px",
                backgroundColor: "#f5f5f5",
                height: "40px",
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            variant="outlined"
            size="small"
          />
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Select
            value="English"
            variant="standard"
            disableUnderline
            IconComponent={ArrowDownIcon}
            sx={{
              "& .MuiSelect-select": {
                paddingRight: "24px !important",
              },
            }}
          >
            <MenuItem value="English">English</MenuItem>
            {/* <MenuItem value="Hindi">Hindi</MenuItem> */}
          </Select>

          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>

          <Button
            variant="outlined"
            startIcon={<PersonIcon />}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              padding: "6px 16px",
              borderColor: "#e0e0e0",
              color: "text.primary",
            }}
          >
            Login / Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
