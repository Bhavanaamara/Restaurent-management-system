// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-menu-item-form');
    const menuList = document.getElementById('menu-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;

        if (itemName.trim() !== '' && itemPrice.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${itemName}</span>: $${itemPrice}`;
            menuList.appendChild(listItem);

            // Clear form fields after adding item
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const customerName = document.getElementById('customer-name').value;
        const orderDetails = document.getElementById('order-details').value;

        if (customerName.trim() !== '' && orderDetails.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${customerName}</strong>: ${orderDetails}`;
            ordersList.appendChild(listItem);

        // Clear form fields after adding order
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const customerName = document.getElementById('customer-name').value;
        const phone = document.getElementById('phone').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;

        const reservationRow = document.createElement('tr');
        reservationRow.innerHTML = `
            <td>${customerName}</td>
            <td>${phone}</td>
            <td>${reservationDate}</td>
            <td>${reservationTime}</td>
        `;
        reservationsTable.appendChild(reservationRow);

        // Clear form fields after adding reservation
        form.reset();
    });
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const customerName = document.getElementById('customer-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${customerName}</strong> - Email: ${email}, Phone: ${phone}`;
        customerList.appendChild(listItem);

        // Clear form fields after adding customer
        form.reset();
    });
    // script.js
document.addEventListener('DOMContentLoaded', function() {
    const salesReport = document.getElementById('sales-report');

    // Generate a random sales report for demonstration
    const reportData = [
        { date: '2024-03-01', total: 1200 },
        { date: '2024-03-02', total: 1500 },
        { date: '2024-03-03', total: 1800 },
        { date: '2024-03-04', total: 1400 },
        { date: '2024-03-05', total: 1600 }
    ];

    let totalSales = 0;
    reportData.forEach(item => totalSales += item.total);

    const averageSales = totalSales / reportData.length;

    const salesReportHTML = `
        <p>Total Sales: $${totalSales}</p>
        <p>Average Daily Sales: $${averageSales.toFixed(2)}</p>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${reportData.map(item => `<tr><td>${item.date}</td><td>$${item.total}</td></tr>`).join('')}
            </tbody>
        </table>
    `;

    salesReport.innerHTML = salesReportHTML;
});

});