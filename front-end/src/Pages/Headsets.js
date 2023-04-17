import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from '@mui/material/Button';

function Headsets() {

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
              <h4>Headsets</h4>

          </div>
    <br />
    <br />
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/61flgQb9s1L._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3ojok4C">$49.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>


        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$63.95</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_ttt_2_side_1512x.jpg?v=1678907440" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$109.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/71EHw68EScL._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3oaTuet">-20% $23.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>

        </Grid>

      </Grid>
    </Box>

    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/61flgQb9s1L._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3ojok4C">$49.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>


        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$63.95</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_ttt_2_side_1512x.jpg?v=1678907440" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$109.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/71EHw68EScL._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3oaTuet">-20% $23.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>

        </Grid>

      </Grid>
    </Box>
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/61flgQb9s1L._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3ojok4C">$49.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>


        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$63.95</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_ttt_2_side_1512x.jpg?v=1678907440" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$109.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/71EHw68EScL._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3oaTuet">-20% $23.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>

        </Grid>

      </Grid>
    </Box>
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/61flgQb9s1L._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3ojok4C">$49.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>


        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_wireless_2_main_dongle_1512x.jpg?v=1678907740" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$63.95</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_alpha_ttt_2_side_1512x.jpg?v=1678907440" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://hyperx.com/collections/gaming-headsets/products/hyperx-cloud-alpha?variant=41031691239581">$109.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://m.media-amazon.com/images/I/71EHw68EScL._AC_SX679_.jpg" /></Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary"><a href="https://amzn.to/3oaTuet">-20% $23.99</a></Button>
              {/* <Button variant="secondary"><a href="https://amzn.to/3ojok4C">-17% $19.98 </a></Button> */}

          </div>

        </Grid>

      </Grid>
    </Box>

    
    </div>
  )
}

export default Headsets