"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type DropdownOption = {
  value: string;
  label: string;
};

type DropdownSelectProps = {
  id?: string;
  name?: string;
  value: string;
  options: DropdownOption[];
  placeholder?: string;
  ariaLabel: string;
  onValueChange: (value: string) => void;
  leadingIcon?: ReactNode;
  compactOnMobile?: boolean;
};

export function DropdownSelect({
  id,
  name,
  value,
  options,
  placeholder,
  ariaLabel,
  onValueChange,
  leadingIcon,
  compactOnMobile = false,
}: DropdownSelectProps) {
  const generatedId = useId();
  const listboxId = generatedId + "-options";
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>();
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    const handleResize = () => {
      setIsOpen(false);
      setMenuStyle(undefined);
    };
    document.defaultView?.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.defaultView?.removeEventListener("resize", handleResize);
    };
  }, []);

  function openMenu(index?: number) {
    const selectedIndex = options.findIndex((option) => option.value === value);
    setActiveIndex(index ?? (selectedIndex >= 0 ? selectedIndex : 0));

    if (
      compactOnMobile &&
      window.matchMedia("(max-width: 767px)").matches &&
      triggerRef.current
    ) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuWidth = Math.min(192, window.innerWidth - 32);
      const preferredLeft =
        document.documentElement.dir === "rtl"
          ? triggerRect.left
          : triggerRect.right - menuWidth;
      const left = Math.min(
        Math.max(16, preferredLeft),
        window.innerWidth - menuWidth - 16,
      );

      setMenuStyle({
        position: "fixed",
        top: triggerRect.bottom,
        left,
        width: menuWidth,
      });
    } else {
      setMenuStyle(undefined);
    }

    setIsOpen(true);
  }

  function selectOption(option: DropdownOption) {
    onValueChange(option.value);
    setIsOpen(false);
    setMenuStyle(undefined);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        openMenu();
        return;
      }
      setActiveIndex((index) => (index + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) {
        openMenu();
        return;
      }
      setActiveIndex((index) => (index - 1 + options.length) % options.length);
    } else if (event.key === "Home" && isOpen) {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End" && isOpen) {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (
      (event.key === "Enter" || event.key === " ") &&
      isOpen
    ) {
      event.preventDefault();
      const activeOption = options[activeIndex];
      if (activeOption) selectOption(activeOption);
    } else if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      setIsOpen(false);
      setMenuStyle(undefined);
    } else if (event.key === "Tab" && isOpen) {
      setIsOpen(false);
      setMenuStyle(undefined);
    } else if (
      (event.key === "Enter" || event.key === " ") &&
      !isOpen
    ) {
      event.preventDefault();
      openMenu();
    }
  }

  return (
    <div ref={rootRef} className="relative">
      {name && <input type="hidden" name={name} value={value} />}
      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={
          isOpen ? listboxId + "-" + activeIndex : undefined
        }
        onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex items-center gap-2 border border-sky-200/80 bg-card text-start text-sm text-foreground shadow-sm outline-none transition duration-200 hover:border-primary/50 hover:bg-sky-50/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-sky-300 dark:border-sky-900 dark:hover:bg-sky-950/40 dark:focus-visible:ring-sky-800",
          compactOnMobile
            ? "h-10 w-10 justify-center rounded-xl p-0 md:w-auto md:justify-start md:rounded-full md:px-3"
            : "h-12 w-full rounded-2xl px-4",
        )}
      >
        {leadingIcon && (
          <span className="flex shrink-0 items-center text-primary">
            {leadingIcon}
          </span>
        )}
        <span
          className={cn(
            "min-w-0 flex-1 truncate",
            compactOnMobile && "hidden md:inline",
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-primary transition-transform duration-200",
            isOpen && "rotate-180",
            compactOnMobile && "hidden md:block",
          )}
        />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={ariaLabel}
          style={menuStyle}
          className={cn(
            "dropdown-menu z-50 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-sky-200/80 bg-card p-1.5 shadow-xl shadow-sky-950/10 ring-1 ring-sky-100/70 dark:border-sky-900 dark:ring-sky-950",
            menuStyle
              ? "fixed"
              : compactOnMobile
                ? "absolute end-0 w-48 max-w-[calc(100vw-2rem)]"
                : "absolute end-0 w-full max-w-[calc(100vw-2rem)]",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <div
                key={option.value}
                id={listboxId + "-" + index}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                className={cn(
                  "cursor-pointer rounded-xl px-3 py-2.5 text-start text-sm transition-colors",
                  isActive || isSelected
                    ? "bg-sky-100 text-sky-950 dark:bg-sky-950/70 dark:text-sky-100"
                    : "text-foreground hover:bg-sky-50 hover:text-sky-950 dark:hover:bg-sky-950/50 dark:hover:text-sky-100",
                )}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
