import { captitalize } from ".";

test('Capitalise hello', () => {
    expect(captitalize("hello")).toBe("Hello");
});

test('capitalise hello', () => {
    expect(captitalize("odin")).toBe("Odin");
});

test('capitalise hello', () => {
    expect(captitalize("Project")).toBe("Project");
});


test('capitalise hello', () => {
    expect(captitalize("ICe cream")).toBe("ICe cream");
});

test('capitalise hello', () => {
    expect(captitalize("Ice cream")).toBe("Ice cream");
});

