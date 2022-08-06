$(document).ready(function(){
    const AllLevels = []

    //---- Accunts class, only have one Admin account
    class Accounts{
        constructor() {
            this.passCode = "H543";
        }

        loginCheck = function(pass){
            if (pass == this.passCode){
                return true;     
            }else{
                return false;
            }
        }
    }
    //---- Check admin login passcode
    $( "#loginAdmin" ).click(function() {
        const admin = new Accounts();
        (admin.loginCheck(prompt('Enter Passcode'))) ? window.location.href = 'add.html' : alert("Wrong Passcode");
    });


    //---- Course class
    class Course{
        constructor(courseName,courseHours, courseTecher, courseLink){
            this.courseName = courseName
            this.courseHours = courseHours
            this.courseTecher = courseTecher
            this.courseLink = courseLink
        }

        courseDetails = function(){
            return [this.courseName, this.courseHours, this.courseTecher, this.courseLink];
        }    
    }

     //---- Lab Course class (Inherit from Course class)
    class labCourse extends Course {
        constructor(courseName,courseHours, courseTecher, courseLink ,labHours,labName, labTecher){
            super(courseName, courseHours, courseTecher, courseLink); // inherit from parant class
            this.labHours = labHours
            this.labName = labName
            this.labTecher = labTecher
        }

        labCourseDetails = function(){
            return [this.courseName, this.courseHours, this.courseTecher, this.courseLink, this.labHours, this.labName, this.labTecher];
        }    
    }

    //---- Levels class
    class Levels{ 
        constructor(levelName, levelImage, levelLink) {
            this.levelName = levelName
            this.levelImage = levelImage;
            this.levelLink = levelLink;
            this.Courses = []
        }
      
        getCourses = function(courseDetails){
            return this.Courses.push(courseDetails);
        }   
    }

    class Lectures {
        lectureDetails = []
        constructor(courseLink, lectureName, lectureYoutubeLink) {
            this.courseLink = courseLink
            this.lectureName = lectureName 
            this.lectureYoutubeLink = lectureYoutubeLink
        }

        getCourseName = function(){
            AllLevels.forEach(function(element) {
                console.log(element);
            });
            
            
            //lectureDetails.push("test")
            //return this.Courses.push(courseDetails);
        }   
        
        getLectures = function(){
            //return this.Courses.push(courseDetails);
        }
    }


    const xx = new Lectures("1","2","3")
    console.log(xx)

    //----- Create objects for levels and cusrces
    c1 = new Levels("مقررات السنة الاولى","course1.jpg","c1");
    c1.getCourses(new Course("التربية الإسلامية",1,"معلم النظري","c101").courseDetails())
    c1.getCourses(new Course("اللغة العربية 1",2,"معلم النظري","c102").courseDetails())
    c1.getCourses(new Course("اللغة الإنجليزية 1",2,"معلم النظري","c103").courseDetails())
    c1.getCourses(new Course("الرياضيات 1",3,"معلم النظري","c104").courseDetails())
    c1.getCourses(new Course("الفيزياء العامة",2,"معلم النظري","c105").courseDetails())
    c1.getCourses(new Course("الصحة والسلامة المهنية",1,"معلم النظري","c106").courseDetails())
    c1.getCourses(new Course("التفكير الإبداعي",1,"معلم النظري","c107").courseDetails())
    c1.getCourses(new labCourse("اساسيات البرمجة",2,"معلم النظري","c111",4,"اسم المعمل","معلم العملي").labCourseDetails())
    c1.getCourses(new labCourse("تطبيقات الحاسوب 1",2,"معلم النظري","c112",4,"اسم المعمل","معلم العملي").labCourseDetails())
    c1.getCourses(new labCourse("مبادئ التشغيل والصيانة",2,"معلم النظري","c113",4,"اسم المعمل","معلم العملي").labCourseDetails())

    //console.log(c1)
    AllLevels.push(c1)


    c2 = new Levels("مقررات السنة الثانية","course2.jpg","c2");
    c2.getCourses(new Course("التربية الإسلامية",1,"معلم النظري","c201").courseDetails())
    c2.getCourses(new Course("اللغة العربية 2",2,"معلم النظري","c202").courseDetails())
    c2.getCourses(new Course("اللغة الإنجليزية 2",2,"معلم النظري","c203").courseDetails())
    c2.getCourses(new Course("الرياضيات 2",3,"معلم النظري","c204").courseDetails())
    c2.getCourses(new Course("إحصاء",2,"معلم النظري","c205").courseDetails())
    c2.getCourses(new Course("الإتصال والتواصل",1,"معلم النظري","c206").courseDetails())
    c2.getCourses(new labCourse("قواعد البيانات",2,"معلم النظري","c211",4,"اسم المعمل","معلم العملي").labCourseDetails())
    c2.getCourses(new labCourse("تطبيقات الحاسوب 2",2,"معلم النظري","c212",5,"اسم المعمل","معلم العملي").labCourseDetails())
    c2.getCourses(new labCourse("البرمجة المرئية 1",2,"معلم النظري","c213",5,"اسم المعمل","معلم العملي").labCourseDetails())
    c2.getCourses(new labCourse("صيانة الحاسوب",1,"معلم النظري","c214",3,"اسم المعمل","معلم العملي").labCourseDetails())
    //console.log(c2)
    AllLevels.push(c2)


    c3 = new Levels("مقررات السنة الثالثة","course3.jpg","c3");
    c3.getCourses(new Course("التربية الإسلامية",1,"معلم النظري","c301").courseDetails())
    c3.getCourses(new Course("اللغة العربية 3",2,"معلم النظري","c302").courseDetails())
    c3.getCourses(new Course("اللغة الإنجليزية 3",3,"معلم النظري","c303").courseDetails())
    c3.getCourses(new Course("الرياضيات 3",3,"معلم النظري","c304").courseDetails())
    c3.getCourses(new Course("إدارة المشروعات الصغرى",1,"معلم النظري","c305").courseDetails())
    c3.getCourses(new labCourse("تحليل وتصميم النظم",2,"معلم النظري","c311",3,"اسم المعمل","معلم العملي").labCourseDetails())
    c3.getCourses(new labCourse("تطبيقات الحاسوب 3",1,"معلم النظري","c312",4,"اسم المعمل","معلم العملي").labCourseDetails())
    c3.getCourses(new labCourse("البرمجة المرئية 2",2,"معلم النظري","c313",3,"اسم المعمل","معلم العملي").labCourseDetails())
    c3.getCourses(new labCourse("إدارة شبكات الحاسوب",2,"معلم النظري","c314",3,"اسم المعمل","معلم العملي").labCourseDetails())
    c3.getCourses(new labCourse("تطبيقات علمية - المشروع",1,"معلم النظري","c315",5,"اسم المعمل","معلم العملي").labCourseDetails())
    //console.log(c3)
    AllLevels.push(c3)

    //console.log(AllLevels)

    //--- to get courses for each level
    getCourses = function(i){
        Courses = []
        AllLevels[i].Courses.forEach(function(courses){
              Courses.push(" " + courses[0] + " ")          
        })
        return Courses;
    }
    //--- to get levels
    for (i = 0; i < AllLevels.length; i++){
        //console.log(AllLevels[i])
        $("#allLevels").append(
            '<article class="course"> <div><img src="./images/' 
            + AllLevels[i].levelImage + 
            '" alt=""></div> <div class="course_info"><h3>' 
            + AllLevels[i].levelName + '</h3><p>' +
            getCourses(i)
            +
            '</p><br><a href="course.html?level='+ AllLevels[i].levelLink + '" class="btn btn-primary"> المواد المتوفرة </a></div></article>'
        );
    }

 
    //--- to get courses for each level
    getCourseDetails = function(i){
        Courses = []
        AllLevels[i].Courses.forEach(function(courses){
            Courses.push([courses[0],courses[2],courses[3]])          
        })
        return Courses;
    }
    if (document.location.pathname.match(/[^\/]+$/)[0] == "course.html"){
        if (new URL(window.location.href).searchParams.get("level") == "c1"){
            $(levelName).text(AllLevels[0].levelName);
            //console.log(getCourseDetails(0))
            for (i = 0; i < getCourseDetails(0).length; i++){
                $("#allCourses").append(
                    '<article class="course"><div class="course_info"><h3>'+
                    getCourseDetails(0)[i][0]
                    +'</h3>'+
                    '<div>اسم الاستاذ: ' + getCourseDetails(0)[i][1] + '</div>'
                    +'<br><a href="lectures.html?course='+ getCourseDetails(0)[i][2] +'" class="btn btn-primary">المحاضرات المتوفرة</a></div></article>'
                ); 
            }      
        }else if (new URL(window.location.href).searchParams.get("level") == "c2"){
            $(levelName).text(AllLevels[1].levelName);
            for (i = 0; i < getCourseDetails(1).length; i++){
                $("#allCourses").append(
                    '<article class="course"><div class="course_info"><h3>'+
                    getCourseDetails(1)[i][0]
                    +'</h3>'+
                    '<div>اسم الاستاذ: ' + getCourseDetails(0)[i][1] + '</div>'
                    +'<br><a href="lectures.html?course='+ getCourseDetails(1)[i][2] +'" class="btn btn-primary">المحاضرات المتوفرة</a></div></article>'

                ); 
            }
        }else if (new URL(window.location.href).searchParams.get("level") == "c3"){
            $(levelName).text(AllLevels[2].levelName);
            for (i = 0; i < getCourseDetails(2).length; i++){
                $("#allCourses").append(
                    '<article class="course"><div class="course_info"><h3>'+
                    getCourseDetails(2)[i][0]
                    +'</h3>'+
                    '<div>اسم الاستاذ: ' + getCourseDetails(0)[i][1] + '</div>'
                    +
                    '<br><a href="lectures.html?course='+ getCourseDetails(2)[i][2] +'" class="btn btn-primary">المحاضرات المتوفرة</a></div></article>'

                ); 
            }
        }else{
            $(levelName).text("بيانات غير صحيحة");
        }
    }
});