function check() {
    var score = 0
    var right_answer = document.getElementById("q1-a");
    var q1_answer_b = document.getElementById("q1-b");
    var q1_answer_c = document.getElementById("q1-c");
    var q1_answer_d = document.getElementById("q1-d");
    if (right_answer.checked == true) {
        score++
        alert('Q1 answer right')
    } else {
        alert('Q1 answer wrong')
    }

    var right_answer2 = document.getElementById("q2-a");
    var q2_answer_b = document.getElementById("q2-b");
    var q2_answer_c = document.getElementById("q2-c");
    var q2_answer_d = document.getElementById("q2-b");
    if (q2_answer_b.checked == true) {
        score++
        alert('Q2 answer right')
    } else {
        alert('Q2 answer wrong')
    }


    var q3_answer_a = document.getElementById("q3-a");
    var q3_answer_b = document.getElementById("q3-b");
    var q3_answer_c = document.getElementById("q3-c");
    var q3_answer_d = document.getElementById("q3-b");
    if (q3_answer_a.checked == true) {
        score++
        alert('Q3 answer right')
    } else {
        alert('Q3 answer wrong')
    }

    var q4_answer_a = document.getElementById("q4-a");
    var q4_answer_b = document.getElementById("q4-b");
    var q4_answer_c = document.getElementById("q4-c");
    var q4_answer_d = document.getElementById("q4-b");
    if (q4_answer_b.checked == true) {
        score++
        alert('Q4 answer right')
    } else {
        alert('Q4 answer wrong')
    }


    var q5_answer_a = document.getElementById("q5-a");
    var q5_answer_b = document.getElementById("q5-b");
    var q5_answer_c = document.getElementById("q5-c");
    var q5_answer_d = document.getElementById("q5-d");
    if (q5_answer_d.checked == true) {
        score++
        alert('Q5 answer right')
    } else {
        alert('Q5 answer wrong')
    }

    alert("your score is "+ score++)



}