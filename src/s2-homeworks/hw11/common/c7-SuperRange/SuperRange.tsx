import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
   return (
      <Slider
         sx={{
            // стили для слайдера // пишет студент
            color: "success.main",
            "& .MuiSlider-rail": {
               color: "text.primary",
            },
            "& .MuiSlider-thumb": {
               color: "white",
               border: 1,
               borderColor: "success.main",
            },
            "& :before": {
               width: "6px",
               height: "6px",
               bgcolor: "success.main",
            },
            width: 150,
         }}
         {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
   );
};

export default SuperRange;
