import { type ReactNode } from 'react';

type InfoBoxProps = {
  children: ReactNode;
  mode: 'hint' | 'warning';
};

export default function InfoBox({ children, mode }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning!</h2>
      <p>{children}</p>
    </aside>
  );
}
