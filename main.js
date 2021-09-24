random_number = Math.floor((Math.random()*array_1.length)+1)

Element_of_array = quick_draw_data_set[random_number]



timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function draw()
{
    check_sketch();
    if (drawn_sketch = sketch)
    {
        answer_holder = "set";
        score = 1;
        Score = score;
    }
}

function check_sketch()
{
    timer_counter = 1;
    timer = timer_counter;
    console.log(timer_counter);
    if (timer_counter > 400)
    {
        timer_counter = 0;
        timer_check = "";
    }
    if (answer_holder = set)
    {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }

}

function updateCanvas()
{
    background("white");
}
function setup()
{
    canvas = CreateCanvas(280, 280)
    canvas.center();
    background("white");
}