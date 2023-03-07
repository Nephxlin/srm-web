import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import HighlightOffRounded from '@mui/icons-material/HighlightOffRounded';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {
  type: 'success' | 'warning' | 'error';
  title: string;
  description?: string;
}

const UiMessage = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {props.type === 'success' && (
          <CheckCircleOutlineRounded color="success" sx={{ fontSize: 60 }} />
        )}
        {props.type === 'warning' && (
          <ErrorOutlineRounded color="warning" sx={{ fontSize: 60 }} />
        )}
        {props.type === 'error' && (
          <HighlightOffRounded color="error" sx={{ fontSize: 60 }} />
        )}
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            fontWeight: 'bold',
            color: `${props.type}.main`,
            marginTop: 1,
            marginBottom: 0,
            paddingBotom: 0,
          }}
        >
          {props.title}
        </Typography>
        {props.description && (
          <Typography
            variant="body1"
            sx={{ color: `${props.type}.main`, marginTop: 0, paddingTop: 0 }}
          >
            {props.description}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default UiMessage;
