import IconExit from '@mui/icons-material/ExitToAppOutlined';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import IconNotification from '@mui/icons-material/NotificationsOutlined';
import IconPlace from '@mui/icons-material/PlaceOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles'

export default function DashboardHeader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  const renderTitle = () => {
    return (
      <Stack
        justifyContent="center"
        sx={{
          width: '100%',
          height: 80,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h6">Combate - Análise de Preços</Typography>
        <Typography variant="body2" color="text.secondary">
          Selecione um produto concorrente para combater
        </Typography>
      </Stack>
    );
  };

  const renderLocal = () => {
    return (
      <Stack
        justifyContent="center"
        sx={{
          width: '100%',
          height: 80,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          padding: 2,
        }}
      >
        <ButtonBase
          sx={{
            borderRadius: 1,
            padding: 1,
            width: '100%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="flex-start"
            direction="row"
            gap={1}
            sx={{
              width: '100%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <IconPlace />
            <Stack
              sx={{
                textAlign: 'left',
              }}
            >
              <Typography variant="body2">
                <strong>145</strong> - Fort Atacadista | Loja Campeche |
                Florianópolis | SC
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rodovia Francisco Magno Vieira S/Nº 405
              </Typography>
            </Stack>
          </Stack>
        </ButtonBase>
      </Stack>
    );
  };

  const renderMenu = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        gap={1}
        sx={{ width: '100%', height: 80 }}
      >
        <IconButton>
          <IconNotification color="secondary" />
        </IconButton>
        <ButtonBase sx={{ borderRadius: 100 }} onClick={handleClickProfile}>
          <Avatar></Avatar>
        </ButtonBase>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={0}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ overflow: 'hidden', '& .MuiPaper-root': { boxShadow: 12 } }}
        >
          <Box
            sx={{
              width: 200,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Avatar sx={{ width: 64, height: 64, marginBottom: 0.5 }}></Avatar>
            <Typography variant="h6">Barth</Typography>
          </Box>
          <ListItemButton
            onClick={() => logout()}
            sx={{
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 1,
              paddingRight: 1,
              marginLeft: 1,
              marginRight: 1,
            }}
          >
            <IconExit />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: 1 }}
              noWrap
            >
              Sair
            </Typography>
          </ListItemButton>
        </Menu>
      </Stack>
    );
  };

  return (
    <S.Header data-testid="header">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          {renderTitle()}
        </Grid>
        <Grid item xs={5}>
          {renderLocal()}
        </Grid>
        <Grid item xs={2}>
          {renderMenu()}
        </Grid>
      </Grid>
    </S.Header>
  );
}
