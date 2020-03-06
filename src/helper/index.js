export function hasSomeParentTheClass(element, classname) {
    if (element.className && element.className.split && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}
export function formatDate(date) {
	const monthNames = ["Jan", "Feb", "March", "Apr", "May", "June",
	  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	
    let d = date ? new Date(date) : new Date(),
        month = '' + monthNames[d.getMonth()],
        day = '' + d.getDate(),
        year = d.getFullYear(),
		h = d.getHours(),
		m = d.getMinutes();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return day + " " + month + "," + year + " " + h + ":" + m;
}