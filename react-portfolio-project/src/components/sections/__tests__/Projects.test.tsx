import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
import styles from "../Projects.module.css";

test(`renders all projects by default`, () => {
  render(<Projects />);
  expect(screen.getByText("My Projects")).toBeInTheDocument();
});

test("All category button is selected by default", () => {
  const { container } = render(<Projects />);

  const allButton = container.querySelector(`.${styles.categoryButton}`);

  expect(allButton).toHaveClass(styles.categoryButtonActive);
});

test("renders all three Projects category buttons", () => {
  const { container } = render(<Projects />);

  expect(container.querySelectorAll(`.${styles.categoryButton}`)).toHaveLength(
    3,
  );
});
