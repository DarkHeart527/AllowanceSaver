
	  var d = new Date();
      var nathanMoney = null;
	  var checkNegative = null;
	  var Month = Number(d.getMonth() + 1);
	  var Day = d.getDate();
	  var Year = d.getFullYear();
	  var dates = Month + " - " + Day + " - " + Year;
	  var nathannathaneNumS = Number(localStorage.nathannathaneNumS);
	  
      function addOne() {
       document.getElementById('form').innerHTML = "<form><input name='add' id='form1' placeHolder='Chore/Reason'></input><input name='pay' id='form2' type='number' min='0' max='100' placeHolder='Earn Amount'></input></form><button onClick='submitAddition()'>Submit</button>"
      }
      function takeOne() {
       document.getElementById('form').innerHTML = "<form><input name='purchase' id='form1' placeHolder='The purchased item'></input><input name='cost' id='form2' min='0' max='250' type='number' placeHolder='Cost Of This'></input></form><button onClick='submitSubtraction()'>Submit</button>"
      }
      function saver() {
       localStorage.nathannathanMoneyZZ = nathanMoney;
       localStorage.nathannathaneNumS = Number(nathannathaneNumS);
       localStorage.nathanJOINEDZZ = 1;
       localStorage.setItem("nathanPayments", document.getElementById('displayArea').innerHTML);
      }
      function constantReloader() {
       document.getElementById('display2').innerHTML = "nathanMoney In Your Account: " + Number(localStorage.nathannathanMoneyZZ);
      }
      function load() {
       setInterval( function() { saver(); });
       setInterval( function() { constantReloader(); }, 25);
       document.getElementById('displayArea').innerHTML = localStorage.getItem("nathanPayments");
       nathanMoney = Number(localStorage.nathannathanMoneyZZ);
      }
      function startUp() {
       if (localStorage.nathanJOINEDZZ == null) {
        localStorage.nathanJOINEDZZ = 1;
        localStorage.nathannathanMoneyZZ = 0;
	localStorage.nathannathaneNumS = 0;
        localStorage.setItem("nathanPayments", "");
        alert('Welcome');
       } else if (localStorage.nathanJOINEDZZ == 1) {
        alert('Welcome Back');
       }
      }
      function submitSubtraction() {
       if (document.getElementById('form1').value == '') {
        alert('Missing Information');
       } else {
        passSub(); 
       }
      }
      function passSub() {
        if (document.getElementById('form2').value == '') {
        alert('Missing Information');
       } else {
        acceptSub(); 
       }
      }
      function acceptSub() {
	   //localStorage.nathannathanMoneyZZ = Number(localStorage.nathannathanMoneyZZ) - document.getElementById('form2').value;
	   nathanMoney = Number(nathanMoney) - Number(document.getElementById('form2').value);
       alert('Success!'); 
	      nathannathaneNumS = nathannathaneNumS + 1;
	   document.getElementById('displayArea').innerHTML = "<p id='" + nathannathaneNumS + "'>" + dates + ' | ' + document.getElementById('form1').value + " | " + document.getElementById('form2').value + document.getElementById('displayArea').innerHTML + '<button onclick=" function() { document.getElementById(' + nathannathaneNumS + ').remove() }">Delete This Data Line</button>';
	   document.getElementById('form').innerHTML = '';
      }
      function submitAddition() {
       if (document.getElementById('form1').value == '') {
        alert('Missing Information');
       } else {
        passAdd(); 
       }
      }
      function passAdd() {
        if (document.getElementById('form2').value == '') {
        alert('Missing Information');
       } else {
        acceptAdd(); 
       }
      }
      function acceptAdd() {
	   //localStorage.nathannathanMoneyZZ = Number(localStorage.nathannathanMoneyZZ) + document.getElementById('form2').value;
	   nathanMoney = Number(nathanMoney) + Number(document.getElementById('form2').value);
       alert('Success!'); 
	   nathannathaneNumS = nathannathaneNumS + 1;
	   document.getElementById('displayArea').innerHTML = "<p id='" + nathannathaneNumS + "'>" + dates + " | " + document.getElementById('form1').value + " | " + document.getElementById('form2').value + document.getElementById('displayArea').innerHTML + "<button onclick=' function() { document.getElementById('" + nathannathaneNumS + "').remove()";
	   document.getElementById('form').innerHTML = '';
      }
	  
	  function reset() {
	  document.getElementById('resetButton').innerHTML = "";
	   document.getElementById('confirm').innerHTML = "<button onClick='yes()'>Yes</button><button onClick='no()'>No</button>"
	  }
	  
	  function yes() {
	   localStorage.nathannathanMoneyZZ = 0;
	   nathanMoney = 0;
	   localStorage.nathanJOINEDZZ = null;
	   document.getElementById('displayArea').innerHTML = '';
	   localStorage.setItem("nathanPayments", '');
	   localStorage.nathaneNum = 0;
	   nathannathaneNumS = 0;
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
	  
	  function no() {
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
