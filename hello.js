// ১. ভেরিয়েবল (Variables)
const myName = "Noor Alam";
const company = "Hyundai Samho Shipyard";
let kiipLevel = 3;
let isReadyForE74 = true;

// ২. অবজেক্ট (Object)
const myStatus = {
    location: "South Korea",
    profession: "Pipe Liner",
    dream: "Software Developer"
};

// ৩. কনসোলে আউটপুট দেখা
console.log("Hey, I am " + myName + " from " + company);
console.log("My current dream is to be a " + myStatus.dream);

// ৪. একটি ছোট কন্ডিশন (Condition)
if(kiipLevel <= 3 && isReadyForE74) {
    console.log("InshaAllah, I will get E-7-4 visa in April!");
} else {
    console.log("I need to study more for the visa.");
}