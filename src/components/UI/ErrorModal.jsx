import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";

const BackDrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className="w-[36rem] !p-0 z-20">
        <header className="bg-red-600 p-4 rounded-t-md">
          <h2 className="text-center text-xl text-white">
            {props.error.title}
          </h2>
        </header>

        <section className="p-4">{props.error.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32 rounded-sm" onClick={props.onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { error, onConfirm } = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={error} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
