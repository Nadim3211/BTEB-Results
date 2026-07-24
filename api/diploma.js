export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { exam, year, sem, roll, reg } = req.query;
  
  try {
    // btebresultszone এর API ব্যবহার করবো
    const url = `https://btebresultszone.com/api/result?exam=${exam}&year=${year}&semester=${sem}&roll=${roll}&reg=${reg}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.status(200).json({ success: true, data: data });
    
  } catch (error) {
    res.status(500).json({ success: false, error: "Result পাওয়া যায়নি" });
  }
}
