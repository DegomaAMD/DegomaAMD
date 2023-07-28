import { Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../new components/Dashboard.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BarChart from '../charts/Barchart';




function Dashboard() {
  return (
    <>
     <div className="bgcolor">
     <Box height={5} />
     <Box sx={{display: "flex"}}>
        <Box component="main" sx={{flexGrow: 1, p:3}}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Stack spacing={2} direction="row">
            <Card sx={{ minWidth: 49 + "%", height:152 }} className="gradient">
              <CardContent>
                <div className='iconstylecard'>
                  <CreditCardIcon/>
                </div>
              <Typography gutterBottom variant="h5" component="div" sx={{color: "#ff914d"}}>
                        P25,000.00
              </Typography>
              <Typography gutterBottom variant="body2" component="div" color="#ff914d">
                        Total Earnings - Month-to-date
              </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 49 + "%", height:152 }} className="gradientlight">
              <CardContent>
                <div className='iconstylebag'>
                  <ShoppingBagIcon/>
                </div>
              <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffbd59"}}>
                        P45,000.00
              </Typography>
              <Typography gutterBottom variant="body2" component="div" color="#ffbd59">
                        Total Orders - Month-to-date
              </Typography>
              </CardContent>
            </Card>
            </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card >
                <Stack spacing={2} direction="row">
                <div className='iconstyle'>
                <StorefrontIcon />
                </div>  
                <div className='paddingall'>
                  <span className='pricetitlenet'>P250,000</span>
                  <br/>
                  <span className='pricesubtitlenet'>Net Revenue</span>
                </div>
                </Stack>
            </Card>
            <Card className="gradientlight">
              <Stack spacing={2} direction="row">
                <div className='iconstyleblack'>
                <StorefrontIcon />
                </div>  
                <div className='paddingall'>
                  <span className='pricetitlegross'>P500,000</span>
                  <br/>
                  <span className='pricesubtitlegross'>Gross Revenue</span>
                </div>
                </Stack>
            </Card>
            </Stack>
            </Grid>
            </Grid>
              <Box height={25} />
              <Grid container spacing={2}>
                      <Grid item xs={8}>
                      <Card sx={{ height: 55 + "vh" }}>
                        <CardContent>
                             <BarChart/>
                        </CardContent>
                      </Card>
                      </Grid>
                     <Grid item xs={4} >
                     <Card sx={{ height: 55 + "vh" }}>
                        <CardContent>
                        <div className='paddingall'>
                        <span className='pricetitle'><h4>Popular Products</h4></span>
                        </div>
                        <Accordion>
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                             <Typography>Birthday Cake Pop</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                             <Typography>
                             Celebrate with our special birthday cake pop.
                             </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion>
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel2a-content"
                             id="panel2a-header"
                           >
                             <Typography>Matcha Latte</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                             <Typography>
                             Delicious matcha latte for matcha lovers.
                             </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion>
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                             <Typography>Chocolate Chip Cookie</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                             <Typography>
                             A classic favorite - the chocolate chip cookie.
                             </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion>
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel2a-content"
                             id="panel2a-header"
                           >
                             <Typography>Decaf Pike Place® Roast</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                             <Typography>
                             Decaffeinated coffee with the rich flavors of Pike Place® Roast.
                             </Typography>
                           </AccordionDetails>
                        </Accordion>
                        <Accordion>
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                             <Typography>Strawberry Crème Frappuccino® Blended Beverage</Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                             <Typography>
                             A refreshing and creamy strawberry frappuccino.
                             </Typography>
                           </AccordionDetails>
                        </Accordion>
                        </CardContent>
                      </Card>
                     </Grid>
              </Grid>
        </Box>
     </Box> 
     </div>
    </>
  );
}

export default Dashboard;
