import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-link";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

export default function NavBar() {
  const [state, setState] = React.useState(false);
  return (
    <>
      <div id="main">
        <div className="left-container">
          <div className="left-container-child">Logo</div>
        </div>
        <div className="right-container">
          <div className="right-container-child">
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                About
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Contact
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/sponsors">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Sponsors
              </Button>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="/team">
              <Button
                variant="text"
                sx={{
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                  color: "white",
                  fontSize: "1rem",
                  // under
                }}
              >
                Team
              </Button>
            </Link> */}
          </div>
          <div className="right-container-hamburger">
            <MenuIcon onClick={() => setState(true)} />
          </div>

          <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
            <div id="drawer">
              <div className="drawer-header">sparsh</div>
              <div className="drawer-links">
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button
                    variant="text"
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                      color: "white",
                      fontSize: "1rem",
                      // under
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <Button
                    variant="text"
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                      color: "white",
                      fontSize: "1rem",
                      // under
                    }}
                  >
                    About
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                      color: "white",
                      fontSize: "1rem",
                      // under
                    }}
                  >
                    Contact
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/sponsors">
                  <Button
                    variant="text"
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                      color: "white",
                      fontSize: "1rem",
                      // under
                    }}
                  >
                    Sponsors
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/team">
                  <Button
                    variant="text"
                    sx={{
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                      },
                      color: "white",
                      fontSize: "1rem",
                      // under
                    }}
                  >
                    Team
                  </Button>
                </Link>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}

