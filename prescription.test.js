// Import the necessary functions and variables from the JavaScript file
const {
  totalCost,
  withDiscount,
  withCoupon,
  timmy,
  sarah,
  rocky,
} = require("./prescription.js");

// Testing the totalCost() function
describe("totalCost function", () => {
  // Test if the totalCost() function returns the correct total cost for sarah
  test("returns the correct total cost for sarah", () => {
    expect(totalCost(sarah.pricePerRefill, sarah.refills)).toBe(50);
  });

  // Test if the totalCost() function returns the correct total cost for timmy
  test("returns the correct total cost for timmy", () => {
    expect(totalCost(timmy.pricePerRefill, timmy.refills)).toBe(75);
  });

  // Test if the totalCost() function returns the correct total cost for rocky
  // one test here
});

// Testing the withDiscount() function
describe("withDiscount function", () => {
  // Test if the withDiscount() function returns the correct total cost with subscription discount for sarah
  test("returns the correct total cost with subscription discount for sarah", () => {
    expect(
      withDiscount(
        totalCost(sarah.pricePerRefill, sarah.refills),
        sarah.subscription
      )
    ).toBe(37.5);
  });

  // Test if the withDiscount() function returns the correct total cost with subscription discount for rocky
  test("returns the correct total cost with subscription discount for rocky", () => {
    expect(
      withDiscount(
        totalCost(rocky.pricePerRefill, rocky.refills),
        rocky.subscription
      )
    ).toBe(112.5);
  });

  // Test if the withDiscount() function returns the correct total cost with subscription discount for timmy
  // one more test for timmy
});

// Testing the prescription properties
// describe("Prescription Tests", () => {
// Test if rocky has prescription property with value "phenylephrine"
describe("Prescription Test", () => {
  it("check if rocky has phenylephrine", () => {
    expect(rocky).toHaveProperty("prescription");
    expect(rocky.prescription).toEqual("phenylephrine");
  });
});

// Testing the pricePerRefill properties
describe("Prescription Test", () => {
  // Test if rocky has pricePerRefill property with value 30
  it("check if rocky has pricePerRefill", () => {
    expect(rocky).toHaveProperty("pricePerRefill");
    expect(rocky.pricePerRefill).toEqual(30);
  });

  // Test if timmy has pricePerRefill property with value 30
  it("check if rocky has pricePerRefill", () => {
    expect(rocky).toHaveProperty("pricePerRefill");
    expect(rocky.pricePerRefill).toEqual(30);
  });

  // Test if sarah has pricePerRefill property with value 30
  it("check if rocky has pricePerRefill", () => {
    expect(rocky).toHaveProperty("pricePerRefill");
    expect(rocky.pricePerRefill).toEqual(30);
  });
});

// Testing the refills properties
describe("Testing Refilss", () => {
  // Test if sarah has refills property with value 1
  it("refills for sarah is 1", () => {
    expect(sarah.refills).toBe(1);
  });
  // Test if rocky has refills property with value 5

  // Test if timmy has refills property with value 3
});

// Testing the subscription properties
describe("Testing Subscription Properties", () => {
  // Test if timmy has subscription property with value false
  it("subscription for timmy is false", () => {
    expect(timmy.subscription).toBe(false);
  });
  // Test if sarah has subscription property with value true

  // Test if rocky has subscription property with value true
});

// Testing the coupon properties
describe("Testing coupon", () => {
  // Test if timmy has coupon property with value true
  it("check if timmy has coupon", () => {
    expect(timmy.coupon).toBe(true);
  });
  // Test if sarah has coupon property with value false
  // Test if rocky has coupon property with value true
});
