import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button'; // discriminant
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor'; // discriminant
} & ComponentPropsWithoutRef<'a'>; // intersection

export default function Button(props: ButtonProps | AnchorProps /* union */) {
  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      Button
    </button>
  );
}
