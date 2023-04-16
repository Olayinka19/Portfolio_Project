import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// import Rating from '@mui/material/Rating';

function Mice() {
    const [value, setValue] = React.useState(4);
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <Button variant="outlined">TOP🔝</Button> */}
              <h4>Mice</h4>

          </div>
    <br />
    <br />
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_pulsefire_haste_2_wireless_black_angle_2_1512x.jpg?v=1678907837" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/43DV2hg">-21% $39.30</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Likes</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        </Grid>


        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_pulsefire_haste_itachi_red_1_main_1512x.jpg?v=1678907530" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-mice/products/hyperx-pulsefire-haste-itachi-editon-gaming-mouse?variant=42893329957021">$59.99 $29.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Likes</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_pulsefire_surge_2_angled_back_1512x.jpg?v=1678907440" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3A3eYgc">$54.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Likes</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_pulsefire_core_white_pink_1_main_1512x.jpg?v=1678907873" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-mice/products/hyperx-pulsefire-core-gaming-mouse?variant=41077932720285">$29.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Likes</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
        </Grid>

      </Grid>
    </Box>

    
    </div>
  )
}

export default Mice;