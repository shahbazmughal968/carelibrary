import React from "react";
import classes from "./ManageShifts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box, { BoxProps } from '@mui/material/Box';

const ManageShifts: React.FC = () => {
  var alphas: Array<{ name: string; request: string,book:string }> = [
    { name: "Arlington Manor", request: "Requested",book:"Booked" },
    { name: "Barking Hall", request: "Requested",book:"Booked" },
    { name: "Baylham Care", request: "Requested",book:"Booked" },
    { name: "Bramely Court", request: "Requested",book:"Booked" },
    { name: "Broome End", request: "Requested",book:"Booked" },
    { name: "Brook House", request: "Requested",book:"Booked" },
    { name: "Brook House", request: "Requested",book:"Booked" },
    { name: "Brook House", request: "Requested",book:"Booked" },
  ];

  const [day, setDay] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };
  return (
    <>
      <Card sx={{ m: 4, p: 1, boxShadow: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h5">7 Days Shift Booking Status</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eaque non dolorum corporis. Nisi assumenda, amet perspiciatis in
            laborum ratione obcaecati aspernatur fugiat sunt adipisci
            doloremque! Doloremque pariatur, facilis autem officiis alias
            dolores rerum veniam deserunt sequi laudantium libero veritatis,
            quae, soluta nemo perferendis? Exercitationem quae fugit cum minima
            eveniet.
          </Typography>
          {alphas.map((item) => (
            <Card
              variant="outlined"
              sx={{
                width: 300,
                height: "100%",
                p: 2,
                my: 2,
                mx: 2,
                boxShadow: 3,
                display: "inline-block",
                borderRadius: 1,
              }}
            >
              <FormControl sx={{ width: "25%", height: "25%" }}>
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={day}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Fri,11</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h6">{item.name}</Typography>
              <Box sx={{ display: 'flex',
          flexDirection: 'row',
          justifyContent:'space-between'}}>
              <Typography variant="subtitle2" >{item.request}</Typography>
              <Typography variant="subtitle2" >{item.book}</Typography>
              </Box>
              
            </Card>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default ManageShifts;
