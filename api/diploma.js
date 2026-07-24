export default async function handler(req, res) {
    const { roll, regulation } = req.query;

    if (!roll) {
        return res.status(400).json({ success: false, message: "Roll number is required!" });
    }

    // টেস্ট করার জন্য ডামি ডেটা (পরে এখানে PDF Parsed Data / Database যুক্ত হবে)
    const mockDatabase = {
        "571779": {
            roll: "571779",
            technology: "Diploma in Engineering",
            regulation: "Regulation 2016",
            institute: "Tangail Polytechnic Institute, Tangail",
            results: [
                {
                    semester: "8th Semester",
                    publish_date: "11 March, 2025",
                    status: "Passed",
                    gpa: "4.00",
                    grade: "A+"
                },
                {
                    semester: "7th Semester",
                    publish_date: "01 September, 2024",
                    status: "Passed",
                    gpa: "3.96",
                    grade: "A"
                }
            ]
        }
    };

    const resultData = mockDatabase[roll];

    if (resultData) {
        return res.status(200).json({ success: true, ...resultData });
    } else {
        return res.status(404).json({ success: false, message: "Result Not Found!" });
    }
}
