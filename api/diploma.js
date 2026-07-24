export default async function handler(req, res) {
  const { roll, reg } = req.query;
  
  // btebresultszone এর API ব্যবহার
  const url = `https://btebresultszone.com/api/result?roll=${roll}&reg=${reg}&exam=DIPLOMA&year=2023&semester=8`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  res.status(200).json(data);
}
