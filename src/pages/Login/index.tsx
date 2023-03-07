import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo';

type User = {
  user: string | undefined;
  password: string | undefined;
};

export default function Login2() {
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState<Boolean>(true);
  const [message, setMessage] = useState<string>();
  const [formData, setFormData] = useState<User>({
    user: undefined,
    password: undefined,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const login = async () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          elevation={12}
          sx={{ padding: 4, borderRadius: 2, maxWidth: 320 }}
        >
          <h1>Logo</h1>
          <Typography variant="body1" sx={{ lineHeight: 1.2, marginTop: 2 }}>
            Realize o login para acessar o sistema
          </Typography>
          <Stack gap={2} sx={{ marginTop: 4 }}>
            <TextField
              label="Usuário"
              name="user"
              variant="outlined"
              placeholder="Insira seu usuário"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
              helperText={message}
              error={message ? true : false}
            />
            <TextField
              label="Senha"
              name="password"
              variant="outlined"
              placeholder="Insira sua senha"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
              type={hidePassword ? 'password' : 'text'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setHidePassword(!hidePassword)}
                      edge="end"
                    >
                      {hidePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="text" color="error" size="small">
              Esqueceu a senha?
            </Button>
          </Stack>
          <Stack gap={2} direction="row" sx={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              fullWidth
              onClick={() => navigate('/')}
            >
              VOLTAR
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={
                formData.user?.length! > 1 && formData.password?.length! > 4
                  ? false
                  : true
              }
              onClick={() => login()}
            >
              ENTRAR
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
