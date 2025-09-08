import { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddWorkers(props) {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const salaryInputRef = useRef();

  const minimumSalary = 5000;

  const addWorkerHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSalary = salaryInputRef.current.value;
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen geçerli bir isim giriniz...",
      });
      return;
    }
    if (+salaryInputRef.current.value < minimumSalary) {
      setError({
        title: "Maaş Alanı Zorunludur",
        message: `Lütfen ${minimumSalary} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 10000),
        name: enteredName,
        salary: enteredSalary,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    salaryInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name">Çalışan İsmi</label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2 "
            placeholder="Çalışan ismi giriniz."
            id="name"
            ref={nameInputRef}
          />
          <label htmlFor="salary">Maaş Miktarı</label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2 "
            placeholder="Maaş miktarını giriniz."
            id="salary"
            ref={salaryInputRef}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddWorkers;
