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
        showNonCurrentDates={false}
        fixedWeekCount={false}
        events={[
          {
            title: "The Contract Lounge Event",
            date: "2026-02-24",
            url: "https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-tickets-1981498182404",
            target: "_blank",
            backgroundColor: "#6DB04B",
            textColor: "white",
          },
          {
            title: "Supreme Lunch & Learn",
            date: "2026-02-18",
            url: "https://www.eventbrite.com/e/njhmfa-lunch-learn-real-estate-tickets-1981339321246",
            target: "_blank",
            backgroundColor: "#6DB04B",
            textColor: "white",
          },
          {
            title: "Supreme Sponsored Event",
            date: "2026-02-12",
            url: "https://www.eventbrite.com/e/blackwood-nj-further-together-featuring-female-real-estate-pros-tickets-1980471075299",
            target: "_blank",
            backgroundColor: "#6DB04B",
            textColor: "white",
          },
          {
            title: "Hammonton Happy Hour",
            date: "2026-03-12",
            url: "https://www.eventbrite.com/e/the-hammonton-happy-hour-tickets-1983737250517?utm_experiment=test_share_listing&aff=ebdsshios&sg=dd50440ef8e81515309783a500c30a0da3c5bf21047a9b956d0854f27d6bb3a3e9e55b750c3d3b456e5566bad7d3bc058617dd6a382241afb6d769a32c5cf7bea4af201c95b75e12963cefefaa26",
            target: "_blank",
            backgroundColor: "#6DB04B",
            textColor: "white",
          },
          {
            title: "Supreme Sponsored Event",
            date: "2026-03-16",
            url: "https://www.eventbrite.com/e/prepare-more-buyers-for-homeownership-credit-workshop-tickets-1984258845622?utm_experiment=test_share_listing&aff=ebdsshios&sg=dd50440ef8e81515309783a500c30a0da3c5bf21047a9b956d0854f27d6bb3a3e9e55b750c3d3b456e5566bad7d3bc058617dd6a382241afb6d769a32c5cf7bea4af201c95b75e12963cefefaa26",
            target: "_blank",
            backgroundColor: "#6DB04B",
            textColor: "white",
          },
          {
            title: "The Contract Lounge Event",
            date: "2026-03-31",
            url: "https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-march-tickets-1983579505698?sg=dd50440ef8e81515309783a500c30a0da3c5bf21047a9b956d0854f27d6bb3a3e9e55b750c3d3b456e5566bad7d3bc058617dd6a382241afb6d769a32c5cf7bea4af201c95b75e12963cefefaa26&aff=ebdsshios",
            target: "_blank",
            backgroundColor: "#6DB04B",
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
