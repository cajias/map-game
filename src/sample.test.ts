describe("A thing", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });

  it("should be ok", () => {
    expect(2).toBe(2);
  });

  describe("a nested thing", () => {
    it("should work", () => {
      expect(3).toBe(3);
    });
  });
});
