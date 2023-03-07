import IconAdm from "@mui/icons-material/AdminPanelSettingsOutlined";
import IconLeft from "@mui/icons-material/ChevronLeft";
import IconRight from "@mui/icons-material/ChevronRight";
import IconExpandLess from "@mui/icons-material/ExpandLess";
import IconExpandMore from "@mui/icons-material/ExpandMore";
import IconSrm from "@mui/icons-material/HandshakeOutlined";
import IconSettings from "@mui/icons-material/SettingsOutlined";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import React, { ReactEventHandler, ReactNode } from "react";
import Search from "../../Atoms/Inputs/Search";
import { menuADM, menuSRM } from "./settings";
import * as S from "./styles";

export default function SideBar() {
  const speed = 300;
  const [collapsed, setCollapsed] = React.useState<boolean>(true);
  const [area, setArea] = React.useState<string>("");
  const [menuOpen, setMenuOpen] = React.useState<any>({});

  const menuStructure = (items: any) => {
    return items.map((item: any) => (
      <>
        <ListItemButton
          key={item.id}
          sx={{
            borderRadius: 1,
            padding: 2,
            paddingTop: 1,
            paddingBottom: 1,
          }}
          onClick={() => {
            if (item.submenu) {
              setMenuOpen((prevState: any) => ({
                ...prevState,
                [item.id]: !menuOpen[item.id],
              }));
            }
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ width: "100%" }}
            noWrap
          >
            {item.text}
          </Typography>
          {item.submenu ? (
            menuOpen[item.id] ? (
              <IconExpandLess />
            ) : (
              <IconExpandMore />
            )
          ) : (
            <></>
          )}
        </ListItemButton>
        {item.submenu && (
          <Collapse
            in={menuOpen[item.id]}
            collapsedSize={0}
            timeout={speed / 2}
            sx={{ marginLeft: 1.5 }}
          >
            {menuStructure(item.submenu)}
          </Collapse>
        )}
      </>
    ));
  };

  const renderAreaButton = (text: string, icon: ReactNode) => {
    return (
      <>
        <ButtonBase
          onClick={(e) => {
            setArea(area === text ? "" : text);
            setCollapsed(false);
          }}
          sx={{
            backgroundColor: area === text ? "primary.100" : "transparent",
            borderRadius: 1,
            padding: 2,
            paddingTop: 1,
            paddingBottom: 1,
            width: "100%",
            borderBottom: 2,
            borderColor: area === text ? "primary.main" : "transparent",
            transition: `all ${speed / 2}ms`,
            "&:hover": {
              backgroundColor: area === text ? "primary.100" : "#f0f0f0",
            },
          }}
        >
          <Stack
            direction={collapsed ? "column" : "row"}
            sx={{ width: "100%" }}
            alignItems="center"
            gap={collapsed ? 0 : 1}
            justifyContent={collapsed ? "center" : "flex-start"}
          >
            {icon}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: collapsed ? 11 : 14 }}
              noWrap
            >
              {text}
            </Typography>
          </Stack>
        </ButtonBase>
      </>
    );
  };

  const renderListItem = (
    text: string,
    onClick: ReactEventHandler,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode
  ) => {
    return (
      <ListItemButton
        onClick={onClick}
        sx={{
          borderRadius: 1,
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          transition: `all ${speed / 2}ms`,
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        {leftIcon}
        <Collapse
          in={!collapsed}
          orientation="horizontal"
          collapsedSize={0}
          timeout={speed / 2}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: 1 }}
            noWrap
          >
            {text}
          </Typography>
        </Collapse>
        {rightIcon}
      </ListItemButton>
    );
  };

  return (
    <>
      <Box
        sx={{
          minWidth: collapsed ? 80 : 240,
          transition: `all ${speed}ms`,
          backgroundColor: "#ffffff",
          height: "100vh",
          boxShadow: 5,
          zIndex: 10,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            flexBasis: 0,
            minHeight: 80,
          }}
        >
        </Stack>

        <Stack
          gap={0.5}
          sx={{
            width: "100%",
            flexBasis: "auto",
            height: "100%",
            padding: 1.5,
          }}
        >
          <S.SideBarHeader>
            <Search toggle={!collapsed} />
          </S.SideBarHeader>
          <Box
            sx={{
              width: "100%",
            }}
          >
            {renderAreaButton("ADM", <IconAdm />)}
            {!collapsed && (
              <Collapse
                in={area === "ADM"}
                collapsedSize={0}
                timeout={speed / 2}
              >
                <List>{menuStructure(menuADM)}</List>
              </Collapse>
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            {renderAreaButton("SRM", <IconSrm />)}
            {!collapsed && (
              <Collapse
                in={area === "SRM"}
                collapsedSize={0}
                timeout={speed / 2}
              >
                <List>{menuStructure(menuSRM)}</List>
              </Collapse>
            )}
          </Box>
        </Stack>
        <Stack sx={{ width: "100%", flexBasis: 1 }}>
          <List
            sx={{
              width: "100%",
              padding: 1.5,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {renderListItem(
              "Encolher menu",
              () => setCollapsed(!collapsed),
              collapsed ? <IconRight /> : <IconLeft />
            )}
            {renderListItem("Configurações", () => { }, <IconSettings />)}
          </List>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%", backgroundColor: "#cccccc50", display: "none" }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            gap={1}
            sx={{ width: "100%", backgroundColor: "#cccccc50" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                padding: 2,
                paddingBottom: 0,
                backgroundColor: "#cccccc50",
              }}
            >
              <Collapse
                in={collapsed}
                collapsedSize={0}
                orientation="horizontal"
                timeout={speed / 2}
              >

              </Collapse>
              <Collapse
                in={!collapsed}
                collapsedSize={0}
                orientation="horizontal"
                timeout={speed / 2}
              >

              </Collapse>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              gap={1}
              sx={{
                padding: 1.5,
                paddingBottom: 1,
                width: "100%",
                maxHeight: "50%",
                backgroundColor: "#cccccc50",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                {renderAreaButton("ADM", <IconAdm />)}
                {!collapsed && (
                  <Collapse
                    in={area === "ADM"}
                    collapsedSize={0}
                    timeout={speed / 2}
                  >
                    <List>{menuStructure(menuADM)}</List>
                  </Collapse>
                )}
              </Box>
              <Box sx={{ width: "100%" }}>
                {renderAreaButton("SRM", <IconSrm />)}
                {!collapsed && (
                  <Collapse
                    in={area === "SRM"}
                    collapsedSize={0}
                    timeout={speed / 2}
                  >
                    <List>{menuStructure(menuSRM)}</List>
                  </Collapse>
                )}
              </Box>
            </Stack>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                padding: 1.5,
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {renderListItem(
                "Encolher menu",
                () => setCollapsed(!collapsed),
                collapsed ? <IconRight /> : <IconLeft />
              )}
              {renderListItem("Configurações", () => { }, <IconSettings />)}
            </List>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
