import Tooltip from '@mui/material/Tooltip';

type IToolTipPlacementsProps = 'top-start' |
  'bottom-start' |
  'bottom-end' |
  'bottom' |
  'top-end' |
  'top' |
  'top-start' |
  'left-start' |
  'left-end' |
  'left' |
  'right-start' |
  'right-end' |
  'right'

interface IToolTipProps {
  children: React.ReactElement
  title: string
  placement: IToolTipPlacementsProps
}

export default function TooltipZone({ children, title, placement }: IToolTipProps) {
  return (
    <Tooltip title={title} placement={placement}>
      {children}
    </Tooltip>
  )
}