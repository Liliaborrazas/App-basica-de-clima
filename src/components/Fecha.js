import { useState, useEffect } from "react";

export default function Fecha() {
  const [fecha, setFecha] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setFecha(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div>
      <div className="date">{fecha}</div>
    </div>
  );
}
