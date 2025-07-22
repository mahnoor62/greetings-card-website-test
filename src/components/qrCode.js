
import React from 'react';
import QRCode from 'react-qr-code';
import { useMediaQuery, useTheme } from '@mui/material';
import { useZindexModal } from '../contexts/zindex-control';

const QRCodeGenerator = ({ value }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('mobile'));
  return (
    // <div style={{ background: 'white', padding: '16px' }}>
      <QRCode value={value} size={isMobile ? 30 :100} />
    // </div>
  );
};

export default QRCodeGenerator;
