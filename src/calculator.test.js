import { calculator } from ".";

test("1 + 2", () => {
    expect(calculator(1, 2, '+')).toBe(3);
});

test("2 - 1", () => {
    expect(calculator(2, 1, '-')).toBe(1);
});

test("2 / 1", () => {
    expect(calculator(2, 1, '/')).toBe(2);
});

test("1 * 2", () => {
    expect(calculator(1, 2, '*')).toBe(2);
});