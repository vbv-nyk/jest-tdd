import { caesarCipher } from ".";

test("caesarCipher: attack at dawn", () => {
    expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("caesarCipher: Hello, how are you? 18", () => {
    expect(caesarCipher("Hello, how are you?", 18)).toBe("zwddg, zgo sjw qgm?");
})

test("caesarCipher: Hello, how are you? 5", () => {
    expect(caesarCipher("Hello, how are you?", 5)).toBe("mjqqt, mtb fwj dtz?");
})

test("caesarCipher: abcdefghijklmnopqrstuvwxyz 18", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 18)).toBe("stuvwxyzabcdefghijklmnopqr");
})

test("caesarCipher: KJHASKJDHAKJDHASKJHDASKJ 18", () => {
    expect(caesarCipher("KJHASKJDHAKJDHASKJHDASKJ", 5)).toBe("pomfxpoimfpoimfxpomifxpo");
})