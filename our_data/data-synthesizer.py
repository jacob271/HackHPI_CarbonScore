import csv
import random
import numpy as np

months = 12

with open('mock_data.csv', 'r') as file:
    csv_file = csv.DictReader(file)
    header = csv_file.fieldnames
    with open('transformed_mock_data.csv', 'r+') as new_file:
        csv_writer = csv.DictWriter(new_file, fieldnames=header)
        csv_writer.writeheader()
        for row in csv_file:
            csv_writer.writerow(row)
            new_row = row
            fpu = float(row['averageFootprintPerUnit'])
            quantity = float(row['quantity'])
            next_fpus = [random.uniform(
                fpu-fpu/2, fpu+fpu/2) for _ in range(0, months-1)]
            next_quantities = [random.uniform(
                quantity-quantity/8, quantity+quantity/2) for _ in range(0, months-1)]
            next_total = np.multiply(next_fpus, next_quantities)
            for i in range(0, months-1):
                new_row['averageFootprintPerUnit'] = next_fpus[i]
                new_row['quantity'] = next_quantities[i]
                new_row['totalFootprint'] = next_total[i]
                new_row['month'] = i+2
                csv_writer.writerow(new_row)
