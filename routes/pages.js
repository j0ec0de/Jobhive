const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index');
});


router.get('/index',(req,res)=>{
    res.render('index');
})

router.get('/placements',(req,res)=>{
  res.render('placements');
})

router.get('/login', (req,res) =>{
    res.render('student/login');
});


router.get('/register', (req,res) =>{
    res.render('student/register');
});


router.get('/adminlogin',(req,res)=>{
  res.render('admin/adminlogin');
});

router.get('/companylogin',(req,res)=>{
  res.render('company/companylogin');
});

router.get('/adminregister', (req,res) =>{
  res.render('admin/adminregister');
});

router.get('/website', (req,res) =>{
  res.render('admin/website');
});


router.get('/companyregister', (req,res) =>{
  res.render('company/companyregister');
});


router.get('/resume',(req,res)=>{
  res.render('student/resume');
});

router.get('/mockTest',(req,res)=>{
  res.render('student/mockTest');
});



router.get('/changepassword',authController.compisLoggedIn,(req,res) =>{
  res.render('company/changepassword');
})


router.get('/changepass',authController.isLoggedIn,(req,res)=>{
  res.render('student/changepass');
});


router.get('/studentprofile', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('student/studentprofile', {
      user: req.user
    });
  } else {
    res.redirect('/dashboard');
  }
  
});


router.get('/internships',authController.compisLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('company/internships', {
      user: req.user
    });
  } else {
    res.redirect('/compdash');
  }
});



router.get('/interviews',authController.compisLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('company/interviews', {
      user: req.user
    });
  } else {
    res.redirect('/compdash');
  }
});



router.get('/dashboard', authController.isLoggedIn, (req, res) => {
    console.log(req.user);
    if( req.user ) {
      res.render('student/dashboard', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
    
});

router.get('/admindash', authController.admisLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('admin/admindash', {
      user: req.user
    });
  } else {
    res.redirect('/adminlogin');
  }
  
});


router.get('/viewstudents', authController.admisLoggedIn, authController.viewRegisteredStudent, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.students) {
      res.render('admin/viewstudents', { user: req.user, students: req.students });
      console.log(req.students);
    } else {
      res.render('admin/viewstudents', { user: req.user, message: 'No students found' });
    }
  } else {
    res.redirect('/adminlogin');
  }
});

router.get('/viewcompany', authController.admisLoggedIn, authController.viewRegisteredCompany, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.companys) {
      res.render('admin/viewcompany', { user: req.user, companys: req.companys });
      console.log(req.companys);
    } else {
      res.render('admin/viewcompany', { user: req.user, message: 'No companys found' });
    }
  } else {
    res.redirect('/adminlogin');
  }
});


router.get('/compdash', authController.compisLoggedIn, authController.viewInterview, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.interviews) {
      res.render('company/compdash', { user: req.user, interviews: req.interviews });
      //console.log(req.interviews);
    } else {
      res.render('company/compdash', { user: req.user, message: 'No interviews found' });
    }
  } else {
    res.redirect('/companylogin');
  }
});

router.get('/recruit', authController.compisLoggedIn, authController.viewInterview, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.interviews) {
      res.render('company/recruit', { user: req.user, interviews: req.interviews });
      //console.log(req.interviews);
    } else {
      res.render('company/recruit', { user: req.user, message: 'No interviews found' });
    }
  } else {
    res.redirect('/companylogin');
  }
});

router.get('/viewlist/:interviewId', authController.compisLoggedIn, authController.viewInterviewApplicants, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.applicants) {
      res.render('company/viewlist', { user: req.user, applicants: req.applicants });
    } else {
      res.render('company/viewlist', { user: req.user, message: 'No applicants found' });
    }
  } else {
    res.redirect('/companylogin');
  }
});

router.get('/view/:student_id', authController.isLoggedIn, authController.viewRegisteredInterviews, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.interviews) {
      res.render('student/view', { user: req.user, interviews: req.interviews });
    } else {
      res.render('student/view', { user: req.user, message: 'No interviews found' });
    }
  } else {
    res.redirect('/companylogin');
  }
});

router.get('/studentinterviews', authController.isLoggedIn, authController.viewInterviewForStudents, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.studentInterviews) {
      res.render('student/studentinterviews', { user: req.user, studentInterviews: req.studentInterviews });
      console.log(req.studentInterviews);
    } else {
      res.render('student/studentinterviews', { user: req.user, message: 'No interviews found' });
    }
  } else {
    res.redirect('/dashboard');
  }
});

router.get('/registerinterview', authController.isLoggedIn, authController.viewInterviewForStudentsToApply, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.interviewid) {
      res.render('student/registerinterview', { user: req.user, interviewid: req.interviewid });
      console.log(req.interviewid);
    } else {
      res.render('student/registerinterview', { user: req.user, message: 'No interviews found' });
    }
  } else {
    res.redirect('/dashboard');
  }
});


router.get('/test', authController.isLoggedIn, authController.viewTest, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.test) {
      res.render('student/test', { user: req.user, test: req.test });
      console.log(req.test);
    } else {
      res.render('student/test', { user: req.user, message: 'Error' });
    }
  } else {
    res.redirect('/dashboard');
  }
});


/*router.get('/mock', authController.admisLoggedIn, authController.viewQuestions, (req, res) => {
  console.log(req.user);
  if (req.user) {
    if (req.mockDet && req.mockDet.length > 0) {
      res.render('admin/mock', { user: req.user, mockDet: req.mockDet });
      console.log(req.mockDet);
    } else {
      res.render('admin/mock', { user: req.user, message: 'No records found' });
    }
  } else {
    res.redirect('/admdash');
  }
});
*/

router.get('/mock', authController.admisLoggedIn, (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.render('admin/mock', { user: req.user });
  } else {
    res.redirect('/admdash');
  }
});




router.get('/predict', (req, res) => {
  res.render('predict');
});




module.exports = router;
