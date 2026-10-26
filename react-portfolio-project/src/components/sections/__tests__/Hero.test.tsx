import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { expect, test } from "vitest";

test("Hero title and elevator pitch renders properely", () => {
  render(<Hero />);
  expect(screen.getByText("Miguel Baldacchino"));
  expect(
    screen.getByText(
      "I'm a frontend developer focused on writing clean, maintainable code and building polished user experiences with React. I use TypeScript to create reliable, scalable applications with a strong emphasis on code quality and consistency.",
    ),
  );
});
