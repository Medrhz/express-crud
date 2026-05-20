const express = require("express");

app = express();
const students = [
	{
		id: 1,
		fullName: "Ahmed Benali",
		age: 20,
		address: "12 Hassan II Street",
		city: "Casablanca",
		notes: "Excellent in mathematics",
		gender: "Male",
	},
	{
		id: 2,
		fullName: "Sara El Amrani",
		age: 22,
		address: "45 Mohammed V Avenue",
		city: "Rabat",
		notes: "Participates in robotics club",
		gender: "Female",
	},
	{
		id: 3,
		fullName: "Youssef Karim",
		age: 19,
		address: "78 Atlas Road",
		city: "Marrakech",
		notes: "Needs improvement in English",
		gender: "Male",
	},
	{
		id: 4,
		fullName: "Lina Tazi",
		age: 21,
		address: "9 Palmier Residence",
		city: "Tangier",
		notes: "Top performer in science",
		gender: "Female",
	},
];

app.post("/students", (req, res) => {
	const { fullname, age, address, city, notes, gender } = req.body;
	const student = {
		fullname: fullname,
		age: age,
		address: address,
		city: city,
		notes: notes,
		gender: gender,
	};
});
{
	students.push(student);
	const response = {
		success: true,
		message: "student created",
		code: "CREATED",
		data: student,
	};
	res.json(response);
}

app.listen(3000, () => {
	console.log("server is running");
});
