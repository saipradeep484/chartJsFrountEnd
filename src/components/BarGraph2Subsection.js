import { format, parseISO } from 'date-fns';

// Function to process backend customer data
export function processCustomerData(data) {
    const months = {};

    // Loop through each customer
    data.forEach(customer => {
        const month = format(parseISO(customer.time), 'MMM yyyy'); // Extract month and year from the date
        if (!months[month]) {
            months[month] = {}; // Initialize month entry if not exists
        }
        if (!months[month][customer.city]) {
            months[month][customer.city] = 0; // Initialize city count in that month if not exists
        }
        months[month][customer.city]++; // Increment the customer count for that city in that month
    });

    return months; // Return processed data with months and customer counts
}
