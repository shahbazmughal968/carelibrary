import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import classes from './ManageShifts.module.scss'
import Box from "@mui/material/Box";
import RequestImg from './request.png'
import BookImg from './book.png'


const ManageShifts: React.FC = () => {
  var alphas: Array<{
    name: string;
    request: string;
    book: string;
    requestData: string;
    bookData: string;
  }> = [
    {
      name: "Arlington Manor",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Barking Hall",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Baylham Care",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Bramely Court",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Broome End",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Brook House",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Brook House",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
    {
      name: "Brook House",
      request: "Requested",
      book: "Booked",
      requestData: "00",
      bookData: "00",
    },
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
          <Box>
            {alphas.map((item) => (
              <Card
                variant="outlined"
                sx={{
                  width: 300,
                  height: "100%",
                  p: 2,
                  m: 5,
                  boxShadow: 3,
                  display: "inline-block",
                  borderRadius: 1,
                }}
              >
                <FormControl sx={{ width: "25%" }} className={classes.dayBox}>
                  <InputLabel id="demo-simple-select-label">Day</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={day}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fri,11</MenuItem>
                    <MenuItem value={10}>Sat,12</MenuItem>
                    <MenuItem value={10}>Sun,13</MenuItem>
                  </Select>
                </FormControl>

                <Typography variant="h6">{item.name}</Typography>
              
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                   <img src={RequestImg} className={classes.requestimg}/>
                  <Typography variant="subtitle2">{item.request}</Typography>
                  <img src={BookImg} className={classes.bookimg}/>
                  <Typography variant="subtitle2">{item.book}</Typography>
                </Box>
                

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography variant="h5" className={classes.requestData}>
                    {item.requestData}
                  </Typography>
                  <Typography variant="h5" className={classes.bookData}>{item.bookData}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ManageShifts;
