import { screen } from "@testing-library/react";

export const getBadge = (text: string) => screen.getByText(text);
