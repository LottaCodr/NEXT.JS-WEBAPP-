import React from "react";
import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4000/learn", {
    next: {
      revalidate: 0,
    },
  });
 
 
  return res.json();
}

export default async function TicketList() {
  // create another ticket for this
  const tickets = await getTickets();

  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/Tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">
          
          Sorry! There are no open tickets available!
        </p>
      )}
    </>
  );
}
