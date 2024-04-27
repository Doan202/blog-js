$(document).ready(function () {
	function data() {
		var input = $("#number").val();
		if (input > 0) {
			$(".refult").text("kết quả là:");
			for (i = 0; i <= input; i++) {
				$(".refult").append("<span>" + i + "</span>");
				console.log(i);
			}
		} else {
			$(".refult").text("nhập vào 1 số");
		}
		$("#number").val("");
	};
	$("button").click(function () {
		data();
	});

	$(document).keypress(function (e) {
		if (e.which === 13) {
			console.log('enter');
			data();
		}
	});
	//viec da hoan thanh
	$(document).ready(function() {
		$('#addTaskButton').click(function() {
			addTask();
		});
	
		$('#taskInput').keypress(function(e) {
			if (e.which === 13) {
				addTask();
			}
		});
	
		function addTask() {
			var taskValue = $('#taskInput').val().trim();
			if (taskValue) {
				var listItem = $('<li></li>');
				var checkBox = $('<input type="checkbox">').click(function() {
					$(this).closest('li').toggleClass('completed');
				});
				listItem.append(checkBox).append($('<span>').text(taskValue));
				$('#todoList').append(listItem);
				$('#taskInput').val(''); // Clear input field
			} else {
				alert("Please enter a task!");
			}
		}
	});
});