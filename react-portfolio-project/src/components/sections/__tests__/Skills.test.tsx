import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "../Skills";
import styles from "../Skills.module.css";

test("renders skills title as intended", () => {
  render(<Skills />);
  expect(screen.getByText("My Skills")).toBeInTheDocument();
});

test("renders all three Skills category buttons", () => {
  const { container } = render(<Skills />);

  expect(container.querySelectorAll(`.${styles.categoryButton}`)).toHaveLength(
    3,
  );
});

test("Languages category button is selected by default", () => {
  const { container } = render(<Skills />);

  const languagesButton = container.querySelector(`.${styles.categoryButton}`);

  expect(languagesButton).toHaveClass(styles.categoryButtonActive);
});
