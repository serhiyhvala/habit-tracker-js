const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const habits = [
    {
        id: 1,
        img: "./assets/img/habit.svg",
        name: "No caffeine",
        completed: [false, false, false, false, false, false, false],
    },
];

const getDayButton = ({id}, isChecked, index, dayName) =>
`<button class="${isChecked ? 'checked' : ''}" onClick="toggleHabit('${id}', 
'${index}')"><img src="./assets/img/check.svg" width="25" 
alt=""><span>${dayName}</span></button>`

const toggleHabit = (habitId, index) => {
    const elem = document.querySelectorAll(`[data-id = '${habitId}'] .habit-plan button`)
    
    const countDays = habits.length * 7
    const percentOneDay = (100 / countDays)

    const progressBarElem = document.querySelector('.progress-bar > div')

    const isChecked = elem[index].classList.contains('checked');
 
    if(isChecked)
        elem[index].classList.remove('checked')
    else
        elem[index].classList.add('checked')
        elem.innerHTML = '<img src="./assets/img/check.svg" width="25" alt="">'

    const currentPercent = progressBarElem.textContent.replace('%', '')
    const percent = isChecked ? +currentPercent - percentOneDay : +currentPercent + percentOneDay
    progressBarElem.textContent = percent.toFixed(1) + `%`
    progressBarElem.style.width = percent.toFixed(1) + `%`
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
