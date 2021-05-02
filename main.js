var second = 0;
var minute = 0;
var hour   = 0;
var stext  = "s.";
var mtext  = "m.";
var htext  = "h.";

	var interval = setInterval(function() {
	    second++;
	    $('.second').text(second + stext);

	    if (second === 60)
	      {
	        minute++;
	        $('.minute').text(minute + mtext);
	        second = 0;
	      }

		  if (minute === 60)
		    {
		      hour++;
		      $('.hour').text(hour + htext);
		      minute = 0;
		    }
	}, 1000);