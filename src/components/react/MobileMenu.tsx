import { useState, useEffect, useRef, useCallback } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  openLabel: string;
  closeLabel: string;
  links: NavLink[];
  webAppUrl: string;
  webAppLabel: string;
}

export default function MobileMenu({ openLabel, closeLabel, links, webAppUrl, webAppLabel }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = 'mobile-nav-menu';

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) {
      setOpen(false);
      triggerRef.current?.focus();
    }
  }, [open]);

  // Close on outside click
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (open && menuRef.current && !menuRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleKeyDown, handleOutsideClick]);

  // Focus first link when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>('a, button');
      first?.focus();
    }
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="mobile-menu-wrapper">
      <button
        ref={triggerRef}
        className="mobile-menu-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? closeLabel : openLabel}
      >
        <span aria-hidden="true">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </span>
      </button>

      {open && (
        <div
          id={menuId}
          ref={menuRef}
          className="mobile-menu-panel"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
            <li>
              <a
                href={webAppUrl}
                className="mobile-cta"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {webAppLabel}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
