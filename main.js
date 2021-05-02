var second = 0;
		var minute = 0;
		var hour   = 0;


	var interval = setInterval(function() {
	    second++;
	    $('.second').text(second);

	    if (second === 60)
	      {
	        minute++;
	        $('.minute').text(minute);
	        second = 0;
	      }

		  if (minute === 60)
		    {
		      hour++;
		      $('.hour').text(hour);
		      minute = 0;
		    }
	}, 1000);