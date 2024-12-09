import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const increment = async (previousState) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return previousState + 1;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Increment
    </button>
  );
};

const Example1 = () => {
  const [count, formAction, isPending] = useActionState(increment, 0);

  return (
    <form action={formAction}>
      <h1>useActionState and useFormState</h1>
      {isPending ? "counting..." : count}
      <SubmitButton />
    </form>
  );
};

export default Example1;
