import { Alert } from "flowbite-react";

export const AlertContact = (props: any) => {
  return (
    <Alert  color="success" onDismiss={() => {
        props.submit(false);
        //return alert('Alert dismissed!');
        }}>
      <span className="font-medium">Great!</span> Successfully sent contact info!
    </Alert>
  );
}
