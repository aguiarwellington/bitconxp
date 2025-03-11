import React from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import EventIcon from "@mui/icons-material/Event";

const events = [
  {
    date: "03/05 - Bitcoin",
    schedule: [
      { time: "09h00 às 12h30", title: "Palestra" },
      { time: "12h30 às 14h00", title: "Almoço" },
      { time: "14h00 às 18h00", title: "Curso - Autocustódia" },
      { time: "18h00 às 20h30", title: "Intervalo" },
      { time: "20h30 às 23h00", title: "Jantar" },
    ],
  },
  {
    date: "04/05 - WEB3",
    schedule: [
      { time: "07h00 às 09h30", title: "Café da manhã" },
      { time: "10h00 às 12h30", title: "Palestra" },
      { time: "12h30 às 14h00", title: "Almoço" },
      { time: "14h00 às 15h30", title: "Mesa redonda" },
      { time: "15h30 às 16h00", title: "Perguntas" },
      { time: "16h00 às 21h30", title: "Autógrafos e Fotos" },
      { time: "22h00", title: "Encerramento" },
    ],
  },
];

const CronogramaEvento = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #e69c47, #002f87)",
        color: "#fff",
        padding: "80px 5%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "#FF8C00" }}
      >
        <EventIcon sx={{ fontSize: "34px", mr: 1 }} /> Data do Evento
      </Typography>
      {events.map((event, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#FF8C00", mb: 2 }}
          >
            {event.date}
          </Typography>
          <Timeline position="alternate">
            {event.schedule.map((item, idx) => (
              <TimelineItem key={idx}>
                <TimelineOppositeContent
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  {item.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: "#FF8C00" }} />
                  {idx !== event.schedule.length - 1 && (
                    <TimelineConnector sx={{ backgroundColor: "#FF8C00" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  {item.title}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      ))}
    </Box>
  );
};

export default CronogramaEvento;