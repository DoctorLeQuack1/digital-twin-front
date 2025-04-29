import { Alert } from "flowbite-react";

export const IncorrectLogin = (props: any) => {
  return (
    <Alert color="failure" onDismiss={() => {
        props.incorrect(false);
        //return alert('Alert dismissed!');
        }}>
      <span className="font-medium">Oops!</span> Incorrect login credentials!
    </Alert>
  );
}
