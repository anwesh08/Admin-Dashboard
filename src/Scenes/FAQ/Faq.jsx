import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Header from "../../Component/Header";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
         <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important Question ?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, atque odio blanditiis rem alias illo voluptatem natus possimus illum veniam quaerat ad ullam odit in, neque deserunt temporibus officia?
         </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
         <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important Question ?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, atque odio blanditiis rem alias illo voluptatem natus possimus illum veniam quaerat ad ullam odit in, neque deserunt temporibus officia?
         </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
         <Typography color={colors.greenAccent[500]} variant='h5'>
            Your Favourite Question ?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, atque odio blanditiis rem alias illo voluptatem natus possimus illum veniam quaerat ad ullam odit in, neque deserunt temporibus officia?
         </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
         <Typography color={colors.greenAccent[500]} variant='h5'>
            Some Random Question ?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, atque odio blanditiis rem alias illo voluptatem natus possimus illum veniam quaerat ad ullam odit in, neque deserunt temporibus officia?
         </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
         <Typography color={colors.greenAccent[500]} variant='h5'>
            Final Question ?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, atque odio blanditiis rem alias illo voluptatem natus possimus illum veniam quaerat ad ullam odit in, neque deserunt temporibus officia?
         </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
