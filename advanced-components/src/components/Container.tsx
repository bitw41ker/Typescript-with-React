import { type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

export default function Container({ as: Component }: ContainerProps) {
  return <Component />;
}
