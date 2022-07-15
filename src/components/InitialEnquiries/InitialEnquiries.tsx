import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import classes from "./InitialEnquiries.module.scss";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./InitialEnquiries.scss";
import FormControl from "@mui/material/FormControl";
import { Box, FormHelperText, Input } from "@mui/material";
import Grid from "@mui/material/Grid";
import { color } from "@mui/system";
const InitialEnquiries: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Card className="initial-enquiries-main-card">
        <CardContent>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="First Applicant" value="1" />
              <Tab label="Contact" value="2" />
              <Tab label="Other Details" value="3" />
              <Tab label="Upload Documents" value="4" />
            </TabList>
            <TabPanel value="1" sx={{ flexGrow: 1 }}>
              <form>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Date Of Enquiry</label>
                      <input type="date" aria-describedby="my-helper-text" placeholder="a"/>
                    </Grid>
                   
                  </Grid>
                </Box>
              </form>

              {/* <Grid container >
              <FormControl >
               <Grid >
               <FormHelperText id="my-helper-text">
                Date Of Enquiry
                </FormHelperText>
                <Input type="date" aria-describedby="my-helper-text" />
               </Grid>
              
              </FormControl>
              </Grid> */}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </>
  );
};
export default InitialEnquiries;
