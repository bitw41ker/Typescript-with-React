import { type ComponentPropsWithoutRef, type FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSubmit: (value: unknown) => void;
};

export default function Form({ onSubmit, children, ...otherProps }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
