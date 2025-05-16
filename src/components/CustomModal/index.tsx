import { Dialog, DialogContent, Modal } from '@mui/material'
import { ReactNode } from 'react'

export const CustomModal = ({
  children,
  open,
  onClose,
  flag,
}: {
  children: ReactNode
  open: boolean
  onClose: () => void
  flag: 'buying' | 'selling' | null
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            boxSizing: 'border-box',
            width: 'fit-content',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#121212',
          },
        },
      }}
    >
      <DialogContent
        sx={{
          width: 'fit-content',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}
