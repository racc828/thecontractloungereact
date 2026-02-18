import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarWrapper = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={[
          {
            title: "The Contract Lounge Event",
            date: "2026-02-24",
            url: "https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-tickets-1981498182404",
            target: "_blank",
            backgroundColor: "#0b2c5d",
            textColor: "white",
          },
          {
            title: "Supreme Lunch & Learn",
            date: "2026-02-18",
            url: "https://www.eventbrite.com/e/njhmfa-lunch-learn-real-estate-tickets-1981339321246",
            target: "_blank",
            backgroundColor: "#0b2c5d",
            textColor: "white",
          },
          {
            title: "Supreme Sponsored Event",
            date: "2026-02-12",
            url: "https://www.eventbrite.com/e/blackwood-nj-further-together-featuring-female-real-estate-pros-tickets-1980471075299",
            target: "_blank",
            backgroundColor: "#0b2c5d",
            textColor: "white",
          },
        ]}
        eventClick={(info) => {
          info.jsEvent.preventDefault();
          window.open(info.event.url, "_blank", "noopener,noreferrer");
        }}
      />
    </>
  );
};

export default CalendarWrapper;
