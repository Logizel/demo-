
import "./events.css";

type EventItem = {
  id: number;
  time: string;
  title: string;
  location: string;
  image: string;
  critical?: boolean;
};

const events: EventItem[] = [
  {
    id: 1,
    time: "12:32 AM",
    title: "Motion Activity",
    location: "Gods Grace",
    image: "https://picsum.photos/300/200?1",
    critical: true,
  },
  {
    id: 2,
    time: "12:30 AM",
    title: "Motion Activity",
    location: "Gods Grace",
    image: "https://picsum.photos/300/200?2",
  },
  {
    id: 3,
    time: "12:29 AM",
    title: "Motion Activity",
    location: "Gods Grace",
    image: "https://picsum.photos/300/200?3",
    critical: true,
  },
  {
    id: 4,
    time: "12:27 AM",
    title: "Motion Activity",
    location: "Gods Grace",
    image: "https://picsum.photos/300/200?4",
  },
];

export default function EventsPage() {
  return (
    <div className="events-root">
      {/* Header */}
      <div className="events-header">
        <h1>Events</h1>
        <button className="menu-btn">≡</button>
      </div>

      {/* Date strip */}
      <div className="date-strip">
        {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
          <div key={i} className={`date ${i === 6 ? "active" : ""}`}>
            <span>{d}</span>
            <strong>{7 + i}</strong>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="filter-row">
        <button className="filter-pill">Event Type ▾</button>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {events.map((e) => (
          <div key={e.id} className="timeline-row">
            <div className="time">{e.time}</div>

            <div className="dot" />

            <div className="event-card">
              <img src={e.image} alt="" />
              <div className="event-info">
                <div className="event-title">
                  {e.critical && <span className="alert-dot" />}
                  {e.title}
                </div>
                <div className="event-location">{e.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <span>🏠</span>
        <span className="active">▶</span>
        <span>👤</span>
      </div>
    </div>
  );
}
