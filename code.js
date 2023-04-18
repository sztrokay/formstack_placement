<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>

//Loading Google Script for ID & Password Check
var url = "https://script.google.com/macros/s/AKfycbxbi_AhW8sxOeqc34NQ5BEQOhxwU3DF1wu7OPjDxfDM6d5W2wok/exec"
fetch(url)
  .then(res => res.json())
  .then((out) =>{
        //Getting test ID from URL
        var href = window.location.href;
        if (href.match(/testID=\d\d\d\d\d\d/)){
            var testID = href.split('testID=')[1]
            if (testID.match(/&/)){
              testID = testID.split('&')[0]
            }
        }
        else{
            var testID = null;
        }
        //Getting test Password from URL
        if (href.match(/PW=/)){
            var PW = href.split('PW=')[1]
            if (PW.match(/&/)){
              PW = PW.split('&')[0]
            }
        }
        else{
            var PW = null;
        }
        //If Test ID was found, check ID, password and test status against database
        if (testID){
            const thisTestData = out.find(function(record){
                return record.testID == testID && record.PW == PW && record.status =="ASSIGNED";
            })
            //If user is authenticated, log event on console, bo further action needed
            if (thisTestData && thisTestData.PW == PW && thisTestData.status =="ASSIGNED"){
                console.log('User authenticated')
            }
            //If user is not authenticated or test status is not OK, display non-unique error
            else{
                var event = new Event('change');
                $('#field103280476_1').attr('checked', 'checked'); //Display non-unique error
                var element = document.getElementById('field103280476_1');
                element.dispatchEvent(event)
                $('#fsSubmit4178511').hide() //Hide submit button
            }
        }
        
    })
//Getting test ID
$(document).ready(function() {
    var href = window.location.href;
    if (href.match(/testID=\d\d\d\d\d\d/)){
        var testID = href.split('testID=')[1]
        if (testID.match(/&/)){
            testID = testID.split('&')[0]
        }
        $('#field103129732').val(testID);
    }
    else{
        var testID = null;
        var event = new Event('change');
        $('#field103280463_1').attr('checked', 'checked'); //Display no ID error
        var element = document.getElementById('field103280463_1');
        element.dispatchEvent(event)
        $('#fsSubmit4178511').hide() //Hide submit button
    }
})  

//Loading marking key
var scoreUrl = "https://script.google.com/macros/s/AKfycbw3TeKAhwsLvE13P1_1j6Jyt5mCa7sXKEZteizIaNadASagyfJs/exec";
//Mark object
var scoresObj;
$.getJSON(scoreUrl, function(data){
    scoresObj = data;
    });

//Score called on each field change
function score(){
    
    //call answers field
    var answerField = document.getElementById('field104091533');
    var answers = ''
    
    //Initiate part one score
    var part1score = 0;
    
    //For each element, check if answer matches answer in obj, and if so, increase score with one point
    
    var q1 = document.getElementById('q1').value;
    var q1a = scoresObj.q1.a.split(',');for (var i = 0; i < q1a.length; i++){if (q1a[i].replaceAll(' ', '') == q1.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q1 + ',';
    
    var q2 = document.getElementById('q2').value;
    var q2a = scoresObj.q2.a.split(',');for (var i = 0; i < q2a.length; i++){if (q2a[i].replaceAll(' ', '') == q2.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q2 + ',';

    var q3 = document.getElementById('q3').value;
    var q3a = scoresObj.q3.a.split(',');for (var i = 0; i < q3a.length; i++){if (q3a[i].replaceAll(' ', '') == q3.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q3 + ',';
    
    var q4 = document.getElementById('q4').value;
    var q4a = scoresObj.q4.a.split(',');for (var i = 0; i < q4a.length; i++){if (q4a[i].replaceAll(' ', '') == q4.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q4 + ',';
    
    var q5 = document.getElementById('q5').value;
    var q5a = scoresObj.q5.a.split(',');for (var i = 0; i < q5a.length; i++){if (q5a[i].replaceAll(' ', '') == q5.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q5 + ',';
    
    var q6 = document.getElementById('q6').value;
    var q6a = scoresObj.q6.a.split(',');for (var i = 0; i < q6a.length; i++){if (q6a[i].replaceAll(' ', '') == q6.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q6 + ',';
    
    var q7 = document.getElementById('q7').value;
    var q7a = scoresObj.q7.a.split(',');for (var i = 0; i < q7a.length; i++){if (q7a[i].replaceAll(' ', '') == q7.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q7 + ',';
    
    var q8 = document.getElementById('q8').value;
    var q8a = scoresObj.q8.a.split(',');for (var i = 0; i < q8a.length; i++){if (q8a[i].replaceAll(' ', '') == q8.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q8 + ',';
    
    var q9 = document.getElementById('q9').value;
    var q9a = scoresObj.q9.a.split(',');for (var i = 0; i < q9a.length; i++){if (q9a[i].replaceAll(' ', '') == q9.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q9 + ',';
    
    var q10 = document.getElementById('q10').value;
    var q10a = scoresObj.q10.a.split(',');for (var i = 0; i < q10a.length; i++){if(q10a[i].replaceAll(' ', '') == q10.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q10 + ',';
    
    var q11 = document.getElementById('q11').value;
    var q11a = scoresObj.q11.a.split(',');for (var i = 0; i < q11a.length; i++){if (q11a[i].replaceAll(' ', '') == q11.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q11 + ',';
    
    var q12 = document.getElementById('q12').value;
    var q12a = scoresObj.q12.a.split(',');for (var i = 0; i < q12a.length; i++){if (q12a[i].replaceAll(' ', '') == q12.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q12 + ',';
    
    var q13 = document.getElementById('q13').value;
    var q13a = scoresObj.q13.a.split(',');for (var i = 0; i < q13a.length; i++){if (q13a[i].replaceAll(' ', '') == q13.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q13 + ',';
    
    var q14 = document.getElementById('q14').value;
    var q14a = scoresObj.q14.a.split(',');for (var i = 0; i < q14a.length; i++){if (q14a[i].replaceAll(' ', '') == q14.toLowerCase().replaceAll(' ', '')){part1score++;break;}}
    answers += q14 + ',';
    //Record part 1 scores in field
    document.getElementById('field103129767').value = part1score;

    //Initiate part two score
    var part2score = 0;
    
    //For each element, check if answer matches answer in obj, and if so, increase score with one point
    
    var q15 = document.getElementById('q15').value;
    var q15a = scoresObj.q15.a.split(',');for (var i = 0; i < q15a.length; i++){if (q15a[i].replaceAll(' ', '') == q15.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q15 + ',';
    
    var q16 = document.getElementById('q16').value;
    var q16a = scoresObj.q16.a.split(',');for (var i = 0; i < q16a.length; i++){if (q16a[i].replaceAll(' ', '') == q16.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q16 + ',';
    
    var q17 = document.getElementById('q17').value;
    var q17a = scoresObj.q17.a.split(',');for (var i = 0; i < q17a.length; i++){if (q17a[i].replaceAll(' ', '') == q17.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q17 + ',';
    
    var q18 = document.getElementById('q18').value;
    var q18a = scoresObj.q18.a.split(',');for (var i = 0; i < q18a.length; i++){if (q18a[i].replaceAll(' ', '') == q18.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q18 + ',';
    
    var q19 = document.getElementById('q19').value;
    var q19a = scoresObj.q19.a.split(',');for (var i = 0; i < q19a.length; i++){if (q19a[i].replaceAll(' ', '') == q19.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q19 + ',';
    
    var q20 = document.getElementById('q20').value;
    var q20a = scoresObj.q20.a.split(',');for (var i = 0; i < q20a.length; i++){if (q20a[i].replaceAll(' ', '') == q20.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q20 + ',';
    
    var q21 = document.getElementById('q21').value;
    var q21a = scoresObj.q21.a.split(',');for (var i = 0; i < q21a.length; i++){if (q21a[i].replaceAll(' ', '') == q21.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q21 + ',';
    
    var q22 = document.getElementById('q22').value;
    var q22a = scoresObj.q22.a.split(',');for (var i = 0; i < q22a.length; i++){if (q22a[i].replaceAll(' ', '') == q22.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q22 + ',';
    
    var q23 = document.getElementById('q23').value;
    var q23a = scoresObj.q23.a.split(',');for (var i = 0; i < q23a.length; i++){if (q23a[i].replaceAll(' ', '') == q23.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q23 + ',';
    
    var q24 = document.getElementById('q24').value;
    var q24a = scoresObj.q24.a.split(',');for (var i = 0; i < q24a.length; i++){if (q24a[i].replaceAll(' ', '') == q24.toLowerCase().replaceAll(' ', '')){part2score++;break;}}
    answers += q24 + ',';
    
    //Record part two scores in field
    document.getElementById('field103129785').value = part2score;
    
    //Initiate part three score
    var part3score = 0;
    
    //For each element, check if answer matches answer in obj, and if so, increase score with one point
    
    var q25 = document.getElementById('q25').value;
    var q25a = scoresObj.q25.a.split(',');for (var i = 0; i < q25a.length; i++){if (q25a[i].replaceAll(' ', '') == q25.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q25 + ',';
    
    var q26 = document.getElementById('q26').value;
    var q26a = scoresObj.q26.a.split(',');for (var i = 0; i < q26a.length; i++){if (q26a[i].replaceAll(' ', '') == q26.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q26 + ',';
    
    var q27 = document.getElementById('q27').value;
    var q27a = scoresObj.q27.a.split(',');for (var i = 0; i < q27a.length; i++){if (q27a[i].replaceAll(' ', '') == q27.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q27 + ',';
    
    var q28 = document.getElementById('q28').value;
    var q28a = scoresObj.q28.a.split(',');for (var i = 0; i < q28a.length; i++){if (q28a[i].replaceAll(' ', '') == q28.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q28 + ',';
    
    var q29 = document.getElementById('q29').value;
    var q29a = scoresObj.q29.a.split(',');for (var i = 0; i < q29a.length; i++){if (q29a[i].replaceAll(' ', '') == q29.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q29 + ',';
    
    var q30 = document.getElementById('q30').value;
    var q30a = scoresObj.q30.a.split(',');for (var i = 0; i < q30a.length; i++){if (q30a[i].replaceAll(' ', '') == q30.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q30 + ',';
    
    var q31 = document.getElementById('q31').value;
    var q31a = scoresObj.q31.a.split(',');for (var i = 0; i < q31a.length; i++){if (q31a[i].replaceAll(' ', '') == q31.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q31 + ',';
    
    var q32 = document.getElementById('q32').value;
    var q32a = scoresObj.q32.a.split(',');for (var i = 0; i < q32a.length; i++){if (q32a[i].replaceAll(' ', '') == q32.toLowerCase().replaceAll(' ', '')){part3score++;break;}}
    answers += q32 + ',';
    
    var q33 = document.getElementById('q33').value;
    var q33a = scoresObj.q33.a.split(',');for (var i = 0; i < q33a.length; i++){if (q33a[i].replaceAll(' ', '') == q33.toLowerCase().replaceAll(' ', '')){part3score++;break;}}    
    answers += q33;
    
    //Record part three scores in field
    document.getElementById('field103129787').value = part3score;
    
    //Set answer field value
    answerField.value = answers;

}
</script>
