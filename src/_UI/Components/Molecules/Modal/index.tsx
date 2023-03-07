import DeleteIcon from '@mui/icons-material/CloseRounded';
import { Box, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

import { TransitionProps } from '@mui/material/transitions';
import React, { ReactNode } from 'react';

interface Props {
  size?: "sm" | 'md' | "lg" | "xl" | "xs"
  open: boolean;
  children: ReactNode;
  title?: string;
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

const UiModal = (props: Props) => {
  const onClose = () => {
    props.onClose();
  };

  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        scroll="body"
        fullWidth={true}
        maxWidth={props.size || 'md'}
        onClose={onClose}
        PaperProps={{
          elevation: 12,
        }}
      >
        <DialogTitle>
          <Stack
            direction="row"
            alignItems={'center'}
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Box sx={{ height: 40, width: 40 }}></Box>
            <Typography variant="h6" component="div">
              {props.title}
            </Typography>
            <IconButton aria-label="delete" onClick={() => onClose()}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <Box sx={{ height: 5 }}></Box>
        <DialogContent sx={{ backgroundColor: '#f1f2f3' }}>
          {props.children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UiModal;
