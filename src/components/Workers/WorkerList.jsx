import React from "react";
import Card from "../UI/Card";

function WorkerList(props) {
  const { workers, setWorkers } = props;

  if (workers.length < 1) return;

  const deleteWorkers = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card className="mt-10">
      <ul className="flex justify-between p-2">
        <span className="font-bold">İsim</span>
        <span className="font-bold">Maaş</span>
      </ul>
      {workers.map((workers) => (
        <li
          className="flex justify-between p-2 hover:shadow-xl duration-300 cursor-pointer text-teal-600"
          key={workers.id}
          onClick={() => deleteWorkers(workers.id)}
        >
          <span>{workers.name}</span>
          <span>{workers.salary}₺</span>
        </li>
      ))}
    </Card>
  );
}

export default WorkerList;
