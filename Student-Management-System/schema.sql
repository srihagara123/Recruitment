CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    roll_no VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('Male','Female','Other')),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    department VARCHAR(50) NOT NULL,
    year INTEGER NOT NULL CHECK (year BETWEEN 1 AND 4),
    semester INTEGER NOT NULL CHECK (semester BETWEEN 1 AND 8),
    attendance_percentage DECIMAL(5,2) CHECK (attendance_percentage BETWEEN 0 AND 100),
    current_cgpa DECIMAL(3,2) CHECK (current_cgpa BETWEEN 0 AND 10),
    admission_type VARCHAR(20) NOT NULL CHECK (admission_type IN ('Scholarship','Non-Scholarship')),
    scholarship_slab INTEGER CHECK (
        scholarship_slab IN (1,2,3)
        OR scholarship_slab IS NULL
    ),
    placement_status VARCHAR(20) DEFAULT 'Not Eligible'
);
INSERT INTO students
(roll_no, name, gender, email, phone, department, year, semester, attendance_percentage, current_cgpa, admission_type, scholarship_slab, placement_status)

VALUES

('CB.EN.U4CSE23001','Rahul Kumar','Male','rahul.kumar@am.students.edu','9876543210','CSE',2,4,92.50,8.91,'Scholarship',1,'Not Eligible'),

('CB.EN.U4CSE23002','Ananya Reddy','Female','ananya.reddy@am.students.edu','9123456780','CSE',2,4,89.75,8.56,'Scholarship',2,'Not Eligible'),

('CB.EN.U4CSE23003','Arjun Nair','Male','arjun.nair@am.students.edu','9012345678','CSE',3,6,94.20,9.12,'Scholarship',1,'Internship'),

('CB.EN.U4ECE23001','Sneha Sharma','Female','sneha.sharma@am.students.edu','9988776655','ECE',4,8,85.60,8.04,'Non-Scholarship',NULL,'Placed'),

('CB.EN.U4ECE23002','Vikram Rao','Male','vikram.rao@am.students.edu','9345678123','ECE',1,2,88.30,8.20,'Scholarship',3,'Not Eligible'),

('CB.EN.U4AIE23001','Priya Menon','Female','priya.menon@am.students.edu','9876501234','AI',3,5,91.80,9.35,'Scholarship',1,'Internship'),

('CB.EN.U4AIE23002','Karthik Sai','Male','karthik.sai@am.students.edu','9654321870','AI',2,3,80.40,7.65,'Non-Scholarship',NULL,'Not Eligible'),

('CB.EN.U4CYB23001','Meghana Das','Female','meghana.das@am.students.edu','9765432109','Cyber Security',4,7,87.90,8.55,'Scholarship',2,'Placed'),

('CB.EN.U4CYB23002','Aditya Verma','Male','aditya.verma@am.students.edu','9900112233','Cyber Security',2,4,95.15,9.48,'Scholarship',1,'Internship'),

('CB.EN.U4IT23001','Nikhil Joshi','Male','nikhil.joshi@am.students.edu','9445566778','IT',3,6,86.60,8.18,'Non-Scholarship',NULL,'Internship'),

('CB.EN.U4IT23002','Aishwarya Iyer','Female','aishwarya.iyer@am.students.edu','9988123456','IT',1,1,93.40,9.22,'Scholarship',1,'Not Eligible'),

('CB.EN.U4MEC23001','Rohit Gupta','Male','rohit.gupta@am.students.edu','9345012345','Mechanical',4,8,82.10,7.88,'Non-Scholarship',NULL,'Placed'),

('CB.EN.U4MEC23002','Neha Singh','Female','neha.singh@am.students.edu','9789012345','Mechanical',2,4,90.20,8.67,'Scholarship',2,'Not Eligible'),

('CB.EN.U4EEE23001','Harsha Patel','Male','harsha.patel@am.students.edu','9654012345','Electrical',3,5,84.90,8.01,'Non-Scholarship',NULL,'Internship'),

('CB.EN.U4CIV23001','Pooja Nair','Female','pooja.nair@am.students.edu','9876123456','Civil',4,7,89.70,8.44,'Scholarship',3,'Placed');
SELECT * FROM students;

ALTER SEQUENCE students_id_seq RESTART WITH 15;
