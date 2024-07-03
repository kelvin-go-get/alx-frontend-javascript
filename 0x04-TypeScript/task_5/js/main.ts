// task_5/js/main.ts

// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Unique identifier
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Unique identifier
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 60, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 40, brand: "MajorCredits" };
console.log(sumMajorCredits(majorSubject1, majorSubject2));

const minorSubject1: MinorCredits = { credits: 20, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 10, brand: "MinorCredits" };
console.log(sumMinorCredits(minorSubject1, minorSubject2));
