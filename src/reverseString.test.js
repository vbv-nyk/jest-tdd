import { reverseString } from ".";

test("reverse name", () => {
    expect(reverseString("name")).toBe("eman");
});

test("reverse game", () => {
    expect(reverseString("game")).toBe("emag");
});


test("reverse lays", () => {
    expect(reverseString("lays")).toBe("syal");
});