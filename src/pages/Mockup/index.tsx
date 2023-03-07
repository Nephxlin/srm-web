import React from 'react';

import dayjs, { Dayjs } from 'dayjs';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import UiAlert from '../../_UI/Components/Molecules/Alert';
import UiMessage from '../../_UI/Components/Molecules/Message';
import UiModal from '../../_UI/Components/Molecules/Modal';

export default function Mockup() {
  const [tabValue, setTabValue] = React.useState('one');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [modalGridOpen, setModalGridOpen] = React.useState(false);

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );

  const handleDatePickerChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'sobrenome',
      headerName: 'Sobrenome',
      width: 150,
      editable: true,
    },
    {
      field: 'idade',
      headerName: 'Idade',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'nomecompleto',
      headerName: 'Nome Completo',
      description: 'Coluna sem sort',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, nome: 'Snow', sobrenome: 'Jon', idade: 35 },
    { id: 2, nome: 'Lannister', sobrenome: 'Cersei', idade: 42 },
    { id: 3, nome: 'Lannister', sobrenome: 'Jaime', idade: 45 },
    { id: 4, nome: 'Stark', sobrenome: 'Arya', idade: 16 },
    { id: 5, nome: 'Targaryen', sobrenome: 'Daenerys', idade: null },
    { id: 6, nome: 'Melisandre', sobrenome: null, idade: 150 },
    { id: 7, nome: 'Clifford', sobrenome: 'Ferrara', idade: 44 },
    { id: 8, nome: 'Frances', sobrenome: 'Rossini', idade: 36 },
    { id: 9, nome: 'Roxie', sobrenome: 'Harvey', idade: 65 },
  ];

  return (
    <>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Buttons</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack gap={2} direction="row" sx={{ marginTop: 2 }}>
          <Button variant="text" color="secondary">
            Text
          </Button>
          <Button variant="contained" color="secondary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Icon Buttons</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Modals</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setModalGridOpen(true);
            }}
          >
            Modal Grid
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setAlertOpen(true);
            }}
          >
            Alert
          </Button>
        </Stack>
        <UiModal
          title="Modal Com Grid"
          open={modalGridOpen}
          onClose={() => {
            setModalGridOpen(false);
          }}
        >
          <Box sx={{ width: '100%', height: 400 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </UiModal>
        <UiAlert
          open={alertOpen}
          question={'Tem certeza que deseja realizar esta operação?'}
          onClose={() => {
            setAlertOpen(false);
          }}
          noCallback={() => {
            setAlertOpen(false);
            alert('selecionou não...');
          }}
          yesCallback={() => {
            setAlertOpen(false);
            alert('selecionou sim...');
          }}
        />
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Date/Hour Pickers</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack gap={2} direction="row">
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleDatePickerChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleDatePickerChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={value}
              onChange={handleDatePickerChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DateTimePicker
              label="Date&Time picker"
              value={value}
              onChange={handleDatePickerChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Messages</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <UiMessage
            type="success"
            title="Sucesso"
            description="Descrição da messagem opcional..."
          />
          <UiMessage
            type="warning"
            title="Alerta"
            description="Descrição da messagem opcional..."
          />
          <UiMessage
            type="error"
            title="Erro"
            description="Descrição da messagem opcional..."
          />
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Progress</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <CircularProgress />
          <CircularProgress variant="determinate" value={25} />
          <CircularProgress variant="determinate" value={50} />
          <CircularProgress variant="determinate" value={75} />
          <CircularProgress variant="determinate" value={100} />
        </Stack>
        <Stack gap={2} direction="row" sx={{ marginTop: 2 }}>
          <CircularProgress color="secondary" />
          <CircularProgress
            color="secondary"
            variant="determinate"
            value={25}
          />
          <CircularProgress
            color="secondary"
            variant="determinate"
            value={50}
          />
          <CircularProgress
            color="secondary"
            variant="determinate"
            value={75}
          />
          <CircularProgress
            color="secondary"
            variant="determinate"
            value={100}
          />
        </Stack>
        <Stack gap={2} direction="column" sx={{ marginTop: 2 }}>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Grid</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Box sx={{ height: 370, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Fields</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <TextField label="Filled" variant="filled" />
          <TextField label="Standard" variant="standard" />
          <TextField label="Outlined" variant="outlined" />
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Tabs</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
            <Tab value="four" label="Item Four" />
            <Tab value="five" label="Item Five" />
          </Tabs>
        </Stack>
        <Stack gap={2} direction="row">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
            <Tab value="four" label="Item Four" />
            <Tab value="five" label="Item Five" />
          </Tabs>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Checkboxes</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Checkbox defaultChecked size="small" />
          <Checkbox defaultChecked />
          <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </Stack>
        <Stack gap={2} direction="row">
          <Checkbox defaultChecked size="small" color="secondary" />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox
            defaultChecked
            color="secondary"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </Stack>
        <Stack gap={2} direction="row">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Radios</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Radio size="small" />
          <Radio />
          <Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        </Stack>
        <Stack gap={2} direction="row">
          <Radio size="small" color="secondary" />
          <Radio color="secondary" />
          <Radio
            color="secondary"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </Stack>
        <Stack gap={2} direction="row">
          <FormGroup>
            <FormControlLabel
              control={<Radio defaultChecked />}
              label="Label"
            />
            <FormControlLabel disabled control={<Radio />} label="Disabled" />
          </FormGroup>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Switches</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Stack gap={2} direction="row">
          <Switch defaultChecked />
          <Switch />
          <Switch disabled defaultChecked />
          <Switch disabled />
        </Stack>
        <Stack gap={2} direction="row">
          <Switch color="secondary" defaultChecked />
          <Switch color="secondary" />
          <Switch color="secondary" disabled defaultChecked />
          <Switch color="secondary" disabled />
        </Stack>
        <Stack gap={2} direction="row">
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Label"
            />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
          </FormGroup>
        </Stack>
      </Container>
      <Container
        fixed
        sx={{
          marginTop: 2,
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6">Tooltips</Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
        <Box sx={{ width: 500 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems="flex-end"
              direction="column"
            >
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
