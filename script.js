var app = new Vue({
  el: "#app",
  data: {
      lists:[
      { name:"Protagonist",
       codename: "Joker", 
       flipped: false
      },
      { name: "Anne", 
       codename: "Panther", 
       flipped: false 
      },
      { name: "Ryuji", 
       codename: "Skull", 
       flipped: false
      }
    ],
    
    name: "",
    email: "",
    nameWorks: false,
    emailWorks: false, 

  },
  
  watch: {
    name: function () {
      if (this.name.length >= 2) {
        this.nameWorks = true;
      } else {
        this.nameWorks = false;
      }
    },
    email: function () {
      var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var works = validEmail.test(this.email);
      if (works) {
        this.emailWorks = true;
      } else {
        this.emailWorks = false;
      }
    }
  },
  computed: {
    submit: function () {
      if (this.name.length < 1 && this.email.length < 1) {
        return "";
      } else if (this.nameWorks && this.emailWorks) {
        return "Thank You Your Form is Submitted";
      } else {
        return "Your Form is Not Submitted";
      }
    },
    message: function () {
      if (this.name.length < 1 && this.email.length < 1) {
        return "";
      } else if (!this.nameWorks && !this.emailWorks) {
        return "Name needs to be 2 characters & your email needs to be submitted as email@domain.xx";
      } else if (!this.nameWorks && this.emailWorks) {
        return "Your name needs to be at least 2 Characters";
      } else if (this.nameWorks && !this.emailWorks) {
        return "Your email needs to be submitted as email@domainname.xx";
      } else {
        return "";
      }
    }
  }
});