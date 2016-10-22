
	  var d = new Date();
      var Money = null;
	  var checkNegative = null;
	  var Month = Number(d.getMonth() + 1);
	  var Day = d.getDate();
	  var Year = d.getFullYear();
	  var dates = Month + " - " + Day + " - " + Year;
	  var eNumS = null;
	  
      function addOne() {
       document.getElementById('form').innerHTML = "<form><input name='add' id='form1' placeHolder='Chore/Reason'></input><input name='pay' id='form2' type='number' min='0' max='100' placeHolder='Earn Amount'></input></form><button onClick='submitAddition()'>Submit</button>"
      }
      function takeOne() {
       document.getElementById('form').innerHTML = "<form><input name='purchase' id='form1' placeHolder='The purchased item'></input><input name='cost' id='form2' min='0' max='250' type='number' placeHolder='Cost Of This'></input></form><button onClick='submitSubtraction()'>Submit</button>"
      }
      function saver() {
       localStorage.MONEYZZ = Money;
       localStorage.eNumS = Number(eNumS);
       localStorage.JOINEDZZ = 1;
       localStorage.setItem("payments", document.getElementById('displayArea').innerHTML);
      }
      function constantReloader() {
       document.getElementById('display2').innerHTML = "Money In Your Account: " + Number(localStorage.MONEYZZ);
      }
      function load() {
       setInterval( function() { saver(); });
       setInterval( function() { constantReloader(); }, 25);
       document.getElementById('displayArea').innerHTML = localStorage.getItem("payments");
       Money = Number(localStorage.MONEYZZ);
      }
      function startUp() {
       if (localStorage.JOINEDZZ == null) {
        localStorage.JOINEDZZ = 1;
        localStorage.MONEYZZ = 0;
	localStorage.eNumS = 0;
        localStorage.setItem("payments", "");
        alert('Welcome');
       } else if (localStorage.JOINEDZZ == 1) {
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
	   //localStorage.MONEYZZ = Number(localStorage.MONEYZZ) - document.getElementById('form2').value;
	   Money = Number(Money) - Number(document.getElementById('form2').value);
       alert('Success!'); 
	      eNum = eNum + 1;
	   document.getElementById('displayArea').innerHTML = "<p id='" + eNumS + "'>" + dates + ' | ' + document.getElementById('form1').value + " | " + document.getElementById('form2').value + document.getElementById('displayArea').innerHTML + "<button onclick=' function() { document.getElementById('" + eNumS + "').remove()";
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
	   //localStorage.MONEYZZ = Number(localStorage.MONEYZZ) + document.getElementById('form2').value;
	   Money = Number(Money) + Number(document.getElementById('form2').value);
       alert('Success!'); 
	   eNumS = eNumS + 1;
	   document.getElementById('displayArea').innerHTML = "<p id='" + eNumS + "'>" + dates + " | " + document.getElementById('form1').value + " | " + document.getElementById('form2').value + document.getElementById('displayArea').innerHTML + "<button onclick=' function() { document.getElementById('" + eNumS + "').remove()";
	   document.getElementById('form').innerHTML = '';
      }
	  
	  function reset() {
	  document.getElementById('resetButton').innerHTML = "";
	   document.getElementById('confirm').innerHTML = "<button onClick='yes()'>Yes</button><button onClick='no()'>No</button>"
	  }
	  
	  function yes() {
	   localStorage.MONEYZZ = 0;
	   Money = 0;
	   localStorage.JOINEDZZ = null;
	   document.getElementById('displayArea').innerHTML = '';
	   localStorage.setItem("payments", '');
	   localStorage.eNum = 0;
	   eNumS = 0;
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
	  
	  function no() {
	   document.getElementById('confirm').innerHTML = "";
	   document.getElementById('resetButton').innerHTML = "<button onClick='reset()'>Reset</button>";
	  }
