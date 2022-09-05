const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const habits = [
    {
        id: 1,
        img: "./assets/img/habit.svg",
        name: "No caffeine",
        completed: [true, false, false, false, false, false, false],
    },
];

const getDayButton = ({id}, isChecked, index, dayName) =>
`<button class="${isChecked ? 'checked' : ''}" onClick="toggleHabit('${id}', 
'${index}')"><img src="./assets/img/check.svg" width="25" 
alt=""><span>${dayName}</span></button>`

const toggleHabit = (habitId, index) => {
    const elem = document.querySelectorAll(`[data-id = '${habitId}'] .habit-plan button`)

    if(elem[index].classList.contains('checked'))
    elem[index].classList.remove('checked')
    else 
    elem[index].classList.add('checked')
    elem.innerHTML = '<img src="./assets/img/check.svg" width="25" alt="">'

    
    // render(habits.map(habit => {
    //     if(habit.name === habitName)
    //     habit.completed[index] = !habit.completed[index]
    //     return habit
    // }))
}

const getWeekDaysElement = (habit) => {
    return weekDays.map((name, index) => 
    getDayButton(habit, habit.completed[index], index, name)
    ).join('')}

const getHabitElement = (habit) => `
<div class="mb-8 habit" data-id='${habit.id}'>
<div class="habit-header">
<img src='${habit.img}' width="70" alt="" />
<span class="font-semibold text-2xl">${habit.name}</span>
</div>
<div class="habit-plan">
${getWeekDaysElement(habit)}
</div>
</div>`

const render = (habits) => {
    const habitContainer = document.querySelector('.habit-container')
    habitContainer.innerHTML = habits.map(habit => getHabitElement(habit)).join('')
}

render(habits)
