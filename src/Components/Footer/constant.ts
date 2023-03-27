export const schedules = [
  { time: "04:10AM", name: "Samadhi Arati" },
  { time: "04:30AM", name: "Mangala Arati" },
  { time: "07:15AM", name: "Shringar Arati" },
  { time: "07:25AM", name: "Guru Puja" },
  { time: "08:00AM", name: "Bhagavatam" },
  { time: "08:30AM", name: "Pushpa Arati" },
  { time: "12:00PM", name: "Raj Bhoga Arati" },
  { time: "12:45PM", name: "Temple Closes" },
  { time: "04:00PM", name: "Utthapan Arati" },
  { time: "06:30PM", name: "Sandhaya Arati" },
  { time: "08:00PM", name: "Shayan Arati" },
  { time: "08:15PM", name: "Temple Closes" },
];
schedules.forEach((item) => {
  item.time = ` ${item.time}`;
});
export const contactInfos = [
  {
    icon: "home",
    text: "Mota Bazar,VV Nagar,Anand,Gujarat",
  },
  {
    icon: "envelope",
    text: "iskconvvnagar@yahoo.in",
  },
  {
    icon: "phone",
    text: "+ 01 234 567 88",
  },
];
contactInfos.forEach((item) => {
  item.text = ` ${item.text}`;
});