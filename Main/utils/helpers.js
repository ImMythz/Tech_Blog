// Formats the date in the template
module.exports = {
    format_date: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
}