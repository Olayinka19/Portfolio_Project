import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Gaming() {
  const [value, setValue] = React.useState(3);
  return (
    <div>Gaming
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item><img width="100%" src="https://m.media-amazon.com/images/I/71aARXewm6L._AC_SX679_.jpg"/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><img width="100%" src="https://m.media-amazon.com/images/I/71aARXewm6L._AC_SX679_.jpg"/></Item>
        </Grid>
      </Grid>
    </Box>



    
    <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      {/* <Rating name="disabled" value={value} disabled /> */}
      {/* <Typography component="legend">No rating given</Typography> */}
      {/* <Rating name="no-value" value={null} /> */}
    </Box>
    
    
    
    </div>
  )
}

export default Gaming