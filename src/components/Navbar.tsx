import React from "react";

interface NavbarProps {
  onNavigate?: (hash: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(hash);
    }
  };

  return (
    <header className="nav">
      <a
        className="mark"
        href="#top"
        aria-label="Altura, back to top"
        onClick={(e) => handleAnchorClick(e, "#top")}
      >
        Altura
      </a>
      <nav aria-label="Primary" className="nav-text">
        <a href="#wellness" onClick={(e) => handleAnchorClick(e, "#wellness")}>
          Residence
        </a>
        <a href="#suite" onClick={(e) => handleAnchorClick(e, "#suite")}>
          Rooms
        </a>
        <a href="#terrace" onClick={(e) => handleAnchorClick(e, "#terrace")}>
          Terrace
        </a>
        <a href="#exit" onClick={(e) => handleAnchorClick(e, "#exit")}>
          Viewings
        </a>
      </nav>
      <a
        href="#viewings-enquiry"
        className="nav-text nav-action"
        onClick={(e) => handleAnchorClick(e, "#viewings-enquiry")}
      >
        Book viewing
      </a>
    </header>
  );
}
