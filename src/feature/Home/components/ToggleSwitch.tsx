import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const IOSSwitch = styled(Switch)(({ theme }: any) => ({
  width: 52,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#FFA500' : '#FFA500',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#FFA500',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 28,
    height: 28,
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#FFA500' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const ToggleSwitch = ({ className }: any) => {
  const storage = localStorage.getItem('language');
  const [checked, setChecked] = useState(storage ? JSON.parse(storage) : false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (storage) {
      i18n.changeLanguage(JSON.parse(storage) ? 'en' : 'pt');
    } else {
      i18n.changeLanguage('pt');
    }
  }, [checked, i18n]);

  const handleChange = () => {
    setChecked((prev: any) => {
      localStorage.setItem('language', (!prev).toString());
      return !prev;
    });
  };

  return (
    <div
      className={`flex flex-col items-center laptop:items-center w-min ${className}`}
    >
      <span className="text-white font-bold text-xxsm mb-1">BR-EN</span>
      <IOSSwitch
        sx={{
          '& .MuiSwitch-thumb': {
            backgroundColor: checked ? '#FFFFFF' : '#000000',
          },
        }}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default ToggleSwitch;
