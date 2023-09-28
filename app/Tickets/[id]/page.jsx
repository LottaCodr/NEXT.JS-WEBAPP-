import ErrorPage from "@/app/components/errorpage";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    //PageNotFoundError();
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  return res.json();
}
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created By {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
