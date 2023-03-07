import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

interface Props {
  open: boolean;
  question: string;
  onClose: () => void;
  yesCallback?: () => void;
  noCallback?: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UiAlert = (props: Props) => {
  const onClose = () => {
    props.onClose();
  };

  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        scroll="body"
        maxWidth={'sm'}
        fullWidth={false}
        onClose={onClose}
        PaperProps={{
          elevation: 12,
        }}
      >
        <DialogContent dividers={true} sx={{ border: 'none' }}>
          <Typography variant="body1">{props.question}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            color={'primary'}
            onClick={() => {
              if (props.noCallback) {
                props.noCallback();
              }
              onClose();
            }}
          >
            Não
          </Button>
          <Button
            size="large"
            color={'primary'}
            variant="contained"
            onClick={() => {
              if (props.yesCallback) {
                props.yesCallback();
              }
              onClose();
            }}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UiAlert;
