import { type ComponentPropsWithoutRef, type FormEvent, useRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSubmit: (value: unknown) => void;
};

export default function Form({ onSubmit, children, ...otherProps }: FormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    formRef.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
      {children}
    </form>
  );
}
