import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as: Component,
  children,
  ...props
}: ContainerProps<C>) {
  return <Component {...props}>{children}</Component>;
}
