/**
 * Created by mbax on 9/19/15.
 */


// Get arrayLength through argument
function insertionSort() {

    var timeoutTotal = 4000;

    for (var pivot = 0; pivot < 5; pivot++) {

            for (var i = pivot + 1; i < 6; i++, timeoutTotal += 4000) {

                console.log(pivot + "(" + $("#" + pivot).text() + ")" + " - " + i + "(" + $("#" + i).text() + ")");

                swapIn(pivot, i, timeoutTotal);
                highlightsIn(pivot, i, timeoutTotal - 3000 );

        }
    }

    // Put it in a "clear" function later
    setTimeout(function() {

        console.log("Clearing... " + pivot + " - " + i)

        for (var j = 0; j < 6; j++) {

            $("#ai" + j).css({"border-color": "black",
                "border-width": "1px"});

        }

    }, timeoutTotal - 2000);
}

function swapIn(pivot, i, timeout) {

    console.log("timeout: " + timeout);

    setTimeout(function() {

        console.log("swapIn called. " + pivot + " - " + i)

        if ($("#ai" + pivot).text() > $("#ai" + i).text()) {


            var keeper = $("#ai" + pivot).text();

            $("#ai" + pivot).text($("#ai" + i).text());
            $("#ai" + i).text(keeper);

        }

    }, timeout);

}

function highlightsIn(pivot, i, timeout) {

//    console.log("timeout: " + timeout);

    setTimeout(function() {

        console.log("highlightsIn called. " + pivot + " - " + i)

        for (var j = 0; j < 6; j++) {

            $("#ai" + j).css({"border-color": "black",
                "border-width": "1px"});

        }

        $("#ai" + pivot).css({"border-color": "red",
                              "border-width": "2px"});

        $("#ai" + i).css({"border-color": "blue",
            "border-width": "2px"});

    }, timeout);

}