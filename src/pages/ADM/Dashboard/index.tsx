import dayjs, { Dayjs } from "dayjs";
import React from "react";

import IconSearch from "@mui/icons-material/SearchOutlined";

import { IconButton, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import SRMCombatPorduct from "../../../_UI/Components/Organism/SRMCombatProduct";
import { ListContentArea } from "./styles";
import CardSuggest from "../../../_UI/Components/Molecules/Cards/SRMProductCard/CardsSuggest";

export default function Dashboard() {
  const [tabValue, setTabValue] = React.useState("1");
  const [formData, setFormData] = React.useState({
    search: undefined,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleDatePickerChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };


  return (
    <div data-testid="dashboard">
      <SRMCombatPorduct />
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Sugestão de produtos
              </Typography>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="secondary tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab value="1" label="Todas" />
                <Tab value="2" label="Mercearia" />
                <Tab value="3" label="Bebidas" />
                <Tab value="4" label="Carnes" />
                <Tab value="5" label="Hortifruti" />
                <Tab value="6" label="Higiene e beleza" />
                <Tab value="7" label="Limpeza" />
                <Tab value="8" label="Casa e lazer" />
              </Tabs>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Busca"
              name="search"
              fullWidth
              variant="outlined"
              placeholder="Busque por produtos concorrentes"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
              type={"text"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <IconSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleDatePickerChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>

          </Grid>
        </Grid>
        <ListContentArea>
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
          <CardSuggest />
        </ListContentArea>
      </div>
    </div >
  );
}
