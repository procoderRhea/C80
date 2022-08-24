name_of_the_student_array=[];
function submit(){
    var display_student_array=[];
    for(var r=1; r<=4; r++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+r).value;
        name_of_the_student_array.push(name_of_the_student);
    }
    var length_student_array=name_of_the_student.length;

    for(var c=0; c<length_student_array; c++){
        display_student_array.push("<h4> NAME-"+name_of_the_student_array[c]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    var display_student_array_sorting=[];
    var length_student_array=name_of_the_student_array.length;

    for(var c=0; c<length_student_array; c++){
        display_student_array_sorting.push("<h4> NAME-"+name_of_the_student_array[c]+"</h4>");
        
    }
    var remove_commas=display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}
