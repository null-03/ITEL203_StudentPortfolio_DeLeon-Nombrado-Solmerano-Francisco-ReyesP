# Take input from the user
n = int(input("Enter an integer: "))

# Check if the input is greater than 0
if n > 0:
    # Print the multiplication table header
    print(f"Multiplication table for {n}:")
    
    # Use nested loops to create and print the table
    for i in range(1, n + 1):  # Outer loop for rows
        for j in range(1, n + 1):  # Inner loop for columns
            # Print the multiplication result with tab space
            print(i * j, end="\t")
        print()  # Move to the next line after each row
else:
    print("Please enter a number greater than 0.")
