const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2")
const cors = require("cors");

const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "",
    database: "hospital_management_database"
    
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



//sa pag kuha sa entry patient data from mysql and display to react
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM pat_entry";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//sa pag kuha sa all_admitted patients data from mysql and display to react
app.get("/api/get/showadmittedpatients", (req, res) => {
    const sqlGet = "CALL showAdmittedPatients()";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//sa pag kuha sa all_admitted patients data from mysql and display to react
app.get("/api/get/showdischargedpatients", (req, res) => {
    const sqlGet = "CALL showDischargedPatients()";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//sa pag kuha sa room_details data from mysql and display to react
app.get("/api/get/vacantrooms", (req, res) => {
    const sqlGet = "CALL showVacantRooms()";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//sa pag kuha sa room_details data from mysql and display to react
app.get("/api/get/occupiedrooms", (req, res) => {
    const sqlGet = "CALL showOccupiedRooms()";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

//sa pag kuha sa department details nga data from mysql and display to react
app.get("/api/get/departments", (req, res) => {
    const sqlGet = "SELECT * FROM department";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


//sa pag kuha sa department details nga data from mysql and display to react
app.get("/api/get/billerdischargelist", (req, res) => {
    const sqlGet = "SELECT discharge_audit_table.patient_number, pat_entry.first_name, pat_entry.last_name FROM discharge_audit_table, pat_entry WHERE discharge_audit_table.patient_number = pat_entry.patient_number";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// //sa pag insert sa data sa admit_audit_table table
// app.post("/api/post", (req, res) => {
//     const {patient_number, doctor_number, entry_date, } = req.body;
//     const sqlInsert = "INSERT INTO admit_audit_table VALUES(?, ?, ?)";
//     db.query(sqlInsert, [patient_number, doctor_number, entry_date], (error, result) => {
//         if(error) {
//             console.log(error);
//         }

//     })
// });


//sa pag insert sa data sa pat_admit table
app.post("/api/post/admit", (req, res) => {
    const {patient_number, advance_payment, mode_of_payment, room_number, department_code, date_of_admission, initial_condition, diagnosis, treatment, doctor_number, attendant_name} = req.body;
    const sqlInsert1 = "INSERT INTO pat_admit VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert1, [patient_number, advance_payment, mode_of_payment, room_number, department_code, date_of_admission, initial_condition, diagnosis, treatment, doctor_number, attendant_name], (error, result) => {
        if(error) {
            console.log(error);
        }

    })

    const sqlInsert = "INSERT INTO admit_audit_table VALUES(?, ?, ?)";
    db.query(sqlInsert, [patient_number, doctor_number, date_of_admission], (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});

//sa pag insert sa data sa pat_discharge table
app.post("/api/post/discharge", (req, res) => {
    const {patient_number, treatment_given, treatment_advice, date_discharge} = req.body;
    const sqlInsert1 = "INSERT INTO pat_dis VALUES(?, ?, ?, NULL, NULL, ?)";
    db.query(sqlInsert1, [patient_number, treatment_given, treatment_advice, date_discharge], (error, result) => {
        if(error) {
            console.log(error);
        }

    })

    const sqlInsert = "INSERT INTO discharge_audit_table VALUES(?, ?)";
    db.query(sqlInsert, [patient_number, date_discharge], (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});


//sa pag insert sa data sa pat_entry table
app.post("/api/post/patentry", (req, res) => {
    const {patient_number, first_name, last_name, age, sex	, address, city	, phone_number	, entry_date, prefix, doctor_number	, diagnosis	,department_code} = req.body;
    const sqlInsert1 = "INSERT INTO pat_entry VALUES(CONCAT('PT', ?), ?, ?, ?, ?, ?, ?, ?, ?, CONCAT(?,?), ?, ?)";
    db.query(sqlInsert1, [patient_number, first_name, last_name, age, sex	, address, city	, phone_number	, entry_date, prefix, doctor_number	, diagnosis	,department_code], (error, result) => {
        if(error) {
            console.log(error);
        }

    })

});


//sa pag insert sa data sa doc_reg table
app.post("/api/post/dradddata", (req, res) => {
    const {doctor_number, first_name, last_name, qualification, dr_address	, phone_number, salary	, date_hired	, department_code} = req.body;
    const sqlInsert1 = "INSERT INTO doc_reg VALUES(CONCAT('DR', ?), ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert1, [doctor_number, first_name, last_name, qualification, dr_address	, phone_number, salary	, date_hired	, department_code], (error, result) => {
        if(error) {
            console.log(error);
        }

    })

    const sqlInsert = "INSERT INTO all_doctors VALUES(CONCAT('DR', ?), ?)";
    db.query(sqlInsert, [doctor_number, department_code], (error, result) => {
        if(error) {
            console.log(error);
        }

    })


    const sqlInsert2 = "INSERT INTO admin_server VALUES(CONCAT('DR', ?), CONCAT('DR', ?))";
    db.query(sqlInsert2, [doctor_number, doctor_number], (error, result) => {
        if(error) {
            console.log(error);
        }

    })


    
});


//sa pag insert sa data sa doc_on_call table
app.post("/api/post/dcadddata", (req, res) => {
    const {doctor_number, first_name, last_name, qualification	, phone_number, dc_address,  fees_per_call	, payment_due, department_code} = req.body;
    const sqlInsert1 = "INSERT INTO doc_on_call VALUES(CONCAT('DC', ?), ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert1, [doctor_number, first_name, last_name, qualification, phone_number, dc_address,  fees_per_call, payment_due, department_code], (error, result) => {
        if(error) {
            console.log(error);
        }

    })

    const sqlInsert = "INSERT INTO all_doctors VALUES(CONCAT('DC', ?), ?)";
    db.query(sqlInsert, [doctor_number, department_code], (error, result) => {
        if(error) {
            console.log(error);
        }

    })


    const sqlInsert2 = "INSERT INTO admin_server VALUES(CONCAT('DC', ?), CONCAT('DC', ?))";
    db.query(sqlInsert2, [doctor_number, doctor_number], (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});



//sa pag insert sa data sa department table
app.post("/api/post/insertdepartment", (req, res) => {
    const {department_code, department_name, department_location, facilities} = req.body;
    const sqlInsert1 = "INSERT INTO department VALUES(?, ?, ?, ?)";
    db.query(sqlInsert1, [department_code, department_name, department_location, facilities], (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});


//sa pag insert sa data sa room_details table
app.post("/api/post/insertroomdetails", (req, res) => {
    const {room_number, room_type, charges_per_day} = req.body;
    const sqlInsert1 = "INSERT INTO room_details VALUES(?, ?, 'N', ?, NULL)";
    db.query(sqlInsert1, [room_number, room_type, charges_per_day], (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});
// //sa pag insert sa data sa table
// app.post("/api/post", (req, res) => {
//     const {patient_number, first_name, last_name, age, sex, address, city	, phone_number	, entry_date	, doctor_number	, diagnosis	,department_code} = req.body;
//     const sqlInsert = "INSERT INTO pat_entry VALUES(?, ?, ?, ?, ? , ?, ?, ?, ? , ?, ?, ?)";
//     db.query(sqlInsert, [patient_number, first_name, last_name, age, sex	, address	, city	, phone_number, entry_date	, doctor_number	, diagnosis	,department_code], (error, result) => {
//         if(error) {
//             console.log(error);
//         }

//     })
// });


//if ever mag delete ug data
app.delete("/api/remove/:patient_number", (req, res) => {
    const {patient_number} = req.params;
    const sqlRemove = "DELETE FROM pat_entry WHERE patient_number = ?";
    db.query(sqlRemove, patient_number, (error, result) => {
        if(error) {
            console.log(error);
        }

    })
});

//pag display sa usa ka-row from a certain table
app.get("/api/get/:patient_number", (req, res) => {
    const {patient_number} = req.params;
    const sqlGet = "SELECT * FROM pat_entry WHERE patient_number = ?";
    db.query(sqlGet, patient_number,  (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});



//pag display sa usa ka-row from the admitted patients table
app.get("/api/get/viewoneaddmittedpatient/:patient_number", (req, res) => {
    const {patient_number} = req.params;
    const sqlGet = "SELECT * FROM pat_entry JOIN pat_admit ON pat_entry.patient_number = pat_admit.patient_number WHERE pat_entry.patient_number = ?";
    db.query(sqlGet, patient_number,  (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});




///////// DRI NGA PART PAG WORK KAY DILI GA DISPLAY ANG NO OF DAYS!
//pag display sa usa ka-row from the discharged patients table
app.get("/api/get/billerviewonedischargedpatient/:patient_number", (req, res) => {
    const {patient_number} = req.params;

    const sqlGet = "SELECT * FROM pat_entry JOIN pat_dis ON pat_entry.patient_number = pat_dis.patient_number JOIN admit_audit_table ON pat_entry.patient_number = admit_audit_table.patient_number JOIN billing ON pat_entry.patient_number = billing.patient_number WHERE pat_entry.patient_number = ?";
    const sqlGet1 = "SELECT DATEDIFF(pat_dis.date_discharge, pat_admit.date_of_admission) AS numdays FROM pat_dis, pat_admit WHERE pat_dis.patient_number  = ?";
    db.query([sqlGet, sqlGet1], patient_number,  (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    })

});

///////////////////////////////////////////////////////////////////



//pag display sa usa ka-row from the discharged patients table
app.get("/api/get/viewonedischargedpatient/:patient_number", (req, res) => {
    const {patient_number} = req.params;
    const sqlGet = "SELECT * FROM pat_entry JOIN pat_dis ON pat_entry.patient_number = pat_dis.patient_number WHERE pat_dis.patient_number = ?";
    db.query(sqlGet, patient_number,  (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});


//sa pag update ug data from inputs towards database
app.put("/api/update/:patient_number", (req, res) => {
    const {patient_number} = req.params;
    const {first_name, last_name, age, sex, address, city	, phone_number	, entry_date	, doctor_number	, diagnosis	,department_code} = req.body;
    const sqlUpdate = "UPDATE pat_entry SET first_name = ?, last_name = ?, age = ?, sex = ?, address = ?, city = ?, phone_number = ?, entry_date = ?, doctor_number = ?, diagnosis = ?, department_code = ? WHERE patient_number = ?)";
    db.query(sqlUpdate, [ first_name, last_name, age, sex	, address	, city	, phone_number, entry_date	, doctor_number	, diagnosis	,department_code, patient_number], (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});



// //sa pag update ug data from inputs towards database
// app.put("/api/put/:patient_number", (req, res) => {
//     const {patient_number} = req.params;
//     const {doctor_number	, entry_date} = req.body;
//     const sqlInsert = "INSERT INTO admit_audit_table VALUES(?, ?, ?)";
//     db.query(sqlInsert, [ patient_number, doctor_number, entry_date], (error, result) => {
//         if(error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });






app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO ran dom_number VALUE(33333)";
    // db.query(sqlInsert, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hellow World!");
    // });

});

app.listen(5002, () => {
    console.log("Server is running on port 5002");
})