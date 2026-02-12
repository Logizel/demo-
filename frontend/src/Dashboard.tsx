
import "./dashboard.css";

type Camera = {
  id: number;
  name: string;
  image: string;
  status?: "LIVE" | "OFFLINE";
};

const cameras: Camera[] = [
  { id: 1, name: "Bike Storage", image: "https://picsum.photos/600/400?1", status: "LIVE" },
  { id: 2, name: "Commercial Hallway", image: "https://picsum.photos/600/400?2", status: "LIVE" },
  { id: 3, name: "Residential Exit", image: "https://picsum.photos/600/400?3", status: "LIVE" },
  { id: 4, name: "Garage Room", image: "https://picsum.photos/600/400?4", status: "LIVE" },
  { id: 5, name: "Lobby", image: "https://picsum.photos/600/400?5", status: "LIVE" },
  { id: 6, name: "Parking P1", image: "https://picsum.photos/600/400?6", status: "LIVE" },
  { id: 7, name: "Elevator", image: "https://picsum.photos/600/400?7", status: "LIVE" },
  { id: 8, name: "Street", image: "https://picsum.photos/600/400?8", status: "OFFLINE" },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="title">Security Monitoring Dashboard</h1>

      <div className="grid">
        {cameras.map((cam) => (
          <div key={cam.id} className="card">
            <img src={cam.image} alt={cam.name} />

            <div className="label">{cam.name}</div>

            <div className={`status ${cam.status === "LIVE" ? "live" : "offline"}`}>
              {cam.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
