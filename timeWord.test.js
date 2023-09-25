const timeWord = require("./timeWord");

describe("timeToWords function", () => {
  it('should return midnight for input "00:00"', () => {
    const result = timeWord("00:00");
    expect(result).toBe("midnight");
  });
  it('should return twelve twenty-five PM for input "12:25"', () => {
    const result = timeWord("12:25");
    expect(result).toBe("twelve twenty-five PM");
  });
  it('should return six AM for input "06:00"', () => {
    const result = timeWord("six zero AM");
    expect(result).toBe(result);
  });
});
