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
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/61NrAZHeuCL._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3UGWGe5">-22% $45.04</a></Button>
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
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_quadcast_02_side_1512x.jpg?v=1678907138" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/43Dz5ze">-10% $126.50</a></Button>
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
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_procast_2_turn_1512x.jpg?v=1678908093" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/microphones/products/hyperx-procast-professional-xlr-microphone?variant=42994462785693">$249.99</a></Button>
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
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_duocast_2_side_1512x.jpg?v=1678908024" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/microphones/products/hyperx-duocast-usb-microphone?variant=42587052703901">$99.99 $89.99</a></Button>
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